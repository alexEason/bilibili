<template>
<div>

  <!-- Frome lo 1 -->
  <el-row type="flex" class="row-bg" justify="start" :gutter=" 10">
  <el-col :span="0.5"><div class="grid-content bg-purple">
        主页
    </div></el-col>
  <el-col :span="0.5"><div class="grid-content ba-purple-light">影视</div></el-col>
  <el-col :span="0.5"><div class="grid-content bg-purple-light">番剧</div></el-col>
  <el-col :span="1.5"><div class="grid-content bg-purple-light">游戏中心</div></el-col>
  <el-col :span="0.5"><div class="grid-content bg-purple-light">直播</div></el-col>
  <el-col :span="1.5"><div class="grid-content bg-purple-light">会员狗</div></el-col>
  <el-col :span="1"><div class="grid-content bg-purple-light">漫画</div></el-col>
  <el-col :span="1"><div class="grid-content bg-purple-light">赛事</div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light">下载app</div></el-col>
  <el-col :span="7"><div class="grid-content bg-purple-light">
    <el-input placeholder="😶😶😶😲😐😐😐" clearable >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>  </div></el-col>
  <el-col :span="1"><div class="grid-content bg-purple">
    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    
    </div></el-col>
    <el-col :span="1"><el-link>大会员</el-link></el-col>
          <el-col :span="1">
            <el-badge :value="999" :max="99">
            <el-link>消息</el-link>
            </el-badge>         
            </el-col>  
          <el-col :span="1"><el-link>动态</el-link></el-col>
          <el-col :span="1"><el-link>收藏</el-link></el-col>
          <el-col :span="1"><el-link>历史</el-link></el-col>
          <el-col :span="2"><el-link>创作中心</el-link></el-col>
          <el-col :span="2"><el-button>投稿</el-button></el-col>
          <el-col :span="2"><el-link>创作收益</el-link></el-col>
  </el-row>

  <!-- for循环渲染 -->
  <el-card class="live-card">
    <div class="live-div"> 
   <ul>
  <li v-for=" (item,index) in titles" :key="index" class="live-number">
    <a href="" class="title-treenum">{{item.id}}</a>
    <el-avatar class="title-treeimg" :src="item.url"></el-avatar>
    <a href="" class="title-name">{{item.name}}</a>
    <br>
    <a href="" class="title-signature">{{item.signature}}</a>
    <br>
    <a href="" class="el-icon-user-solid title-countt">{{item.count}}</a> 
  </li>
  <li v-for=" item in items" :key="item.id" class="live-number" >
    <a href="#" class="title-number" >{{item.id}}</a>
    <el-avatar class="title-img" :src="item.url"></el-avatar>
    <ul>
      <li class="title-name">{{item.name}}</li>
    </ul>
      <br>
    <ul>
      <li class="title-signature">{{item.signature}}</li>
    </ul>
    <br>
    <div >
      <a class="el-icon-user-solid title-count">{{item.count}}</a>      
    </div>    
    <!-- <a href="" class="title-signature" >{{i.signature}}</a> -->  
  </li>
  
</ul>
</div>
  </el-card>
  <!-- < div v-for="o in items" :key="o" >
   <a href="">{{o.name}}</a> 
    <br>
   <a href="">{{o.signature}}</a> 
   <a href="">{{o.count}}</a>
    
  </div> -->
  
  <p class="make-wrap">尖椒啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
  <img src="../../assets/css/main-img/center-img3.png" alt="">



</div>
</template>

<script>
export default {
  data () {
    return {
      titles:[
      {
        id:1,
        url:require("../../assets/css/Image/qe.png"),
        name:'Gordon Ramsay',
        signature:"It's Fucking raw!",
        count:'1622.8万'
      },  
      {
        id:2,
        url:require("../../assets/css/Image/qe.png"),
        name:'Apple',
        signature:'4月春季Apple新品发布会',
        count:'2312.8万'

      },
      {
        id:3,
        url:require("../../assets/css/main-img/center-img3.png"),
        name:'SpeedSport',
        signature:'價值一千萬地Ferrari sf90',
        count:'120.6万',
      },
      ],
      items: [
       
      {
        id:4,
        url:require("../../assets/css/main-img/center-img3.png"),
        name:'Shmee',
        signature:'Hello everyone,I Shmeedd',
        count:'300.3万',

      },
      {
        id:5,
        url:require("../../assets/css/main-img/center-img4.png"),
        name:'XRX',
        signature:'歡迎收看XRX得Channel啦',
        count:'157.9万',
      },
      {
        id:6,
        url:require("../../assets/css/main-img/center-img10.webp"),
        name:'極速拍檔-jacky-jojo',
        signature:'7200幹Ta!!!',
        count:'107.3万',
        
      },
      
      
      ],

      
    circleUrl:require('../../assets/css/main-img/center-img1.webp')
      

      
    }
  }
}
</script>
  
<style lang="less" scoped>
// 組件Css
  a{

text-decoration:none;
float: left;

  }
  ul li{
    list-style: none;
  }


.make-wrap{

  width: 120px;
  display: block;
  white-space:nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
} 
.beta{
  font-size: 1px;
}
.live-card{
 
  width: 320px;
  height:400px;
}
.live-div{
  position: relative;
  top:-50px;
}
.circle {
  position:relative;
  border-radius: 50%;
  width: 2rem;
  top: 40px;
  left: 77px;
  height: 2rem;
  background: #333 ;
}
.title-img{
  position: relative;
  float: left;
  right: 46px;
  top: 22px;
}
.title-treeimg{
  position: relative;
  float: left;
  right:51px;
  top:23px;
}
.live-right{

  background-color: bisque;
  //width: 100px;
} 
.title-name{
  display: flex;
  //background-color: yellow;
  position: relative;
  color: #333;
  float: left;
  right:22px;
  top: 24px ;
  font-size: 13px;
}
.title-signature {
 
 display: flex;
  background-color: yellow;
  position: relative;
  color: #333;
  float: left;
  right:22px;
  top:20px;
  font-size: 1px;
  
}

.title-count{

  position: relative;
  float: left;
  color: rgb(136, 136, 136);
  top:-10px;
  left: 194px;
  font-size: 1px;
}
.title-countt{
  position: relative;
  color: rgb(136, 136, 136);
  font-size: 1px;
  left: 193px;
}
.title-treenum{
  position:relative;
  color: white;
  font-size: 1px;  
  right:58px;
  top: 32px;
  padding: 1px 4.5px 1px 4.5px;
  text-align: center;
  line-height: 20px;
  background-color: #00a1d6;
  border-radius: 2px;
}
.title-number{
  position:relative;
  float: left;
  color: rgba(167, 161, 161, 0.979);
  top: 25px;
  font-size: 15px;
  right: 55px;

}
.live-number {
    color: rgb(14, 12, 12);
    list-style: none;
    right:14px;
    padding: 1px 4.5px 1px 4.5px;
    text-align: center;
    line-height: 20px;
    //background-color: #00a1d6;
    height: 65px;
    border-radius: 2px;
  }

// 组件结束

  .el-row {
    margin-bottom: 20px;
    
  }
  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px   0;
    background-color: #f9fafc;
  }
  .image{
    width: 700px;
    height: 600px;
    float: left;
  }








</style>

