<template>
    <v-card light max-width="700" width="100%">
        <p class="pa-4 mb-0 text-center">Es gibt verschiedene Möglichkeiten, <wbr>
            die Schweizer Eisenbahngeschichte zu erforschen</p>
        <v-container class="text-center">
            <v-row>
                <v-col cols="6">
                    <v-icon size="50px" class="ma-4">
                        mdi-play-box-multiple-outline
                    </v-icon>
                    <br>
                    <v-btn color="blue-grey darken-2" outlined light :to="{name: 'AppWatch', query: {video: 'intro'}, params: {transition: 'slide-left'}}">Einzelne Episode</v-btn>
                </v-col>
                <v-col cols="6" style="border-left: 1px solid #eee">
                    <v-icon size="50px" class="ma-4">
                        mdi-qrcode-scan
                    </v-icon>
                    <br>
                    <v-btn color="green" dark :to="{name: 'AppQr', params: {transition: 'slide-left'}}">
                        <span>QR Scanner</span>
                    </v-btn></v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "Choose"
    }
</script>

<style scoped>

</style>
