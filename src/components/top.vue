<template>
<el-container>
  <el-header>Header</el-header>
  <el-main>Main
    <el-card>
    <el-carousel >
        
      <el-carousel-item v-for="item in imagebox" :key="item.id">
        
                <img :src="item.idView"   >
        
      </el-carousel-item>
    </el-carousel>
  </el-card>





  </el-main>
  <el-footer>Footer</el-footer>
</el-container>

  
</template>

<script>
export default {
  data () {
    return {
      imagebox:[
        {id:0,idView:require('../assets/css/Image/banner1.jpg')},
        {id:1,idView:require('../assets/css/Image/banner1.png')},
        {id:2,idView:require('../assets/css/Image/banner2.jpg')},
        {id:3,idView:require("../assets/css/Image/banner4.jpg")}
        
      
      
      ],
    }
  }
}
</script>

<style scoped>
.el-card{
  width: 400px;
  height: 210px;
}
</style>