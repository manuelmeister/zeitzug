import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    breakpoint: {
        thresholds: {
            xs: 600,
            sm: 768,
            md: 960,
            lg: 1280,
        },
        scrollBarWidth: 24,
    },
    icons: {
        iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {
        themes: {
            light: {
                primary: '#5D4037',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
                anchor: '#1e88e5'
            },
        },
    }
});
