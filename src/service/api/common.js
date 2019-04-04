/**
 * 通用模块接口列表
 * create by lvzhiyang
 */

import base from '../base'; // 导入接口域名列表
import axios from '../../plugins/http'; // 导入http中创建的axios实例

// let openid = JSON.parse(sessionStorage.wx_info).openid || '--'
const common = {
    // 上传图片
    // upload(param){
    //     return axios.post(`${base.dv}/StaticResource/FtpImage`,param)
    // },
}

export default common;
