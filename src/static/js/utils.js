const objectAssign = require('object-assign');
const util = {
    install (Vue) {
        Vue._util = createUtil();
        Object.defineProperties(Vue.prototype, {
            _util: {
                get: function () {
                    return createUtil();
                }
            }
        })
    }
};
function createUtil () {
    return {
        // 渲染城市名
        setCityName(params){
            let cityname = ''
            switch (params.row.city || params.row.orgId) {
                case '01':
                    cityname = '南京市';
                    break;
                case '02':
                    cityname = '苏州市';
                    break;
                case '03':
                    cityname = '无锡市';
                    break;
                case '04':
                    cityname = '常州市';
                    break;
                case '05':
                    cityname = '镇江市';
                    break;
                case '06':
                    cityname = '扬州市';
                    break;
                case '07':
                    cityname = '南通市';
                    break;
                case '08':
                    cityname = '泰州市';
                    break;
                case '09':
                    cityname = '徐州市';
                    break;
                case '10':
                    cityname = '淮安市';
                    break;
                case '11':
                    cityname = '盐城市';
                    break;
                case '12':
                    cityname = '连云港市';
                    break;
                case '13':
                    cityname = '宿迁市';
            }
            return cityname
        },
        // 渲染角色名
        setRoleName(params){
            let roletype = ''
            switch (params.row.type) {
                case '0':
                    roletype = '超级管理员';
                    break;
                case '1':
                    roletype = '管理员';
                    break;
                case '2':
                    roletype = '操作员';
                    break;
                case '3':
                    roletype = '审核员';
            }
            return roletype
        },
    }
}
export default util;
