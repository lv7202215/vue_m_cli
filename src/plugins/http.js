/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 * create by lvzhiyang
 */
import axios from 'axios';
import router from '../router/index';
import store from '../store/index';

// 创建axios实例
var instance = axios.create({timeout: 1000 * 12});
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 从wx_info获取token
// let token= sessionStorage.getItem('token')
// instance.defaults.headers.common["token"] = token;

/**
 * 请求拦截器
 */
axios.interceptors.request.use(
    config => {
        store.getters.isLoading = true;
        return config
    },
    error => {
        setTimeout(() => {
            store.getters.isLoading = false;
        }, 3000)
        return Promise.reject(error)
    })
/**
 * 响应拦截器
 */
axios.interceptors.response.use(
    data => {
        // 错误处理
        switch (data.data.result) {
            // 401: 未登录状态，跳转登录页
            case 401:
                // store.dispatch('logout').then(() => {
                //     //跳转到登录页面
                //     router.push('/login');
                // })
                break;
            // 403 token过期
            // 清除token并跳转登录页
            case 403:
                console.log('登录过期，请重新登录');
                // sessionStorage.removeItem('token');
                // store.dispatch('logout')
                // setTimeout(() => {
                //     router.push({name:'login'})
                // }, 1000);
                break;
            // 404请求不存在
            case 404:
                console.log('请求的资源不存在');
                break;
            default:
        }
        // 响应成功关闭loading
        store.getters.isLoading = false;
        return data
    },
    error => {
        setTimeout(() => {
            store.getters.isLoading = false;
        }, 1000)
        return Promise.reject(error)
})

export default instance;
