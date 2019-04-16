import Vue from 'vue'
import Vuex from 'vuex'
// 用户信息模块
import user from './modules/user';
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        loading:false
    },
    mutations: {

    },
    actions: {

    },
    modules: {
        user,
    }
})
