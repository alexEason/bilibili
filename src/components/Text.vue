<template>
  <div id="app">
    <h1>text</h1>
    <h2>{{message}}</h2>
    <button @click="addition">+</button>
    <button @click="subretion ">-</button>
  </div>  
</template>

<script>
 
export default {
  name:'app',
  components:{
    TabBb
  },
  data () {
    return {
      message:"组件",
      counter:0,
      students:[
        // 计算年龄大于20的学生 
        {id:111,name:'alxe',age:19},
        {id:112,name:'axe',age:29},
        {id:113,name:'alx',age:39},
      ],
      components: {
        more20stu(store){
        return function(age){
          //调用结果返回 
          return state.students.filter(s => s.age > age)//返回一个结果,年龄要大于20
        }
        }
        // students :[ id:111]
    
      }      
    }
  }
}
</script>

<style lang="less" scoped>

</style>