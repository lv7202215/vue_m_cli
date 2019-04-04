/**
 * 登录模块接口列表
 * create by lvzhiyang
 */

import base from '../base'; // 导入接口域名列表
import axios from '../../plugins/http'; // 导入http中创建的axios实例

const login = {
    userLogin(param){
        return axios.post(`${base.dv}/Weixin/Login`,param)
    },

}

export default login;
