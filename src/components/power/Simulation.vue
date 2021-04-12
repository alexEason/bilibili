<template>
  <div id="tab-bar">
    <!-- 引用组件 -->
    <!-- 封装独立组件 -->
    <!-- <tab-bar>
      
    </tab-bar> -->
  <el-button type="primary" @click="bbtn">退出</el-button>
      <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b" >

  <el-menu-item index="1" @click="go">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
  </el-submenu>
  <!-- disabled禁用状态 -->
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <!-- target新建窗口打开链接 -->
  <el-menu-item index="5"><a href="https://www.bilibili.com" target="_blak">跳转链接</a></el-menu-item>
</el-menu>


  </div>
  
</template>

<script>
// 导入组件
import TabBar from '@/components/tabbar/TabBar'

export default {
  data () {
    return {
      
    }
  },
  methods:{
    bbtn(){
      // push在网页中可以有返回事件
      this.$router.push('/Welcome')

    },
    go(){
      this.$router.push('./Tab')

    }
  },
  // 注册组件
  // components:{
  //   TabBar
  // }
}
</script>

<style lang="less" scoped>
.tab-bar{
  display: flex;
  position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
}
.el-menu-demo{
  
  flex: 2;
  
}


</style>