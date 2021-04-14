import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/base.css'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

//import TreeTable from 'vue-tabele-with-tree-grid'

// 引入API接口
axios.defaults.baseURL ='http://timemeetyou.com:8889/api/private/v1/'
// axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// API接口配置设置
axios.interceptors.request.use(config =>{
console.log(config)
config.headers.Authorization = window.sessionStorage.getItem('token')
return config

})

import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(ElementUI) //使用elementUI
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  

  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

require('./assets/css/logo.css')
