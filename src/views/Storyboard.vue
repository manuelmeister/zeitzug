<template>
    <v-sheet color="transparent" class="px-2 py-4" tile>
        <section v-for="(dialog,index) in dialog" :id="''+dialog.number" :key="dialog.number">
            <v-card tag="header" max-width="1200" class="mx-auto" style="z-index: 1">
                <v-toolbar tag="h2" flat color="primary lighten-4">
                    <v-toolbar-title class="headline">
                        {{ dialog.number }}. {{dialog.title}}
                        <router-link text class="link" :to="'#' + dialog.number" title="Kapitelsprungmarke">
                            <v-icon large>mdi-link</v-icon>
                        </router-link>
                    </v-toolbar-title>
                </v-toolbar>
                <v-container fluid class="pa-0">
                    <v-row no-gutters>
                        <v-col cols="12" sm="7" class="pa-4">
                            <div class="textbox">
                                <h3 class="caption">Beschreibung</h3>
                                <div class="textbox--text"
                                     v-html="html(dialog.desc)"/>
                            </div>
                            <div class="textbox unprint" v-if="dialog.audio">
                                <h3 class="caption">Dialog (Audio)</h3>
                                <audio-player :src="dialog.audio"/>
                            </div>
                            <div class="textbox" v-for="field in dialog.custom">
                                <h3 class="caption">{{field.title}}</h3>
                                <div class="textbox--text" v-html="html(field.content)"/>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="5">
                            <v-img aspect-ratio="1.7778" v-if="dialog.image" :src="dialog.image"/>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
            <v-sheet max-width="1100" class="mx-auto scene-wrapper" color="transparent">
                <v-card class="mx-1 bt-1" v-for="(scene,index) in dialog.scenes"
                        :id="'' + dialog.number + '.' + index"
                        :key="dialog.number + '.' + index">
                    <v-toolbar flat v-if="$vuetify.breakpoint.smAndDown">
                        <v-toolbar-title>
                            {{ dialog.number }}.{{index}} <span v-if="scene.title">{{scene.title}}</span>
                            <router-link class="link" :to="'#' + dialog.number + '.' + index" title="Szenensprungmarke">
                                <v-icon>mdi-link</v-icon>
                            </router-link>
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-container fluid class="pa-0">
                        <v-row no-gutters>
                            <v-col cols="12" md="7" order="2" class="pa-4">
                                <h2 v-if="$vuetify.breakpoint.mdAndUp" class="pb-2 font-weight-regular">
                                    {{ dialog.number }}.{{index}} <span v-if="scene.title">{{scene.title}}</span>
                                    <router-link class="link" :to="'#' + dialog.number + '.' + index"
                                                 title="Szenensprungmarke">
                                        <v-icon>mdi-link</v-icon>
                                    </router-link>
                                </h2>
                                <div class="textbox" v-if="scene.dialog">
                                    <h3 class="caption">Dialog</h3>
                                    <div class="textbox--text" v-if="Array.isArray(scene.dialog)">
                                        <div v-for="(paragraph,index) in scene.dialog" :key="index"
                                             :data-char="paragraph.char">
                                            <p>
                                                <router-link class="char_link" title="Charakter anschauen" :to="{name: 'Characters', hash:'#'+paragraph.char,params:{stay:false} }">{{paragraph.char}}</router-link>:
                                                <span v-html="dialog_paragraph(paragraph)"/>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="textbox--text" v-else>{{html(scene.dialog)}}</div>
                                </div>
                                <div class="textbox" v-if="scene.action">
                                    <h3 class="caption">Handlung</h3>
                                    <div class="textbox--text" v-html="html(scene.action)"/>
                                </div>
                                <div class="textbox" v-for="field in scene.custom">
                                    <h3 class="caption">{{field.title}}</h3>
                                    <div class="textbox--text" v-if="Array.isArray(field.content)">
                                        <div v-for="(paragraph,index) in field.content" :key="index"
                                             :data-char="paragraph.char" v-html="dialog_paragraph(paragraph)"/>
                                    </div>
                                    <div class="textbox--text" v-else v-html="html(field.content)"/>
                                </div>
                            </v-col>
                            <v-col cols="12" md="5" order="0" order-md="2">
                                <v-img v-if="scene.image" aspect-ratio="1.7778" :src="scene.image"/>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-sheet>
        </section>
        <v-sheet tag="footer" color="transparent" dark elevation="0" class="text-center">
            <small>
                Manuel Meister <br>
                Created: 3 Mar 2020 at 11:34:34 CET <br>
                Modified: 28 Apr 2020 at 21:47:47 CEST
            </small>
        </v-sheet>
    </v-sheet>
</template>

<script>
    import {default as dialog_de} from "@/dialog.de";
    import {parseLink} from "@/plugins/helpers";
    import marked from "marked";
    import AudioPlayer from "@/components/AudioPlayer";

    export default {
        name: "App",
        components: {AudioPlayer},
        data() {
            return {
                dialog: dialog_de
            };
        },
        beforeCreate() {
            if (location.hash) {
                dialog_de[location.hash.charAt(1)].open = true;
            }
        },
        computed: {
            navigation() {
                return this.dialog.slice(1, -2);
            }
        },
        mounted() {
            if (location.hash) {
                this.dialog[location.hash.charAt(1)].open = true;
                this.$nextTick(function () {
                    this.$router.replace({hash: location.hash}, () => {
                    })
                })
            }
        },
        methods: {
            parseLink,
            marked,
            toggle(dialog) {
                this.dialog[dialog].open = !this.dialog[dialog].open;
            },
            html(input) {
                if (input) {
                    input = input.replace(/\[([^\]]*)\]\(([^)]*)\)/g, parseLink)
                    let markdown = this.marked(input);
                    if (markdown.match(/^<p>(.*)<\/p>$/gm)) {
                        return markdown.matchAll(/^<p>(.*)<\/p>$/gm).next().value[1]
                    }
                    return markdown
                }
                return ''
            },
            dialog_paragraph(paragraph) {
                return this.html(paragraph.text)
            }
        }
    };
</script>

<style lang="scss">
    $font-family: Inter, sans-serif, emoji;
    body {
        font-family: $font-family;
        line-height: 1.5;
        letter-spacing: -0.05px;
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4 {
        font-family: $font-family;
    }

    h2 {
        font-feature-settings: "tnum";
    }

    /* sequence number */
    h3 {
        color: #444;
        margin-bottom: 0;
    }

    .scene-wrapper .v-card {
        border-top-right-radius: 0 !important;
        border-top-left-radius: 0 !important;
    }

    .char_link {
        text-decoration: underline;
        font-weight: 600;
        color: inherit!important;
    }

    .textbox {
        margin-left: -4px;
    }

    .textbox h3 {
        //background: #eeeeee;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        display: inline-block;
        padding: 4px;
    }

    .textbox + .textbox {
        margin-top: 20px;
    }

    .textbox--text {
        //border: 3px solid #eeeeee;
        background: #eeeeee;
        border-radius: 2px;
        padding: 4px;

        &.audio {
            background: #eeeeee;
        }

        p {
            margin-bottom: 4px !important;
        }
    }

    .bt-1 {
        border-top: 1px solid rgba(0, 0, 0, 0.17) !important;
    }

    section + section {
        margin-top: 40px;
    }
</style>
