<template>
    <v-sheet color="transparent" tile class="characters pa-2 py-8">
        <v-card max-width="700" class="mx-auto">
            <h1 class="display-1 pa-4 pt-8">
                Die Charaktere
            </h1>
            <figure>
                <v-img src="img/chars.jpg" id="chars"/>
                <figcaption class="text-center pa-4">
                    <p class="body-2">Die Charaktere wurden von <a href="https://www.behance.net/irmirx">Irina Mir<i
                            class="v-icon mdi small mdi-open-in-new"/></a> erstellt.</p>
                </figcaption>
            </figure>
        </v-card>
        <v-sheet class="mx-auto" color="transparent" max-width="700">
            <v-card v-for="character in characters" :data-char="character.name" :id="character.name" class="mt-2" :key="character.number">
                <v-img v-if="character.voiceover">
                </v-img>
                <v-card-text>
                    <h2 class="d-flex">{{name(character)}}

                        <router-link class="link" :to="'#' + character.name"
                                     title="Figursprungmarke">
                            <v-icon>mdi-link</v-icon>
                        </router-link>
                        <v-chip to="#chars" small class="ml-auto">{{character.number}}</v-chip>
                    </h2>
                    <div v-html="text(character)"/>
                </v-card-text>
                <vuetify-audio v-if="character.voiceover" color="grey" :src="character.voiceover" downloadable/>
            </v-card>
        </v-sheet>
    </v-sheet>
</template>

<script>
    import {default as characters} from "@/characters";
    import {default as marked} from "marked";

    export default {
        name: "App",
        data() {
            return {
                characters: characters
            };
        },
        components: {
            VuetifyAudio: () => import('@/components/AudioPlayer')
        },
        methods: {
            name(char) {
                let name = ""
                if (char.firstname) {
                    name += char.firstname + " ";
                }
                if (char.name) {
                    name += char.name;
                } else {
                    name = char.role
                }
                if (char.lastname) {
                    name += " " + char.lastname;
                }
                return name;
            },
            text(char) {
                return marked("" + char.role + "  \n" + char.desc);
            }
        }
    }
</script>

<style>

    .characters p {
        margin-bottom: 0!important;
    }
    .characters p + p {
        margin-top: 8px;
    }

    ::v-deep .vuetify-audio {
        border-top-right-radius: 0 !important;
        border-top-left-radius: 0 !important;
    }
</style>
