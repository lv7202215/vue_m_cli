const path = require('path');
module.exports = {
    // baseUrl:'/jiangsu/testentrance/sjfhtest/web/',
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@as',resolve('src/assets'))
            .set('@cp',resolve('src/components'))
            .set('@service',resolve('src/service'))
            .set('@static',resolve('src/static'))
            .set('@views',resolve('src/views'))
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    },
}
// alias
function resolve (dir) {
    return path.join(__dirname, dir)
}
// 全局引入mixin
function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/static/style/mix.scss'),
                path.resolve(__dirname, './src/static/style/global.scss'),
            ],
        })}
