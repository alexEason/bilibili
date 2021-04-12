<template>
  <div class="app">

    <!-- <el-card class="live-card">
      <el-row :gutter="20">
        <div class="card-1">
          <el-col :span="3" >
            <span  class="live-number">1</span>
          </el-col>
        </div>

        <div class="card-2">
          <el-col :span="5" >
           <el-avatar :size="43" :src="circleUrl" class="avtars" alt="请重新加载"></el-avatar>                       
        </el-col>
       </div>
                        
      <el-col :span="8">
        <ul style="list-style:none" class="card-3">
          <li class="show-username">  <a>逍遥散人</a> </li>
            <li>欢乐赛马 自由奔跑</li>
        </ul>              
      </el-col>
                        
      <el-col :span="2">
        <p class="el-icon-user-solid show-number" >281.2万</p>
      </el-col>
      </el-row>
    </el-card>     

    <el-card class="live-card">
      <el-row :gutter="20">
        <div class="card-1">
          <el-col :span="3" >
            <span  class="live-number">2</span>
          </el-col>
        </div>

        <div class="card-2">
          <el-col :span="5" >
           <el-avatar :size="43" :src="circleUrl" class="avtars" alt="请重新加载"></el-avatar>                       
        </el-col>
       </div>
                        
      <el-col :span="8">
        <ul style="list-style:none" class="card-3">
          <li class="show-username">  <a>逍遥散人</a> </li>
            <li>欢乐赛马 自由奔跑</li>
        </ul>              
      </el-col>
                        
      <el-col :span="2">
        <p class="el-icon-user-solid show-number" >281.2万</p>
      </el-col>
      </el-row>
    </el-card>  

    <el-card class="live-card">
      <el-row :gutter="20">
        <div class="card-1">
          <el-col :span="3" >
            <span  class="live-number">3</span>
          </el-col>
        </div>

        <div class="card-2">
          <el-col :span="5" >
           <el-avatar :size="43" :src="circleUrl" class="avtars" alt="请重新加载"></el-avatar>                       
        </el-col>
       </div>
                        
      <el-col :span="8">
        <ul style="list-style:none" class="card-3">
          <li class="show-username">  <a>逍遥散人</a> </li>
            <li>欢乐赛马 自由奔跑</li>
        </ul>              
      </el-col>
                        
      <el-col :span="2">
        <p class="el-icon-user-solid show-number" >281.2万</p>
      </el-col>
      </el-row>
    </el-card> 

    <el-card class="live-card">
      <el-row :gutter="20">
        <div class="card-1">
          <el-col :span="3" >
            <span  class="top-number">4</span>
          </el-col>
        </div>

        <div class="card-2">
          <el-col :span="5" >
           <el-avatar :size="43" :src="circleUrl" class="avtars" alt="请重新加载"></el-avatar>                       
        </el-col>
       </div>
                        
      <el-col :span="8">
        <ul style="list-style:none" class="card-3">
          <li class="show-username">  <a>逍遥散人</a> </li>
            <li>欢乐赛马 自由奔跑</li>
        </ul>              
      </el-col>
                        
      <el-col :span="2">
        <p class="el-icon-user-solid show-number" >281.2万</p>
      </el-col>
      </el-row>
    </el-card>

    <el-card class="live-card">
      <el-row :gutter="20">
        <div class="card-1">
          <el-col :span="3" >
            <span  class="top-number">5</span>
          </el-col>
        </div>

        <div class="card-2">
          <el-col :span="5" >
           <el-avatar :size="43" :src="circleUrl" class="avtars" alt="请重新加载"></el-avatar>                       
        </el-col>
       </div>
                        
      <el-col :span="8">
        <ul style="list-style:none" class="card-3">
          <li class="show-username">  <a>逍遥散人</a> </li>
            <li>欢乐赛马 自由奔跑</li>
        </ul>              
      </el-col>
                        
      <el-col :span="2">
        <p class="el-icon-user-solid show-number" >281.2万</p>
      </el-col>
      </el-row>
    </el-card>   

    <el-card class="live-card">
      <el-row :gutter="20">
        <div class="card-1">
          <el-col :span="3" >
            <span  class="top-number">6</span>
          </el-col>
        </div>

        <div class="card-2">
          <el-col :span="5" >
           <el-avatar :size="43" :src="circleUrl" class="avtars" alt="请重新加载"></el-avatar>                       
        </el-col>
       </div>
                        
      <el-col :span="8">
        <ul style="list-style:none" class="card-3">
          <li class="show-username">  <a>逍遥散人</a> </li>
            <li>欢乐赛马 自由奔跑</li>
        </ul>              
      </el-col>
                        
      <el-col :span="2">
        <p class="el-icon-user-solid show-number" >281.2万</p>
      </el-col>
      </el-row>
    </el-card>    -->

  <!-- 动画效果 -->
  <el-card class="live-card">
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
  </el-card>
  
  






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
  height: auto;
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
 </style> 
