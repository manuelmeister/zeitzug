<template>
    <v-sheet color="transparent" tile class="characters pa-2 py-8">
        <v-card max-width="700" class="mx-auto">
            <h1 class="display-1 pa-4 pt-8">
                Die Charaktere
            </h1>
            <figure>
                <v-img src="img/chars.jpg" id="chars" aspect-ratio="2.671755725"/>
                <figcaption class="text-center pa-4">
                    <p class="body-2">Die Charaktere wurden von <a href="https://www.behance.net/irmirx">Irina Mir<i
                            class="v-icon mdi small mdi-open-in-new"/></a> erstellt.</p>
                </figcaption>
            </figure>
        </v-card>
        <v-sheet class="mx-auto" color="transparent" max-width="700">
            <v-card v-for="char in characters" :data-char="id(char)" :id="id(char)" class="mt-2"
                    :key="char.number">
                <v-row no-gutters>
                    <v-col cols="8" class="d-flex flex-column">
                        <v-card-text>
                            <h2 class="d-flex">{{name(char)}}

                                <router-link class="link" :to="{hash:'#' + char.name, params: {stay: false}}"
                                             title="Figursprungmarke">
                                    <v-icon>mdi-link</v-icon>
                                </router-link>
                                <v-chip to="#chars" small class="ml-auto">{{char.number}}</v-chip>
                            </h2>
                            <div v-html="desc(char)"/>
                        </v-card-text>
                        <vuetify-audio v-if="char.voiceover" class="mt-auto" color="primary lighten-5"
                                       :src="char.voiceover" downloadable/>
                    </v-col>
                    <v-col>
                        <v-img :src="'img/characters/'+id(char) + '.png'" height="220" contain
                               :srcset="'img/characters/'+id(char) + '.png 1x,img/characters/'+id(char)+ '@2x.png 2x'"
                               :alt="'Bild von ' + name(char)" class="character_image"/>
                    </v-col>
                </v-row>
            </v-card>
        </v-sheet>
    </v-sheet>
</template>

<script>
    import {name,desc,id} from "@/util/char";

    const AudioPlayer = () => import(/* webpackChunkName: "player" */ "@/components/AudioPlayer");

    export default {
        name: "App",
        components: {
            VuetifyAudio: AudioPlayer
        },
        computed: {
            characters() {
                return this.$store.getters.characters
            }
        },
        created(){
            this.$store.dispatch('loadCharacters')
        },
        methods: {
            name,
            desc,
            id
        }
    }
</script>

<style lang="scss" scoped>

    .characters p {
        margin-bottom: 0 !important;
    }

    .characters p + p {
        margin-top: 8px;
    }

    .character_image {
        background-image: radial-gradient(var(--v-primary-lighten5), var(--v-primary-lighten4));
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    .characters ::v-deep .vuetify-audio {
        border-radius: 0 0 0 4px !important;
    }
</style>
