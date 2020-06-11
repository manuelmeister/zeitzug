<template>
    <div>
        <div class="d-flex">
            <v-btn v-if="currentVideo.prev" text
                   :to="{name: 'QrWatch', query: {video: currentVideo.prev}, params: {origin: state()}, transition: 'slide-right'}" exact
                   class="mb-2">
                <v-icon left>
                    mdi-arrow-left
                </v-icon>
                <span v-if="$vuetify.breakpoint.mdAndUp">Vorherige Episode</span>
                <span v-else>Zurück</span>
            </v-btn>
            <v-btn v-else text
                   :to="{name: 'AppQr', params: {origin: state(), transition: 'slide-right'}}" exact
                   class="mb-2">
                <v-icon left>
                    mdi-arrow-left
                </v-icon>
                Anleitung
            </v-btn>
        </div>
        <v-sheet color="primary lighten-5" light>
            <v-sheet color="black">
                <v-responsive :aspect-ratio="4/3" max-width="700" width="100%" class="cameraplace"
                              :class="{'loading':loading}">
                    <qrcode-stream @init="init" @detect="detected($event)" :track="repaint" :camera="camera"
                                   v-if="qrActive"/>
                    <v-btn absolute text dark right bottom @click="reload" v-if="loading">Scannen
                        <v-icon class="mdi-spin" right>mdi-loading</v-icon>
                    </v-btn>
                </v-responsive>
            </v-sheet>
            <v-progress-linear
                    v-if="!loading"
                    color="primary"
                    indeterminate
            ></v-progress-linear>
            <div class="pa-4 text-center">
                <span v-if="currentVideo">
            {{ currentVideo.thisScan }}
                <br></span>
                Scanne den QR Code, um die nächste Episode anzusehen.
            </div>
        </v-sheet>
        <v-snackbar v-model="snackbar" bottom color="error">
            Dieser QR Code gehört nicht zur App, bitte scanne den QR Code mit der Lokomotive im Zentrum.
        </v-snackbar>
        <v-snackbar v-model="snackbarWrongQr" bottom color="info">
            Du hast den falschen QR Code gefunden. {{currentVideo.thisScan}}
        </v-snackbar>
    </div>
</template>

<script>
    import {QrcodeStream} from 'vue-qrcode-reader';

    export default {
        name: "QrScan",
        data() {
            return {
                camera: 'auto',
                qrActive: true,
                snackbar: false,
                loading: true,
                snackbarWrongQr: false,
                origin: undefined,
                videos: [
                    {
                        name: "Einführung",
                        tag: 'intro',
                        next: 'episode1',
                        prev: null,
                        thisScan: 'Der QR Code befindet sich auf deinem Arbeitsblatt.',
                        nextScan: 'Gehe zur Lokomotive Genf.'
                    },
                    {
                        name: "Episode 1",
                        tag: 'episode1',
                        next: 'episode2',
                        prev: 'intro',
                        thisScan: 'Gehe zur Lokomotive Genf.',
                        nextScan: 'Gehe zur Baulok 11 der Gotthardbahn.'
                    },
                    {
                        name: "Episode 2",
                        tag: 'episode2',
                        next: 'episode3',
                        prev: 'episode1',
                        thisScan: 'Gehe zur Baulok 11 der Gotthardbahn.',
                        nextScan: 'Gehe zur Lokomotive Elefant.'
                    },
                    {
                        name: "Episode 3",
                        tag: 'episode3',
                        next: 'outro',
                        prev: 'episode2',
                        thisScan: 'Gehe zur Lokomotive Elefant.',
                        nextScan: 'Gehe zurück zum Start.'
                    },
                    {
                        name: "Schluss",
                        id: "eQbTBLu8J4o",
                        tag: 'outro',
                        next: null,
                        prev: 'episode3',
                        thisScan: 'Gehe nun zu deiner Lehrperson zurück.'
                    },
                ]
            }
        },
        components: {
            QrcodeStream
        },
        computed: {
            currentVideo() {
                return this.videos.find(video => video.tag === this.$route.query.video)
            },
        },
        methods: {
            async detected(promise) {
                try {
                    this.loading = false
                    this.camera = 'off'
                    const result = await promise
                    let string = result.content
                    await this.timeout(750)
                    if (string) {
                        let url = new URL(string)
                        if (url.hostname === 'localhost' || url.hostname === 'zeitzug.meister.id') {
                            let video = url.searchParams.get('video')
                            console.log(string)
                            if (video !== this.currentVideo.tag) {
                                this.snackbarWrongQr = true;
                            } else {
                                this.$router.push({name: 'QrWatch', query: {video: video}, params: {transition: 'slide-right'}})
                            }
                        } else {
                            console.log(string)
                            this.snackbar = true
                        }
                    }
                    this.camera = 'auto'
                    this.loading = true
                    // ...
                } catch (error) {
                    this.$router.push({name: 'QrException', params: {error: error}})
                }
            },
            state() {
                let current = this.currentVideo;
                current.isScanner = true
                if (this.origin) {
                    current.origin = this.origin;
                }
                return current
            },
            init(promise) {
                let vue = this;
                promise.catch(error => {
                    vue.$router.push({name: 'QrException', params: {error: error}})
                })
            },
            timeout(ms) {
                return new Promise(resolve => {
                    window.setTimeout(resolve, ms)
                })
            },
            async reload() {
                this.qrActive = false;
                await this.$nextTick()
                this.qrActive = true;
            },
            repaint(location, ctx) {
                const {
                    topLeftCorner,
                    topRightCorner,
                    bottomLeftCorner,
                    bottomRightCorner,
                    // topLeftFinderPattern,
                    // topRightFinderPattern,
                    // bottomLeftFinderPattern
                } = location

                ctx.strokeStyle = '#2196f3' // instead of red
                ctx.fillStyle = 'rgba(33, 150, 243, 0.4)' // instead of red
                ctx.lineWidth = 10;

                ctx.beginPath()
                ctx.moveTo(topLeftCorner.x, topLeftCorner.y)
                ctx.lineTo(bottomLeftCorner.x, bottomLeftCorner.y)
                ctx.lineTo(bottomRightCorner.x, bottomRightCorner.y)
                ctx.lineTo(topRightCorner.x, topRightCorner.y)
                ctx.lineTo(topLeftCorner.x, topLeftCorner.y)
                ctx.closePath()

                ctx.fill()
                ctx.stroke()
            }
        },
        beforeUpdate() {
            this.origin = this.$route.params.origin
        },
        mounted() {
            this.origin = this.$route.params.origin
        },
    }
</script>

<style lang="scss">
    .cameraplace {
        position: relative;
    }

    .cameraplace.loading:after {
        opacity: 1;
        -webkit-animation: loading 2.5s  infinite;
        animation: loading 2.5s  infinite;
    }
    .cameraplace:after {
        background: linear-gradient(90deg, transparent 40%, rgba(239, 235, 233, 0.1) 43%, rgba(239, 235, 233, 0.3) 47%, rgba(239, 235, 233, 0.59) 50%, rgba(239, 235, 233, 0.3) 53%, rgba(239, 235, 233, 0.1) 57%, transparent 60%);
        opacity: 0;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
    }
</style>
