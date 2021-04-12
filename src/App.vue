<template>
  <div class="app">
    <!-- 路由挂载 路由占位 -->
    <!-- backtop组件放在app上全局生效 -->
    
    <router-view></router-view>
    <el-backtop target="#app" :visibilty-height="100"></el-backtop>

    <!-- <el-backtop :bottom="60"></el-backtop> -->


    </div>
</template>

<script>
// 导入组件

// export default {
//   name: "app"
// };
export default {
    name:"app",
}
</script>

<style>
#app{
  overflow-y:scroll ;
}
</style>
