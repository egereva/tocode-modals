// Default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages
import Home from '@/pages/Home'
import Modals from '@/pages/Modals'
import Login from '@/pages/Login'

// Routering
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/modals',
            name: 'modals',
            component: Modals,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        }
    ]
})
