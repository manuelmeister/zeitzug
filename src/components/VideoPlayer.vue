<template>
    <div>
        <video class="video-js" ref="videoPlayer" v-bind="$attrs"></video>
    </div>
</template>

<script>
    import videojs from 'video.js';

    export default {
        name: "VideoPlayer",
        inheritAttrs: false,
        props: {
            options: {
                type: Object,
                default() {
                    return {
                        fluid: true
                    };
                }
            }
        },
        data() {
            return {
                player: null
            }
        },
        mounted() {
            this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
                console.log('onPlayerReady', this);
            })
        },
        beforeDestroy() {
            if (this.player) {
                this.player.dispose()
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~video.js/dist/video-js.css";
</style>
