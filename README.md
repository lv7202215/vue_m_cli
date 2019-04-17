## 概述

* 基础环境：

  -  [Node.js最新稳定版](https://nodejs.org/en/)

  -  [Vue2.x](https://cn.vuejs.org/v2/guide/installation.html)

  -  [VueCli3](https://cli.vuejs.org/)

* 开发：跟普通的移动端单页开发方式一致。

* 调试：

  - 测试环境下，可以借助chrome进行调试，需要注意的是,要手动在sessionStorage中注入 **wx_info** 验证，具体的wx_info配置可以询问后端开发人员
  
  - 如果要进行真实账号测试或者是生产环境下，可以通过微信开发者工具进行调试，调试方式跟chrome类似。
  
  - vuex的调试，请先科学上网，然后在chrome拓展工具里搜索安装  **Vue.js devtools** ，安装完成后打开开发者工具，在最右侧vue栏里进行vuex调试。
  

## 框架使用

### 路由管理

* 采用树形结构管理路由，参考 HOME_ROUTERS 和 总路由 index.js的关系

* 每一个大模块单独设置一个路由，再汇总到总路由文件

* 如果该模块较为复杂，页面很多，可以视情况再细分路由。

### serve管理

* serve 下的 base.js用于全局配置api请求的域名或者ip地址等

  可以快速的切换测试环境和生产环境
  
  （mock为等在接口开发时使用的mock环境）

* serve下的 http.js 用于封装axios
  
  如果是微信公众号的项目，在此处配置token获取方式，并且添加到请求头
  
### 数据管理

* 简单项目无需使用vuex

* 数据交互较多难以管理时，使用vuex提高效率

  按照 store 下的示例modules进行编写
  
* 已经集成了vuex数据持久化插件，默认为所有state数据都存入session
    
  如果要更改存储位置，或者局部存入，自行修改plugin配置    
    
### 自适应方案（rem+vw）

* 在static/style/global下配置

* 默认配置以750作为设计稿基准

* 同时可以配置最大最小适配范围


### 上述功能都集成在view/demo项目里,可以参考demo具体了解


## 开发优化

* alias：在vue.config查看alias 路径，自行添加或者修改

* mixins: 已经全局配置，在static 下的mixin 进行样式函数的编写

## 用户体验

* 使用路由懒加载，提高加载速度

* 全局动态配置了路由切换动画，为了正确显示切换动画，在配置路由时一定要写明路由层级，切换动画时会根据层级比较作为判断

  
  
  
  
  



  
  