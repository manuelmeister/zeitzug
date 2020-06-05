<template>
    <v-tabs dark :value="activeIndex" centered>
        <v-tab v-for="(item, i) in toc"
               :key="i"
               :to="{hash: '#' + item.id, params: {stay: false}}">
            {{item.text}}
        </v-tab>
    </v-tabs>
</template>

<script>
    export default {
        name: 'Toc',
        props: {
            toc: {type: Array, required: true},
            activeIndex: {type: Number|String, required: true}
        },
    }
</script>
