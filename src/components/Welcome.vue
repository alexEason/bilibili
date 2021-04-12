<template>

  <!-- 使用V-model绑定数据表单addFrom.name = return 里的addFrom里定义的一个值 -->
  <el-input v-model="addFrom.name" placeholder="Apple" v-focus></el-input>
  <!-- <span>测试幻灯片</span> -->
  <!-- 幻灯片 -->
  <!-- <el-carousel height="300px">
   <el-carousel-item v-for="item in 4" :key="item">
     
     <h3 class="small">{{item}}</h3>
   </el-carousel-item>
  </el-carousel> -->
  

</template>


<script>
export default {

  data () {
    return {
      item:'',
      addFrom:{
        name:'',
      }
    }
  
  },
    directives:{
  // 注册局部自定义指令 v-focus
  focus:{
    // 自定义指令
    inserted:function(el){
      //设置聚焦元素
      el.querySelector('input').focus() 
    }
  }
  },
  
  
  methods: {
    
  } 
}
</script>

<style lang="less" scoped>
  

</style>