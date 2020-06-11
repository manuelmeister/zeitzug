<template>
    <div>
        <div class="d-flex">
            <v-btn text :to="{name: 'AppChoose', params: {transition: 'slide-right'}}" exact
                   class="mb-2">
                <v-icon left>
                    mdi-arrow-left
                </v-icon>
                <span v-if="$vuetify.breakpoint.mdAndUp">Zurück zur Auswahl</span>
                <span v-else>Zurück</span>
            </v-btn>
            <v-btn v-if="origin && !origin.isScanner" text
                   :to="{name: 'QrWatch', query: {video: 'intro'}, params: {origin: origin.origin, transition: 'slide-left'}}" exact
                   class="mb-2 ml-auto">
                <span v-if="$vuetify.breakpoint.mdAndUp">Nächste Episode</span>
                <span v-else>Weiter</span>
                <v-icon right>
                    mdi-arrow-right
                </v-icon>
            </v-btn>
            <v-btn v-if="origin && origin.isScanner" text
                   :to="{name: 'QrScan', query: {video: 'intro'}, params: {transition: 'slide-left'}}" exact
                   class="mb-2 ml-auto">
                <span v-if="$vuetify.breakpoint.mdAndUp">Nächste Episode scannen</span>
                <span v-else>Scannen</span>
                <v-icon right>
                    mdi-arrow-right
                </v-icon>
            </v-btn>
        </div>
        <v-card light class="pa-4" max-width="700">
            <h2>Anleitung</h2>
            <ol>
                <li>Für den Scanner wird die Kamera verwendet, du musst anschliessend den Zugriff erlauben.</li>
                <li>Halte deine Kamera über den QR Code, um das nächste Video freizuschalten.</li>
                <li>
                    <v-btn color="green" dark
                           :to="{name: 'QrScan', query: {video: 'intro'}, params: {origin: {thisScan: 'Scanne den QR Code auf dem Arbeitsblatt'}, transition: 'slide-left'}}">
                        <v-icon left>mdi-qrcode-scan</v-icon>
                        Jetzt Code scannen
                    </v-btn>
                </li>
            </ol>
        </v-card>
        <v-alert
                max-width="700"
                light
                class="mb-4 mt-2"
                border="left"
                :icon="false"
                color="primary darken-1"
                type="info"
                style="color: #d7ccc8"
                elevation="2"><p>Falls du die Kamera nicht aktivieren möchtest,<wbr> kannst du die <router-link :to="{name: 'AppList'}" style="color: #fff;">Episoden&nbsp;einzeln&nbsp;ansehen<i
                    class="v-icon mdi small mdi-open-in-new"/></router-link>.</p>
            <p class="mb-0">Falls du nicht im Verkehrshaus bist, kannst du die <a href="/qrcodes.pdf" style="color:#fff;">QR Codes</a> herunterladen.</p>
        </v-alert>
    </div>
</template>

<script>
    export default {
        name: "QrInfo",
        data() {
            return {
                origin: undefined
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

<style scoped>
    ol li {
        margin-top: 20px;
    }

    ol {
        list-style: none;
        counter-reset: any-name;
        padding-left: 40px;
    }

    ol li {
        counter-increment: any-name;
    }

    li::before {
        content: counter(any-name);
        margin-left: -42px;
        margin-right: 10px;
        padding: 7px;
        border: 1px solid;
        border-radius: 100%;
        width: 2em;
        height: 2em;
        line-height: 1;
        display: inline-block;
        box-sizing: border-box;
        text-align: center;
    }
</style>
