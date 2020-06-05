import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/characters',
        name: 'Characters',
        component: () => import(/* webpackChunkName: "characters" */ '@/views/Characters')
    },
    {
        path: '/app',
        component: () => import(/* webpackChunkName: "webapp" */ '@/views/Webapp'),
        children: [
            {
                name: 'AppChoose',
                path: '',
                component: () => import(/* webpackChunkName: "choose" */ '@/views/webapp/Choose'),
            },
            {
                path: 'qr',
                component: () => import(/* webpackChunkName: "qr" */ '@/views/webapp/Qr'),
                children: [
                    {
                        name: 'AppQr',
                        path: '',
                        component: () => import(/* webpackChunkName: "qr" */ '@/views/webapp/qr/QrInfo'),
                    },
                    {
                        name: 'QrScan',
                        path: 'scan',
                        component: () => import(/* webpackChunkName: "qr" */ '@/views/webapp/qr/QrScan'),
                    },
                    {
                        name: 'QrException',
                        path: 'exception',
                        component: () => import(/* webpackChunkName: "qr" */ '@/views/webapp/qr/QrException'),
                    },
                    {
                        name: 'QrWatch',
                        path: 'watch',
                        component: () => import(/* webpackChunkName: "qr" */ '@/views/webapp/qr/QrWatch'),
                    }
                ]
            },
            {
                name: 'AppList',
                path: 'list',
                component: () => import(/* webpackChunkName: "list" */ '@/views/webapp/List'),
            },
            {
                name: 'AppWatch',
                path: 'watch',
                component: () => import(/* webpackChunkName: "list" */ '@/views/webapp/Watch'),
            }
        ]
    },
    {
        path: '/background',
        name: 'Backgrounds',
        component: () => import(/* webpackChunkName: "backgrounds" */ '@/views/Backgrounds')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
        path: '/storyboard',
        name: 'Storyboard',
        component: () => import(/* webpackChunkName: "storyboard" */ '@/views/Storyboard')
    },
    {
        path: '/',
        redirect: {name: 'AppChoose'}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash && !to.params.stay) {
            return {
                selector: to.hash,
                offset: to.params.mobile ? {x: 0, y: 0} : {x: 0, y: this.app.$vuetify.application.top}
            }
        }
    }
})

export default router
