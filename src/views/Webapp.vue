<template>
    <v-sheet color="transparent" tile class="about pa-2 py-8 mx-auto" dark width="fit-content">
        <router-view class="mx-auto"/>
    </v-sheet>
</template>

<script>

    export default {
        name: "Webapp",
        mounted() {
            if (!localStorage.qrReader) {
                localStorage.qrReader = JSON.stringify({status: 'init'})
            }
        },
        computed: {
            mode: {
                get() {
                    return localStorage.mode
                },
                set(value) {
                    localStorage.mode = value
                }
            },
            qrReader: {
                get() {
                    if (localStorage.qrReader) {
                        return JSON.parse(localStorage.qrReader)
                    } else {
                        return localStorage.qrReader
                    }
                },
                set(value) {
                    return JSON.stringify(value)
                }
            }
        },
        methods: {
            async detected(promise) {
                try {
                    const result = await promise
                    let url = result.content
                    if (url) {

                    }
                    // ...
                } catch (error) {
                    window.alert(error)
                    // ...
                }
            },
            setMode(value) {
                localStorage.mode = value;
                if (value === 'qr') {
                    this.$router.push({name: 'qr'})
                } else if (value === 'list') {
                    this.$router.push({name: 'list'})
                }
            }
        }
    }
</script>

<style lang="scss">
    .avideo {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        display: block;

        iframe {
            width: 100%;

            display: block;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
</style>
