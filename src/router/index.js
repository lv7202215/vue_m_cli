import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../components/login'
import Index from '../views/index/index'
import Reload from '../views/index/reload'
import HOME_ROUTERS from '../views/home/route'
// import store from '../store'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: '首页',
            component: Index,
            redirect:'home',
            children:[
                ...HOME_ROUTERS,
            ],
            meta: {
                requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
            }
        },
        {
            path: '/',
            name: 'reloading',
            component: Reload,
        },
        // {
        //     path: '/login',
        //     name: 'login',
        //     component: Login
        // },
    ]
})

// 注册全局钩子用来拦截导航
// router.beforeEach((to, from, next) => {
//     // 检测路由配置中是否有requiresAuth这个meta属性
//     if (to.matched.some(record => record.meta.requireAuth)) {
//         // 判断是否已登录
//         if (store.getters.isLoggedIn) {
//             next();
//             return;
//         }
//         // 未登录则跳转到登录界面
//         next('/login');
//     } else {
//         next()
//     }
// })

export default router