<template>
    <v-sheet color="transparent" tile class="about pa-2 py-8 mx-auto" dark width="fit-content">
        <transition :name="transitionName" mode="out-in">
            <router-view class="mx-auto" :key="$route.query.video"/>
        </transition>
    </v-sheet>
</template>

<script>

    export default {
        name: "Webapp",
        data() {
            return {
                transitionName: 'fade',
                videos: [
                    {
                        tag: 'intro',
                        next: 'episode1',
                        prev: 'AppChoose',
                    },
                    {
                        tag: 'episode1',
                        next: 'episode2',
                        prev: 'intro',
                    },
                    {
                        tag: 'episode2',
                        next: 'episode3',
                        prev: 'episode1',
                    },
                    {
                        tag: 'episode3',
                        next: 'outro',
                        prev: 'episode2',
                    },
                    {
                        tag: 'outro',
                        next: null,
                        prev: 'episode3',
                    },
                ]
            }
        },
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
        },
        beforeRouteUpdate(to, from, next) {
            if(to.params.transition) {
                this.transitionName = to.params.transition
            } else {
                let video = this.videos.find(video => video.tag === from.query.video);
                if (video) {
                    this.transitionName = to.query.video === video.next ? 'slide-left' : to.query.video === video.prev ? 'slide-right' : 'fade';
                }
            }
            next();
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

    .fade-enter-active, .fade-leave-active {
        transition-duration: .15s;
        transition-property: opacity;
    }

    .fade-enter-active{
        transition-timing-function: ease-in;
    }
    .fade-leave-active {
        transition-timing-function: ease-out;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .slide-left-leave-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-right-enter-active {
        transition-duration: .25s;
        transition-property: opacity, transform;
        overflow: hidden;
    }
    .slide-left-leave-active,
    .slide-right-leave-active {
        transition-timing-function: ease-in;
    }

    .slide-left-enter-active,
    .slide-right-enter-active{
        transition-timing-function: ease-out;
    }

    .slide-left-enter, .slide-right-leave-to {
        opacity: 0;
        transform: translate(2em, 0);
    }

    .slide-right-enter, .slide-left-leave-to {
        opacity: 0;
        transform: translate(-2em, 0);
    }
</style>
