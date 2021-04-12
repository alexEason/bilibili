<template>
   <el-container class="home-container">
     <!-- 头部区域 -->
  <el-header height="100px"> <a class="font">( •̀ ω •́ )凸(艹皿艹 )</a> 
    <el-button  circle icon="el-icon-switch-button" @click="rbtn"></el-button>
    <el-button type="primary" @click="tbtn">测试</el-button>
  </el-header>
  <el-container>
    <!-- 侧边栏区域 -->
    <el-aside width="200px">
      <!-- default-active默认点亮第几个导航 select菜单回调激活 -->
      <el-menu
        default-active="1"  
      >  
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-locton"></i>
          <span >首页</span>
        </template>
        <el-menu-item-group>
          <!-- 子菜单组名称 -->
          <template slot="title">分组一</template>
          <!-- 子菜单选项 -->
          <el-menu-item index="1-1" @click="btn">选项一可跳转</el-menu-item>
          <el-menu-item index="1-2">选项二</el-menu-item>
        </el-menu-item-group>
          <!-- 继续套娃 -->
          <el-submenu index="3">
            <template slot="title">测试</template>
          <el-menu-item-group>
            <template slot="title">分组二</template>
            <el-menu-item index="2-1">选项三</el-menu-item>
            <el-menu-item index="2-1">选项四</el-menu-item>
          </el-menu-item-group>
          </el-submenu>
          <!-- ↑套娃结束 -->
      </el-submenu>
          <!-- 导航二 -->
      <el-menu-item index="2" @click="bbtn">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" @click="bbbtn">
        <i class="el-icon-setting" ></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>



    </el-aside>
    <!-- 中间主题区域 -->
    <el-main>
    <!-- 跳转区域 -->
    <router-view></router-view>

    </el-main>
      <!-- 脚步区域 -->
  </el-container>
</el-container>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  methods: {
    // 点击按钮跳转界面
    rbtn(){
      //清空缓存
       window.sessionStorage.clear()
      this.$router.push('./Login')

    },
    tbtn(){
      // windos.sessionStorage.clear()
      this.$router.push('./Loginn')
    },
    btn(){
    this.$router.push('./Tab')
    console.log('btn')
  },
  bbtn(){
    this.$router.push('./TabBar')
    console.log('bbtn')
  },
  bbbtn(){
    this.$router.push('/TabBb')
  }
  
  },
  //获取网页地址域名
  activated(){
    this.$router.push(this.path)
  },
  beforeRouteLeave(to,from,next){
    console.log(this.$route.path)
    this.path = this.$route.path
    next()
  },
}
</script>


<style lang="less" scoped>
.LoginColor{
  //background-color: coral;
  height: 100%;
}
.ll{
  height: 100%;
}
// 头部
.el-header{
  background-color: #144d8b;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color:rgb(255, 255, 255);
  font-size: 50px;
}
// 侧边栏
.el-aside {
    background-color: #1c334e;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 200px;
  }
// 中间
.el-main{
  background-color: #ffffff;
}
.home-container{
  height: 100%
}
.font{
  margin-left: 10px;
}


</style>