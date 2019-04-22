/**
 * Created by lzy on 2019/4/15
 */
const Home =() => import(/* webpackChunkName: "home-page" */ '@views/home/index');

const HOME_ROUTERS =[
    {
        path: '/home',
        name: '首页',
        component: Home,
        meta: {requireAuth: false,index:0,},
    }
]

export default HOME_ROUTERS
