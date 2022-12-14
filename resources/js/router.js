import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/get',
            component: () => import('./components/Get'),
            name: 'get.index'
        },
        {
            path: '/user/login',
            component: () => import('./components/login'),
            name: 'user.login'
        },
        {
            path: '/user/registration',
            component: () => import('./components/Registration'),
            name: 'user.registration'
        },
        {
            path: '/user/personal',
            component: () => import('./components/Personal'),
            name: 'user.personal'
        },
    ]
})



export default router
