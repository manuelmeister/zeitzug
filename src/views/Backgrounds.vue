<template>
    <v-sheet color="transparent" tile class="about pa-2 py-8">
        <v-card max-width="700" class="mx-auto">
            <h1 class="display-1 pa-4 pt-8">
                Hintergründe
            </h1>
            <v-card-text>
                <p>Für die Animationen erstelle ich die Hintergründe selber mit Hilfe eines iPads. Diese Bilder sind z.T. nur Entwürfe und wurden noch überarbeitet.</p>
            </v-card-text>
            <v-sheet color="black" class="pa-4" tile>
                <figure v-for="(n,i) in 10">
                    <v-img :src="'img/bg/bg'+i+'.jpg'"/>
                </figure>
            </v-sheet>
        </v-card>
    </v-sheet>
</template>

<style scoped lang="scss">
    figure + figure {
        margin-top: 16px;
    }
</style>
