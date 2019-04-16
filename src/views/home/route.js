/**
 * Created by lzy on 2019/4/15
 */
const Home =() => import(/* webpackChunkName: "home-page" */ '@views/home/index');
const Err404 =() => import(/* webpackChunkName: "home-page" */ '@views/home/err_404');
const Err500 =() => import(/* webpackChunkName: "home-page" */ '@views/home/err_500');

const HOME_ROUTERS =[
    {
        path: '/home',
        name: '首页',
        component: Home,
        meta: {requireAuth: false,index:0,},
    },
    {
        path: '/404',
        name: '404',
        component: Err404,
        meta: {requireAuth: false,index:0,},
    },
    {
        path: '/500',
        name: '500',
        component: Err500,
        meta: {requireAuth: false,index:0,},
    },
]

export default HOME_ROUTERS
