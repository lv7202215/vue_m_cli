/**
 * Created by lzy on 2019/1/2
 */
import Home from './index'

const HOME_ROUTERS =[
    {
        path: '/home',
        name: '首页',
        component: Home,
        meta: {requireAuth: true},
    },
]

export default HOME_ROUTERS
