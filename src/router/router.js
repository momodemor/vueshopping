import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/category',
            component: () =>
                import ('../views/category/Category.vue')
        },
        {
            path: '/shopcart',
            component: () =>
                import ('../views/shopcart/Shopcart.vue')
        },
        {
            path: '/profile',
            component: () =>
                import ('../views/profile/Profile.vue')

        },
        {
            path: '/detail/:iid',
            component: () =>
                import ('../views/detail/Detail.vue')

        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () =>
        //         import ( /* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})