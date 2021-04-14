<template>
  <div class="app">
    <el-card class="tenimg" >
    <div v-for="(item,index) in topimg" :key="index.id" class="dimg">
    <img :src="item.picture" class="elimg">
      
    <div class="dfont">
      <p>{{item.title}}</p>
    </div>
    </div>
    
    <div v-for="(item,index) in topimg" :key="index.id" class="dimg">
    <img :src="item.picture" class="brimg">
    <div class="tfont">
      <p>{{item.title}}</p>
    </div>
    </div>
  </el-card>
  
  </div>
</template>

<script>
export default {
  data () {
    return {
      topimg:[
        {
          id:0,picture:require('../../assets/css/Image/ApLOGO.webp'),
          title:'赛博朋克2077里的地铁真的能坐！体验堪比过山车！'
        },
        {
          id:1,picture:require('../../assets/css/Image/ApLOGO.webp'),
          title:'The special event is on Tuesday,April 20,at Apple Park in Cupertino, CA. You canget all the details on Apple.com'
        },
        {
          id:2,picture:require('../../assets/css/Image/4.webp'),
          title:'Tom and Jerry'

        },
        {
          id:3,picture:require('../../assets/css/Image/amen.webp'),
          title:'ドラえもん'
        },
        {
          id:4,picture:require('../../assets/css/Image/2.jpg'),
          title:'名探偵コナン'
        }
      ],
    }
  }
}
</script>

<style lang="less" scoped>

.tenimg{
  width: 1200px;
  height: 280px;
  background-color: #00a0d600;
}

.dimg{
  position: relative;
  float: left;
  
  }
.elimg{
  position: relative;
  margin-left: 10px;
  width: 206px;
  height: 119px;
  top: -19px;
  left: -29px;
  border-radius: 4px;

}
.brimg{
  position: relative;
  margin-left: 10px;
  width: 206px;
  height: 119px;
  top: -19px;
  left: -29px;
  top: -111px;
  border-radius: 4px;
}
.dfont{
  position: relative;
  left: -18px;
  top: -25px;
  width: 206px;
  height: 120px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0);
  font-size: 1px;
  transform: translateY(0px);
  transition: .2s linear;
 
}
.tfont{
  position: relative;
  left: 10px;
  width: 206px;
  height: 14px;
  border-radius: 4px;
  background: #da343400;
  font-size: 1px;
  color: white;
  top:-131px;
  transform: translateY(0px);
  transition: .2s ease-out;

}
.dimg:hover .tfont{
  transform: translateY(-120px);
  height: 119px;
  background-color: rgba(51, 51, 51, 0.431);
  border-radius: 4px;
  color: white;
}

.dimg:hover .dfont{
  transform: translateY(-120px);
  background-color: rgba(51, 51, 51, 0.431);
  border-radius: 4px;
  color: white;
}

</style>