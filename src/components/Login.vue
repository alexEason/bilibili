<template>
  <div>
    <el-button type="primary" @click="bpsh">登录界面</el-button>
    <img src="../assets/css/logo.png" title="功能尚未完成"> 
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  //   directives:{
  // // 注册局部自定义指令 v-focus
  // focus:{
  //   // 自定义指令
  //   inserted:function(el){
  //     //设置聚焦元素
  //     el.querySelector('input').focus() 
  //   }
  // }
  // },
  methods:{
    bpsh(){
      this.$router.push('/home')

    }
  }
}
console.log('Vue练习(╯‵□′)╯︵┻━┻');

</script>

<style lang="less" scoped>

</style>