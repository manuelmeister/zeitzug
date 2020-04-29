<template>
    <v-card class="vuetify-audio" elevation="0" color="#eee" light>
        <div class="d-flex align-center">
            <div class="controls">
                <v-btn text icon class="ma-2" color="primary" @click.native="playing ? pause() : play()" :disabled="!loaded">
                    <v-icon v-if="!playing || paused">mdi-play</v-icon>
                    <v-icon v-else>mdi-pause</v-icon>
                </v-btn>
                <v-btn text icon class="ma-2" color="primary" @click.native="loaded ? download() : reload()" v-if="!loaded">
                    <v-icon>mdi-refresh</v-icon>
                </v-btn>
            </div>
            <span class="pr-1 body-2" style="font-feature-settings: 'tnum'">{{ currentTime() }} / {{ duration }}</span>
            <v-slider :hide-details="true" color="primary" class="align-center" v-model="percentage"
                      @mousedown="dragSlider" @change="releaseSlider"
                      :max="totalDuration" :disabled="!loaded"/>
            <v-btn text icon class="ma-2" color="primary" @click.native="mute()" :disabled="!loaded">
                <v-icon v-if="!isMuted">mdi-volume-high</v-icon>
                <v-icon v-else>mdi-volume-mute</v-icon>
            </v-btn>
            <v-btn text icon class="ma-2" color="primary" @click.native="loaded ? download() : reload()"
                   v-if="loaded && downloadable">
                <v-icon>mdi-download</v-icon>
            </v-btn>
        </div>
        <audio id="player" ref="player" v-on:ended="ended" v-on:canplay="canPlay">
            <source v-if="!Array.isArray(src)" :src="src">
            <source v-else v-for="source in src" :src="source">
        </audio>
    </v-card>
</template>
<script>
    const formatTime = second => {
        let date = new Date(second * 1000).toISOString()
        return date.charAt(14) !== '0' ? date.substr(14, 5) : date.substr(15, 4);
    };

    export default {
        name: 'audio-player',
        props: {
            src: {
                type: String | Array,
                default: null
            },
            autoPlay: {
                type: Boolean,
                default: false
            },
            ended: {
                type: Function,
                default: () => {
                },
            },
            canPlay: {
                type: Function,
                default: () => {
                },
            },
            downloadable: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                firstPlay: true,
                isMuted: false,
                loaded: false,
                playing: false,
                wasPlaying: false,
                paused: false,
                percentageInternal: 0,
                pristinePercentage: true,
                currentTimeInternal: '0:00',
                audio: undefined,
                totalDuration: 0,
            }
        },
        computed: {
            duration: function () {
                return this.audio ? formatTime(this.totalDuration) : ''
            },
            percentage: {
                get() {
                    return this.percentageInternal
                },
                set(value) {
                    if (this.pristinePercentage) {
                        this.pristinePercentage = false
                    }
                    this.percentageInternal = value
                }
            }
        },
        methods: {
            dragSlider() {
                if (this.audio) {
                    this.wasPlaying = !this.audio.paused;
                    this.pause()
                }
            },
            releaseSlider() {
                if (this.audio) {
                    this.audio.currentTime = this.percentage
                    if (this.wasPlaying) {
                        this.play()
                    }
                }
            },
            stop() {
                this.audio.pause()
                this.paused = true
                this.playing = false
                this.audio.currentTime = 0
            },
            play() {
                if (this.playing) return
                this.audio.play().then(_ => this.playing = true)
                this.paused = false
            },
            pause() {
                if (!this.audio.paused) {
                    this.audio.pause()
                }
                this.paused = this.audio.paused
                this.playing = !this.audio.paused
            },
            download() {
                this.audio.pause()
                if(Array.isArray(this.src)){
                    window.open(this.src[0], 'download')
                } else {
                    window.open(this.src, 'download')
                }
            },
            mute() {
                this.isMuted = !this.isMuted
                this.audio.muted = this.isMuted
                this.volumeValue = this.isMuted ? 0 : 75
            },
            reload() {
                this.audio.load();
            },
            _handleLoaded: function () {
                if (this.audio.readyState >= 2) {
                    if (this.audio.duration === Infinity) {
                        // Fix duration for streamed audio source or blob based
                        // https://stackoverflow.com/questions/38443084/how-can-i-add-predefined-length-to-audio-recorded-from-mediarecorder-in-chrome/39971175#39971175
                        this.audio.currentTime = 1e101;
                        this.audio.ontimeupdate = () => {
                            this.audio.currentTime = 0
                            this.totalDuration = this.audio.duration
                            this.loaded = true;
                        }
                    } else {
                        this.totalDuration = this.audio.duration
                        this.loaded = true
                    }

                    if (this.autoPlay) this.audio.play()

                } else {
                    throw new Error('Failed to load sound file')
                }
            },
            _handlePlayingUI: function (e) {
                this.percentage = this.audio.currentTime
            },
            _handlePlayPause: function (e) {
                if (e.type === 'play' && this.firstPlay) {
                    // in some situations, audio.currentTime is the end one on chrome
                    if (this.pristinePercentage) {
                        this.audio.currentTime = 0;
                    }
                    this.firstPlay = false;
                }
                if (e.type === 'pause' && this.paused === false && this.playing === false) {
                    //this.currentTime = '0:00'
                }
            },
            _handleEnded() {
                this.paused = this.playing = false;
            },
            currentTime() {
                return this.audio ? formatTime(this.percentage) : '0:00'
            },
            init: function () {
                this.audio.addEventListener('timeupdate', this._handlePlayingUI);
                this.audio.addEventListener('loadeddata', this._handleLoaded);
                this.audio.addEventListener('pause', this._handlePlayPause);
                this.audio.addEventListener('play', this._handlePlayPause);
                this.audio.addEventListener('ended', this._handleEnded);
            },
        },
        mounted() {
            this.audio = this.$refs.player;
            this.init();
        },
        beforeDestroy() {
            this.audio.removeEventListener('timeupdate', this._handlePlayingUI)
            this.audio.removeEventListener('loadeddata', this._handleLoaded)
            this.audio.removeEventListener('pause', this._handlePlayPause)
            this.audio.removeEventListener('play', this._handlePlayPause)
            this.audio.removeEventListener('ended', this._handleEnded);
        }

    }
</script>

<style>
    .vuetify-audio {
        border-radius: 2px!important;
    }
</style>
