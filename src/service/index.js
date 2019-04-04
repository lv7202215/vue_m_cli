/**
 * api接口的统一出口
 * create by lvzhiyang
 */

// 通用模块接口
import common from './api/common'

// 首页模块接口
import login from './api/login';

// 列表模块接口
import list from './api/list'

// 导出接口
export default {
    common,
    login,
    list
}
