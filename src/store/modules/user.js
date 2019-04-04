import axios from "axios";
import base from '../../service/base'

var instance = axios.create({timeout: 1000 * 12});
const user = {
    state: {
        // isLoading: false,
        // token验证
        pubKey:'',
        priKey:'',
        password:'',
        token: sessionStorage.getItem('token') || '',
    },
    mutations: {
        loading_start (state) {
            state.isLoading = true
        },
        loading_end (state) {
            state.isLoading = false
        },
        set_pub_key (state ,v) {
            state.pubKey = v
        },
        set_pri_key (state ,v) {
            state.priKey =  v
        },
        get_password (state,v) {
            state.password = v
        }
    },
    actions: {
        // 登陆
        login({commit} ,params) {
            // 设置默认请求头token
            instance.defaults.headers.common['token'] = token
        },
        // 获取rsa公钥、私钥
        getRsa({commit} ,params) {
            return new Promise((resolve, reject) => {
                axios({url:`${base.dv}/rsa/GetKey`, data: params, method: 'POST'})
                    .then(resp => {
                        commit('set_pub_key',resp.data.pubKey)
                        commit('set_pri_key',resp.data.priKey)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        // 获取rsa解密信息
        getPassword({commit} ,params) {
            return new Promise((resolve, reject) => {
                axios({url:`${base.dv}/rsa/EncryptPwd`, data: params, method: 'POST'})
                    .then(resp => {
                        console.log(resp)
                        // commit('get_password',resp.data.pubKey)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        }
    },
    getters: {
        // isLoggedIn: state => !!state.token,
        pubK: state => state.pubKey,
        priK: state => state.priKey,
        pass: state=> state.password
    }
};
export default user;
