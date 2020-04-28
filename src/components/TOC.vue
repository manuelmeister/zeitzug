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

<style lang="sass">
    #documentation-toc
        .supporter-group__title
            padding-left: 8px

        .documentation-toc
            list-style-type: none !important
            margin: 0
            padding: 32px 0 0
            text-align: left
            width: 100%

            li
                border-left: 2px solid transparent
                padding: 0 24px 0 8px

            li a
                color: inherit
                font-size: .875rem
                font-weight: 400
                text-decoration: none
                transition: color .1s ease-in

            .supporter-group
                justify-content: flex-start !important

            .documentation-toc__link--subheader
                margin-left: 8px
</style>
