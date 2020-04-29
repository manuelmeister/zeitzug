<template>
    <v-app v-scroll="onScroll">
        <v-navigation-drawer clipped app v-model="open" hide-overlay
                             v-if="$vuetify.breakpoint.smAndDown &&$route.name === 'Storyboard'">
            <v-list nav>
                <v-list-item v-for="(dialog,i) in dialogs" :key="dialog.number"
                             :to="{hash:'#' + dialog.number, params: {mobile: true, stay: false}}"
                             :class="{'v-list-item--active':i === dialogs.length - 1 - activeIndex}">
                    {{dialog.title}}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color="primary" dark hide-on-scroll
                   :extended="$route.name === 'Storyboard' && $vuetify.breakpoint.mdAndUp"
                   clipped-left>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">ZeitZug</v-list-item-title>
                    <v-list-item-subtitle>Schweizer Eisenbahngeschichte</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-spacer/>
            <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
                <v-btn text :to="{name: 'Storyboard'}">Storyboard</v-btn>
                <v-menu offset-y>
                    <template v-slot:activator="{on}">
                        <v-btn text v-on="on">Ressourcen</v-btn>
                    </template>
                    <v-list>
                        <v-list-item text :to="{name: 'Characters'}">Charaktere</v-list-item>
                        <v-list-item text :to="{name: 'Backgrounds'}">Hintergründe</v-list-item>
                    </v-list>
                </v-menu>
                <v-btn text :to="{name: 'About'}">Über das Projekt</v-btn>
            </v-toolbar-items>

            <template v-if="$route.name === 'Storyboard' && $vuetify.breakpoint.mdAndUp" v-slot:extension>
                <toc :toc="internalToc" :activeIndex="activeIndex"/>
            </template>
        </v-app-bar>
        <v-bottom-navigation app grow style="z-index: 10" v-if="$vuetify.breakpoint.smAndDown">
            <v-app-bar-nav-icon v-if="$route.name === 'Storyboard'" @click="open = true"
                                style="margin-left: -32px;margin-right: -16px">
            </v-app-bar-nav-icon>
            <v-btn text :to="{name: 'Storyboard'}">
                Storyboard
                <v-icon>mdi-clipboard-play-multiple-outline</v-icon>
            </v-btn>
            <v-btn text :to="{name: 'Characters'}">
                Charaktere
                <v-icon>mdi-account-multiple</v-icon>
            </v-btn>
            <v-btn text :to="{name: 'About'}">
                Projekt
                <v-icon>mdi-information-outline</v-icon>
            </v-btn>
        </v-bottom-navigation>
        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
    import {default as dialog_de} from "@/dialog.de";
    import Toc from "@/components/TOC";


    export default {
        name: 'App',

        components: {Toc},

        data: () => ({
            dialogs: dialog_de,
            activeIndex: location.hash.charAt(1),
            currentOffset: (
                window.pageYOffset ||
                document.documentElement.offsetTop ||
                0
            ),
            internalToc: [],
            tocTimeout: 0,
            open: false
        }),

        computed: {
            toc: function () {
                let result = []
                for (const dialog of this.dialogs) {
                    result.push({
                        id: dialog.number + '',
                        text: dialog.title_short ? dialog.title_short : dialog.title,
                        parent: parseInt(dialog.number)
                    });
                    result.push(...dialog.scenes.map(
                        (scene, i) => {
                            return {
                                id: dialog.number + '.' + i,
                                parent: parseInt(dialog.number)
                            }
                        }
                    ))
                }
                return result
            },
        },

        watch: {
            toc: {
                immediate: true,
                handler(val) {
                    if (!val.length) return

                    this.$nextTick(() => (this.internalToc = this.toc.slice().filter(item => item.text)))
                },
            },
        },
        mounted() {
            if (this.$route.name === 'Storyboard') {
                let hash = location.hash;
                this.$router.replace({hash: '#' + location.hash.charAt(1), params: {stay: true}});
                this.$router.replace({hash: hash, params: {stay: true}});
                this.findActiveIndex();
            }
        },
        methods: {
            findActiveIndex() {
                if (this.currentOffset < 100 && this.$route.hash.charAt(1) === '0') {
                    this.activeIndex = 0

                    let newHash = '#0'

                    if (!(this.$route.hash.includes(newHash) || this.$route.hash === newHash)) {
                        this.$router.push({hash: newHash, params: {stay: true}});
                    }
                    return
                }

                const list = this.toc.slice().reverse()
                let index = list.findIndex(item => {
                    const section = document.getElementById('' + item.id)

                    if (!section) return false

                    return section.offsetTop - 100 < this.currentOffset
                })

                let item = list[index]

                const lastIndex = this.internalToc.length - 1

                let newHash = '#' + item.id;
                if (lastIndex > -1 && !(this.$route.hash.includes(newHash) || this.$route.hash === newHash)) {
                    if (this.$route.hash.charAt(1) !== newHash.charAt(1)) {
                        this.$router.replace({hash: '#' + item.parent, params: {stay: true}});
                    } else {
                        this.$router.replace({hash: newHash, params: {stay: true}});
                    }

                    this.activeIndex = item.parent > -1 ? lastIndex - item.parent : lastIndex
                }

            },
            onScroll() {
                this.currentOffset = (
                    window.pageYOffset ||
                    document.documentElement.offsetTop ||
                    0
                )

                clearTimeout(this.timeout)

                this.timeout = setTimeout(this.findActiveIndex, 50)
            },
        },
    };
</script>
<style lang="scss">
    @import "src/styles/overrides";
    //@import '../node_modules/@mdi/font/css/materialdesignicons.css';

    /* MaterialDesignIcons.com */
    @font-face {
        font-family: "Material Design Icons";
        src: url("~@mdi/font/fonts/materialdesignicons-webfont.eot?v=5.1.45");
        src: url("~@mdi/font/fonts/materialdesignicons-webfont.eot?#iefix&v=5.1.45") format("embedded-opentype"), url("~@mdi/font/fonts/materialdesignicons-webfont.woff2?v=5.1.45") format("woff2"), url("~@mdi/font/fonts/materialdesignicons-webfont.woff?v=5.1.45") format("woff"), url("~@mdi/font/fonts/materialdesignicons-webfont.ttf?v=5.1.45") format("truetype");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    .mdi:before,
    .mdi-set {
        display: inline-block;
        font: normal normal normal 24px/1 "Material Design Icons";
        font-size: inherit;
        text-rendering: auto;
        line-height: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .mdi-link::before {
        content: "\F0337";
    }

    .mdi-information-outline::before {
        content: "\F02FD";
    }

    .mdi-open-in-new::before {
        content: "\F03CC";
    }

    .mdi-account-multiple::before {
        content: "\F000E";
    }

    .mdi-blank::before {
        content: "\F68C";
        visibility: hidden;
    }

    .mdi-18px.mdi-set, .mdi-18px.mdi:before {
        font-size: 18px;
    }

    .mdi-24px.mdi-set, .mdi-24px.mdi:before {
        font-size: 24px;
    }

    .mdi-36px.mdi-set, .mdi-36px.mdi:before {
        font-size: 36px;
    }

    .mdi-48px.mdi-set, .mdi-48px.mdi:before {
        font-size: 48px;
    }

    .mdi-dark:before {
        color: rgba(0, 0, 0, 0.54);
    }

    .mdi-dark.mdi-inactive:before {
        color: rgba(0, 0, 0, 0.26);
    }

    .mdi-light:before {
        color: white;
    }

    .mdi-light.mdi-inactive:before {
        color: rgba(255, 255, 255, 0.3);
    }

    .mdi-clipboard-play-multiple-outline::before {
        content: "\F126A";
    }

    a {
        text-decoration: none;
    }

    .v-application--wrap {
        background: #3e2723 !important
    }

    audio {
        max-width: 100%;
    }

    a .mdi.small {
        font-size: inherit;
        padding-left: 2px;
    }

    @media print {

        .v-application--wrap {
            background: none !important;
        }

        html {
            font-size: 8pt !important;
        }

        .v-content {
            padding: 0 !important;
        }

        .v-app-bar {
            display: none !important;
        }

        .v-card {
            page-break-inside: avoid;
            box-shadow: none !important;
            border: 1px solid rgba(0, 0, 0, 0.17);
            border-radius: 0 !important;
        }

        .unprint {
            display: none;
        }
        header.v-card .v-toolbar__title {
            font-weight: bold;
            text-decoration: underline;
        }
        .link {
            display: none;
        }
        img.hidden-print-only {
            display: block;
            visibility: visible;
        }
    }

    h2:hover .link {
        display: inline-block;
    }

    .link {
        display: none;
        font-size: inherit;
    }

    .link i.mdi {
        font-size: inherit !important;
    }

    @page {
        margin: 1cm;
        size: A3;
        width: 100%;
    }
</style>
