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
  <!-- 
    
   -->
  <!-- < div v-for="o in items" :key="o" >
   <a href="">{{o.name}}</a> 
    <br>
   <a href="">{{o.signature}}</a> 
   <a href="">{{o.count}}</a>
    
  </div> -->
  
  <!-- <p class="make-wrap">尖椒啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
    <img src="../../assets/css/main-img/center-img3.png" alt=""> -->
  <el-card class="tenimg" >
    <div v-for="(item,index) in topimg" :key="index.id" class="dimg">
    <img :src="item.picture" class="elimg">
      
    <div class="dfont">
      <p>{{item.title}}</p>
    </div>
    </div>
    <div v-for="(item,index) in topimg" :key="index.id" class="dimg">
    <img :src="item.picture" class="brimg">
      
    <div class="dfont">
      <p>{{item.title}}</p>
    </div>
    </div>
    
    <!-- 第二行 -->
    
  </el-card>
  <!--  -->

  

</div>
</template>

<script>
export default {
  data () {
    return {
      // titles:[
      // {
      //   id:1,
      //   url:require("../../assets/css/Image/qe.png"),
      //   name:'Gordon Ramsay',
      //   signature:"It's Fucking raw!",
      //   count:'1622.8万'
      // },  
      // {
      //   id:2,
      //   url:require("../../assets/css/Image/qe.png"),
      //   name:'Apple',
      //   signature:'4月春季Apple新品发布会',
      //   count:'2312.8万'

      // },
      // {
      //   id:3,
      //   url:require("../../assets/css/main-img/center-img3.png"),
      //   name:'SpeedSport',
      //   signature:'價值一千萬地Ferrari sf90',
      //   count:'120.6万',
      // },
      // ],
      // items: [
       
      // {
      //   id:4,
      //   url:require("../../assets/css/main-img/center-img3.png"),
      //   name:'Shmee',
      //   signature:'Hello everyone,I Shmeedd',
      //   count:'300.3万',

      // },
      // {
      //   id:5,
      //   url:require("../../assets/css/main-img/center-img4.png"),
      //   name:'XRX',
      //   signature:'歡迎收看XRX得Channel啦',
      //   count:'157.9万',
      // },
      // {
      //   id:6,
      //   url:require("../../assets/css/main-img/center-img10.webp"),
      //   name:'極速拍檔-jacky-jojo',
      //   signature:'7200幹Ta!!!',
      //   count:'107.3万',
        
      // },
      
      
      // ],
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

      
    circleUrl:require('../../assets/css/main-img/center-img1.webp')
      

      
    }
  }
}
</script>
  
<style lang="less" scoped>

// new
.img0 {
    margin-left: 0.3%;
    margin-top: 0.2%;
  }

  .img1 {
    width: 206px;
    height: 116px;
    border-radius: 4px;
  }
.yincang {
    position: relative;
    width: 206px;
    height: 114px;
    color: white;
    font-size: 14px;
    border-radius: 4px;
    padding-bottom: -10%;
    background-color: #ff8484;
    margin-top: -30%;
    transform: translateY(0px);
    transition: .1s linear;
    padding: 0px 2px
  }

  .img0:hover .yincang {
    transform: translateY(-73.6px);
    background-color: rgba(34, 20, 20, 0.6);
    //transition: .1s linear;
  }
// end
.dimg{
  position: relative;
  float: left;
  
  }
.elimg{
  position: relative;
  margin-left: 10px;
  width: 206px;
  height: 119px;
  // -webkit-border-radius:4px;
  // -moz-border-radius:4px;
  //padding-left: 10px;
  border-radius: 4px;

}
.brimg{
  position: relative;
  margin-left: 10px;
  width: 206px;
  height: 119px;
  top: -111px;
  border-radius: 4px;
}
.dfont{
  position: relative;
  left: 10px;
  top: -10px;
  width: 206px;
  height: 119px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0);
  font-size: 1px;
  transform: translateY(0px);
  transition: .2s linear;
 
}
// .pfont{
//   color: pink;
//   position: relative;
//   transform: translateY(0px);
//   transition: .3s linear;
//   top: 125px;  
// }
// .ding:hover .pfont{
//   transform: translateY(-125px);
// }
.dimg:hover .dfont{
  
  transform: translateY(-115px);
  background-color: rgba(51, 51, 51, 0.431);
  color: white;
}
// Beta End
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

