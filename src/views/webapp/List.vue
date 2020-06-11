<template>
    <div>
        <v-btn text :to="{name: 'AppChoose', params: {transition: 'slide-right'}}" exact
               class="mb-2">
            <v-icon left>
                mdi-arrow-left
            </v-icon>
            Zurück zur Auswahl
        </v-btn>
        <v-card>
            <v-tabs
                    dark
                    color="primary darken-4"
                    background-color="primary"
                    v-model="tab"
                    centered
                    icons-and-text>
                <v-tabs-slider></v-tabs-slider>
                <v-tab v-for="video in youtubes" :to="'#' + video.tag" :key="video.id">
                    {{video.name}}
                </v-tab>
                <v-tab-item
                        :id="video.tag"
                        v-for="video in youtubes"
                        :key="video.id">
                    <v-sheet color="primary lighten-4" light class="pt-2 pl-2 pr-2" elevation="10">
                        <v-sheet color="black" max-width="100%">
                            <v-responsive :aspect-ratio="16/9" max-width="1000px" width="90vw">
                                <youtube class="bvideo" :video-id="video.id" fit-parent/>
                            </v-responsive>
                        </v-sheet>
                        <p class="pa-3 text-center who font-italic">{{video.who}}</p>
                    </v-sheet>
                </v-tab-item>
            </v-tabs>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "List",
        data: function () {
            return {
                tab: null,
                youtubes: [
                    {
                        name: "Einführung",
                        id: "e68pvcvO5kA",
                        instructions: true,
                        tag: 'intro',
                        next: 'episode1',
                        who: 'Verkehrshaus, ' + (new Date()).getFullYear(),
                        prev: null,
                        nextScan: 'Gehe nun zur Lokomotive Genf.'
                    },
                    {
                        name: "Episode 1",
                        id: "AgHF1Ee-fgQ",
                        tag: 'episode1',
                        next: 'episode2',
                        prev: 'intro',
                        who: 'Alois Negrelli, 1847',
                        nextScan: 'Gehe nun zur Baulok 11 der Gotthardbahn.'
                    },
                    {
                        name: "Episode 2",
                        id: "vB0Njb45Hsk",
                        tag: 'episode2',
                        next: 'episode3',
                        prev: 'episode1',
                        who: 'Alfred Escher, 1852',
                        nextScan: 'Gehe nun zur Lokomotive Elefant.'
                    },
                    {
                        name: "Episode 3",
                        id: "gc8Q9xWhtHE",
                        tag: 'episode3',
                        next: 'outro',
                        prev: 'episode2',
                        who: 'Josef Zemp, 1894',
                        nextScan: 'Gehe nun zurück zum Start.'
                    },
                    {
                        name: "Schluss",
                        id: "fneB2zcL2mo",
                        tag: 'outro',
                        next: null,
                        prev: 'episode3',
                        who: 'Verkehrshaus, ' + (new Date()).getFullYear(),
                        nextScan: 'Tschüss 😊'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    ::v-deep .v-tabs-items {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ::v-deep .bvideo {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        height: 100%;
    }
</style>
