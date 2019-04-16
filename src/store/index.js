import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
import Vuex from 'vuex'
// 用户信息模块
import demo from './modules/demo';
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
        demo,
    },
    plugins: [createPersistedState({
        // vuex持久化插件
        storage: window.sessionStorage
    })]
})
