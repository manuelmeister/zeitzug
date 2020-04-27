import Vue from 'vue'
import VueRouter from 'vue-router'
import Storyboard from "@/views/Storyboard";

Vue.use(VueRouter)

const routes = [
    {
        path: '/characters',
        name: 'Characters',
        component: () => import(/* webpackChunkName: "characters" */ '@/views/Characters')
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
        component: Storyboard
    },
    {
        path: '/',
        redirect: {name: 'Storyboard'}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash && !to.params.stay) {
            return {
                selector: to.hash,
                offset: to.params.mobile ? {x: 0, y: 0} : {x: 0, y: 140}
            }
        }
    }
})

export default router
