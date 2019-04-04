import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import utils from  './plugins/utils'
import {JSEncrypt} from 'jsencrypt'
import api from './service/index.js' // 导入api接口
import baseUrl from './service/base'
import './static/style/nomal.css'// 初始化样式
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
const plugins = [api,utils,mandMobile]; // 插件列表
plugins.map(plg => Vue.use(plg)); // 引入插件
Vue.config.productionTip = false

/*  将api挂载到vue的原型上 */
Vue.prototype.$api = api; //
/* baseUrl */
Vue.prototype.$base = baseUrl;
/* RSA加密 */
Vue.prototype.$setRSA = (password, publicKey) =>{
    let encrypt = new JSEncrypt()
    encrypt.setPublicKey(publicKey)
    return encrypt.encrypt(password)
}
Vue.prototype.$getRSA = (rsa ,priKey)=>{
    let decrypt = new JSEncrypt()
    decrypt.setPrivateKey(priKey)
    return decrypt.decrypt(rsa)
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
