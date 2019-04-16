/**
 * Created by lzy on 2019/4/16
 */
const Demo=() => import(/* webpackChunkName: "demo-page" */ '@views/demo/index')
const DemoDetail =() => import(/* webpackChunkName: "demo-page" */ '@views/demo/detail/index')

const DEMO_ROUTERS =[
    {
        path: '/demo',
        name: '订单1',
        component: Demo,
        meta: {requireAuth: false,index:1},
    },
    {
        path: '/detail',
        name: '订单详情',
        component: DemoDetail,
        meta: {requireAuth: false,index:2},
    },
]

export default DEMO_ROUTERS
