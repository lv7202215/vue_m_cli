/**
 * Created by lzy on 2019/4/16
 */
const DEMO =() => import(/* webpackChunkName: "home-page" */ '@views/demo/index')

const DEMO_ROUTERS =[
    {
        path: '/demo',
        name: '订单1',
        component: DEMO,
        meta: {requireAuth: false},
    },
]

export default DEMO_ROUTERS
