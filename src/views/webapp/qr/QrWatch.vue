<template>
    <div>
        <div class="d-flex" style="position:relative;">
            <v-btn v-if="currentVideo.prev" text
                   :to="{name: 'QrWatch', query: {video: currentVideo.prev}, params: {origin: state()}}" exact
                   class="mb-2">
                <v-icon left>
                    mdi-arrow-left
                </v-icon>
                <span v-if="$vuetify.breakpoint.mdAndUp">Vorherige Episode</span>
                <span v-else>Zurück</span>
            </v-btn>
            <v-btn v-if="currentVideo.instructions" text
                   :to="{name: 'AppQr', params: {origin: state()}}" exact
                   class="mb-2">
                <v-icon left>
                    mdi-arrow-left
                </v-icon>
                Anleitung
            </v-btn>
            <div class="v-btn v-size--default episode">{{currentVideo.name}}</div>
            <v-btn v-if="origin && !origin.isScanner" text
                   :to="{name: 'QrWatch', query: {video: currentVideo.next}, params: {origin: origin.origin}}" exact
                   class="mb-2 ml-auto">
                <span v-if="$vuetify.breakpoint.mdAndUp">Nächste Episode</span>
                <span v-else>Weiter</span>
                <v-icon right>
                    mdi-arrow-right
                </v-icon>
            </v-btn>
            <v-btn v-if="hasEnded && !origin && currentVideo.next" text
                   :to="{name: 'QrScan', query: {video: currentVideo.next}}" exact
                   class="mb-2 ml-auto">
                <span v-if="$vuetify.breakpoint.mdAndUp">Nächste Episode scannen</span>
                <span v-else>Weiter</span>
                <v-icon right>
                    mdi-arrow-right
                </v-icon>
            </v-btn>
            <v-btn v-if="origin && origin.isScanner" text
                   :to="{name: 'QrScan', query: {video: currentVideo.next}}" exact
                   class="mb-2 ml-auto">
                <span v-if="$vuetify.breakpoint.mdAndUp">Nächste Episode scannen</span>
                <span v-else>Weiter</span>
                <v-icon right>
                    mdi-arrow-right
                </v-icon>
            </v-btn>
        </div>
        <v-sheet color="primary lighten-4" light class="pt-2 pl-2 pr-2" elevation="10">
            <v-sheet color="black" dark>
                <v-responsive :aspect-ratio="16/9" max-width="1000px" width="90vw">
                    <div v-show="!videoEnded">
                        <youtube class="avideo" :video-id="getYoutubeId" fit-parent :player-vars="playerVars"
                                 @ended="ended" ref="youtube"/>
                    </div>
                    <div v-show="videoEnded">
                        <v-responsive :aspect-ratio="16/9" width="100%" class="d-flex align-center">
                            <video class="bgvideo" loop muted autoplay src="/img/zeitstrudel_web.mp4"/>
                        </v-responsive>
                        <v-btn absolute :bottom="$vuetify.breakpoint.mdAndUp" :top="$vuetify.breakpoint.smAndDown"
                               @click="replay" class="ml-4">
                            <v-icon left>
                                mdi-replay
                            </v-icon>
                            Erneut ansehen
                        </v-btn>
                        <template v-if="origin">
                            <v-btn absolute bottom right class="ml-4" v-if="hasEnded && currentVideo.next"
                                   color="white" light
                                   :to="{name: 'QrWatch', query: {video: currentVideo.next}, params: {origin: origin.origin}}">
                                Nächste Episode anschauen
                                <v-icon right>mdi-arrow-right</v-icon>
                            </v-btn>
                        </template>
                        <template v-else>
                            <v-btn absolute bottom right class="ml-4" v-if="hasEnded && currentVideo.next"
                                   color="white" light
                                   :to="{name: 'QrScan', query: {video: currentVideo.next}}">
                                <v-icon left>mdi-qrcode-scan</v-icon>
                                {{currentVideo.nextScan}}
                                Scanne den QR Code.
                            </v-btn>
                        </template>
                    </div>
                </v-responsive>
            </v-sheet>
            <p class="pa-3 text-center who font-italic">{{currentVideo.who}}</p>
        </v-sheet>
    </div>
</template>

<script>
    export default {
        name: "QrWatch",
        data: function () {
            return {
                videoEnded: false,
                hasEnded: false,
                playerVars: {
                    modestbranding: 1,
                    controls: 2,
                    showinfo: 0
                },
                origin: undefined,
                youtubes: [
                    {
                        name: "Einführung",
                        id: "llqFIFg5tko",
                        instructions: true,
                        tag: 'intro',
                        next: 'episode1',
                        who: 'Verkehrshaus, ' + (new Date()).getFullYear(),
                        prev: null,
                        nextScan: 'Gehe nun zur Lokomotive Genf.'
                    },
                    {
                        name: "Episode 1",
                        id: "IkxtO9OdE-8",
                        tag: 'episode1',
                        next: 'episode2',
                        prev: 'intro',
                        who: 'Alois Negrelli, 1847',
                        nextScan: 'Gehe nun zur Baulok 11 der Gotthardbahn.'
                    },
                    {
                        name: "Episode 2",
                        id: "6LcNoRqFJZw",
                        tag: 'episode2',
                        next: 'episode3',
                        prev: 'episode1',
                        who: 'Alfred Escher, 1852',
                        nextScan: 'Gehe nun zur Lokomotive Elefant.'
                    },
                    {
                        name: "Episode 3",
                        id: "EKjEnLSZGJc",
                        tag: 'episode3',
                        next: 'outro',
                        prev: 'episode2',
                        who: 'Josef Zemp, 1894',
                        nextScan: 'Gehe nun zurück zum Start.'
                    },
                    {
                        name: "Schluss",
                        id: "eQbTBLu8J4o",
                        tag: 'outro',
                        next: null,
                        prev: 'episode3',
                        who: 'Verkehrshaus, ' + (new Date()).getFullYear(),
                        nextScan: 'Tschüss 😊'
                    },
                ]
            }
        },
        beforeRouteUpdate(to, from, next) {
            this.videoEnded = false
            next()
        },
        beforeUpdate() {
            this.origin = this.$route.params.origin;
        },
        mounted() {
            this.origin = this.$route.params.origin
        },
        computed: {
            currentVideo() {
                return this.youtubes.find(video => video.tag === this.$route.query.video)
            },
            getYoutubeId() {
                let video = this.currentVideo;
                if (video !== undefined) {
                    return video.id
                } else {
                    return "llqFIFg5tko";
                }
            },
        },
        methods: {
            ended() {
                this.hasEnded = true;
                this.videoEnded = true;
            },
            replay() {
                this.$refs.youtube.player.playVideo()
                this.videoEnded = false;
            },
            state() {
                let current = this.currentVideo;
                if (this.origin) {
                    current.origin = this.origin;
                }
                return current
            }
        }
    }
</script>

<style scoped lang="scss">
    .infobox {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .bgvideo {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .episode {
        width: 100%;
        position: absolute;
        text-align: center;
        font-size: 0.875rem;
        height: 36px;
        min-width: 64px;
        padding: 0 16px;
        pointer-events: none;

        &:before {
            background: transparent;
        }
    }

    .v-btn__content {
        width: 100%;
    }
</style>

<style>
    .v-btn {
        white-space: normal;
    }

    .v-btn__content {
        width: 100%;
    }
</style>
