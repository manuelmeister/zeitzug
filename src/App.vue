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
        <v-app-bar app color="primary" dark :extended="$route.name === 'Storyboard'"
                   clipped-left v-if="$vuetify.breakpoint.mdAndUp">
            <v-toolbar-title class="font-weight-bold">Geschichte der Schweizer Eisenbahn</v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items>
                <v-btn text :to="{name: 'Storyboard'}">Storyboard</v-btn>
                <v-btn text :to="{name: 'Characters'}">Charakter</v-btn>
                <v-btn text :to="{name: 'About'}">Über das Projekt</v-btn>
            </v-toolbar-items>

            <template v-if="$route.name === 'Storyboard'" v-slot:extension>
                <toc :toc="internalToc" :activeIndex="activeIndex"/>
            </template>
        </v-app-bar>
        <v-bottom-navigation app grow style="z-index: 10" v-if="$vuetify.breakpoint.smAndDown">
            <v-app-bar-nav-icon v-if="$route.name === 'Storyboard'" @click="open = true" style="margin-left: -32px;margin-right: -16px">
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
                        text: dialog.title,
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
            let hash = location.hash;
            this.$router.replace({hash: '#' + location.hash.charAt(1), params: {stay: true}});
            this.$router.replace({hash: hash, params: {stay: true}});
            this.findActiveIndex();
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
    @import '../node_modules/@mdi/font/css/materialdesignicons.css';

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
        font-size: 1rem;
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
    }

    @page {
        margin: 1cm;
        size: A3;
        width: 100%;
    }
</style>
