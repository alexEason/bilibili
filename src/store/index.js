import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

//  创建对象
const state={
  isCollapse:false
}
 
export default new Vuex.Store({
  state
});