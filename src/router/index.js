import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// 路由懒载
const Login = ()=> import('../components/Login.vue')
const Home = () => import('../components/Home.vue')
const Welcome = () =>import('../components/Welcome.vue')
const Simulation = () => import('../components/power/Simulation.vue')
const Tab = () => import('../components/tabbar/Tab.vue')
const TabBar = () => import('../components/tabbar/TabBar.vue')
const TabBb = () => import('../components/tabbar/TabBb.vue')
const Loginn = () => import('../components/Loginn.vue')
const top = () => import('../components/top.vue')
//const tt =() => import('../assets.')
// 解决导航栏中Vue-router在版本3.0以上重复点击菜单报错方法
// 在终端控制台输入 npm i vue-router@3.0 -s 安装完成后重启项目即可


Vue.use(VueRouter)

// VueActions
// 创建路由对象
const routes = [
  // redirect路由重定向
  { path:'/',redirect:'Login'},
  { path: '/Login', component: Login, meta: { title: '登录界面' } },
  { path: '/top', component: top,meta:{title:'111'}},
  { path: '/Simulation', component: Simulation, meta: { title: '测试' } },
  { path: '/Text', component: Text, meta: { title: 'text' } },
  { path: '/Loginn', component: Loginn, meta: {title:'哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'}},
  { path: '/Home',  component: Home, redirect:'/Welcome',
  
  // 子菜单路由跳转,新加功能全局路由导航
  children:[
    { path: '/Welcome', component: Welcome, meta: { title: '欢迎' } },
    { path: '/Tab', component: Tab, meta: { title: '首页' } },
    { path: '/TabBar', component: TabBar, meta: { title: '我的' } },
    { path: '/TabBb', component: TabBb, meta: { title: 'Data' } },
    
    
    
  ]},

]

// 定义路由对象
const router = new VueRouter({
  routes,
  mode:'history'
})
// 全局路由守卫
router.beforeEach((to,from,next) =>{
  document.title = to.meta.title
  next()

  
})
// Getters 输入的计算属性准一次





export default router
