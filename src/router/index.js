import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import( '@views/layout/index');
import HOME_ROUTERS from '../views/home/route'
import DEMO_ROUTERS from '../views/demo/route'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: '首页',
            component: Index,
            redirect: 'home',
            children: [
                ...HOME_ROUTERS,
                ...DEMO_ROUTERS
            ],
            meta: {
                index:0, // 层级，用于判断过渡动画的效果
                requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
            }
        }
    ]
})

router.beforeEach(function (to, from, next) {
    if (to.meta.title) {  // || store.state.title
        Vue.refreshTitle(to.meta.title ); //|| store.state.title
    }
    next();
});

export default router