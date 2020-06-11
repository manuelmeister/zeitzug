<template>
    <router-view/>
</template>

<script>
    export default {
        name: "Qr",
        data: function () {
            return {
                qrReader: {
                    status: 'init'
                }
            }
        }
    }
</script>
