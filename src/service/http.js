/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 * create by lvzhiyang
 */
import axios from 'axios';
import {Toast} from 'mand-mobile';
import store from '../store/index';
import base from './base'


// 创建axios实例
axios.defaults.baseURL = base.mock; // 后端api开发完成改成对应的dv
axios.defaults.timeout = 15000;

// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 从wx_info获取token
let token= sessionStorage.getItem('token')
if(token) axios.defaults.headers.common["token"] = token;

/**
 * 请求拦截器
 */
axios.interceptors.request.use(
    config => {
        store.state.loading = true;
        return config;
    }
);

axios.interceptors.response.use(
    response => {
        const {errCode} = response.data;
        if (errCode === 401) {
            this.$router.push('/login');
        }
        store.state.loading = false;
        return response
    },
    error => {
        store.state.loading = false;
        return Promise.reject(error)
    }
);

export default {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: url,
                params: params

            }).then(res => {
                // console.log(res);
                if (res.data.errCode !== 0) Toast.failed(res.data.errMsg);
                else resolve(res.data);
            }, err => {
                reject(err);
                Toast.failed(err.message);
            });
        });
    },
    post(url, params) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: url,
                data: params

            }).then(res => {
                if (res.data.errCode !== 0) Toast.failed(res.data.errMsg);
                else resolve(res.data)
            }, err => {
                reject(err);
                Toast.failed(err.message);
            })
        })
    },

    exportExcel(url, params, filename) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: url,
                data: params,
                responseType: 'blob',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                resolve();
                const blob = new Blob([res.data]);
                const ua = navigator.userAgent.toLowerCase();
                if (/(ie|edge)/.test(ua) || "ActiveXObject" in window)
                    navigator.msSaveBlob(blob, filename);
                else
                {
                    const fileName = filename;
                    const elink = document.createElement('a');
                    elink.download = fileName;
                    elink.style.display = 'none';
                    elink.href = URL.createObjectURL(blob);
                    document.body.appendChild(elink);
                    elink.click();
                    URL.revokeObjectURL(elink.href); // 释放URL 对象
                    document.body.removeChild(elink);
                }

            }, err => {
                reject(err);
                Toast.failed(err.message);
            })
        })
    },

    upload(url, params) {
        let conf = {
            headers:{'Content-Type': 'multipart/form-data'}
        };
        return new Promise((resolve, reject) => {
            axios.post(url, params, conf).then(res => {
                resolve(res.data)
            },err => {
                reject(err);
                Toast.failed(err.message);
            })
        })
    }
}

