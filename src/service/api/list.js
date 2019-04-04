/**
 * 列表模块接口列表
 * create by lvzhiyang
 */

import base from '../base'; // 导入接口域名列表
import axios from '../../plugins/http'; // 导入http中创建的axios实例

const list = {
    // 获取养老机构列表
    ylList(param){
        return axios.post(`${base.dv}/StaticResource/QryProvideAgedList`,param)
    },

}

export default list;
