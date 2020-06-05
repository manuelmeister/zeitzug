<template>
    <div>
        <v-btn text :to="{name: 'AppChoose'}" exact
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
                        id: "llqFIFg5tko",
                        tag: 'intro',
                        who: 'Verkehrshaus, ' + (new Date()).getFullYear()
                    },
                    {name: "Episode 1", id: "IkxtO9OdE-8", tag: 'episode1', who: 'Alois Negrelli, 1847'},
                    {name: "Episode 2", id: "6LcNoRqFJZw", tag: 'episode2', who: 'Alfred Escher, 1852'},
                    {name: "Episode 3", id: "EKjEnLSZGJc", tag: 'episode3', who: 'Josef Zemp, 1894'},
                    {
                        name: "Schluss",
                        id: "eQbTBLu8J4o",
                        tag: 'outro',
                        who: 'Verkehrshaus, ' + (new Date()).getFullYear()
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
