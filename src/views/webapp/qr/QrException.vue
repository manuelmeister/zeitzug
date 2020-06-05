<template>
    <v-alert
            max-width="700"
            border="left"
            class="my-8"
            light
            colored-border
            type="error"
            elevation="2">
        Etwas ist schief gelaufen. Entweder hast du keine Kamera, dein Gerät unterstützt diese Funktion nicht
        oder du hast dem App keine Berechtigung erteilt.
    </v-alert>
</template>

<script>
    export default {
        name: "QrException"
    }
</script>

<style scoped>

</style>
