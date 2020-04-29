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
            <v-card v-for="character in characters" :data-char="character.name" class="mt-2" :key="character.number">
                <v-img v-if="character.voiceover">
                </v-img>
                <v-card-text>
                    <h2 class="d-flex">{{name(character)}}
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
    import {default as dialog_de} from "@/dialog.de";
    import {default as marked} from "marked";

    export default {
        name: "App",
        data() {
            return {
                characters: [
                    {
                        number: 1,
                        name: 'Sara',
                        role: 'Hauptprotagonistin',
                        desc: 'Sara ist ein Mädchen im Alter von 12 Jahren. Sie ist sehr wissbegierig und fordert gerne die Erwachsenen heraus. Sie weiss noch nicht genau, was sie mal werden will. In ihrer Freizeit geht sie gerne schwimmen und ist in der Pfadi. Ausserdem liest sie gerne Bücher in ihrem Baumhaus.',
                    },
                    {
                        number: 2,
                        name: 'Emma',
                        role: 'Schwester von Sara',
                        desc: 'Die jüngere nervige Schwester von Sara. Sie ist fasziniert von Zügen.',
                    },
                    {
                        number: 3,
                        firstname: 'Alois',
                        name: 'Negrelli',
                        role: 'Experte der 1. Episode',
                        voiceover: 'audio/voiceover/kurt/Negrelli.WAV',
                        desc: 'Hauptingenieur der ersten schweizerischen Eisenbahn (um 1840)  \nfreundlich, etwas hochnäsig, aus Österreich (nicht Dialekt, höchstens Färbung)',
                    },
                    {
                        number: 4,
                        firstname: 'Alfred',
                        name: 'Escher',
                        role: 'Hauptexperte der 2. Episode',
                        voiceover: 'audio/voiceover/kurt/Escher.WAV',
                        desc: 'liberaler Geschäftsmann, Eisenbahnpionier (um 1880)  \netwas mürrisch, workaholic, reich und visionär',
                    },
                    {
                        number: 5,
                        firstname: 'Josef',
                        name: 'Zemp',
                        role: 'Zweitexperte der 2. Episode',
                        voiceover: 'audio/voiceover/kurt/Zemp.WAV',
                        desc: 'Bundesrat, ursprünglich katholisch konservativ, danach Wandel zum Realpolitiker (um 1900)  \nversöhnlich, aus der Innerschweiz, sympathisch',
                    },
                    {
                        number: 6,
                        firstname: 'Robert',
                        name: 'Haab',
                        role: 'Experte der 3. Episode',
                        voiceover: 'audio/voiceover/kurt/Haab.WAV',
                        desc: 'Jurist, Generaldirektor der SBB, dann Bundesrat (um 1915)  \nernst, harte Schale, weicher Kern, direkt',
                    },
                    {
                        number: 7,
                        role: 'Mutter',
                        desc: '(ca. 35. Jahre alt)',
                    },
                    {
                        number: 8,
                        role: 'Vater',
                        voiceover: 'audio/voiceover/kurt/Vater.WAV',
                        desc: '(ca. 35. Jahre alt)',
                    },
                ]
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
