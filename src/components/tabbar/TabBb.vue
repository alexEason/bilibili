<template>
<div class="app">
     
    <!-- <el-backtop  target="#app">
                <div
                    style="{
                        height: 100%;
                        width: 100%;
                        background-color: #f2f5f6;
                        box-shadow: 0 0 6px rgba(0,0,0, .12);
                        text-align: center;
                        line-height: 40px;
                        color: #1989fa;
                    }"
                    >
                   点击回到顶部
                </div>
            </el-backtop> -->
            

      
    
       <!-- <div class="banner">
          <img src="../../assets/css/Navigation/tou.png" class="banner-tou"/>
          <ul id="banner" style="list-style:none"> 
				<li><a href="#zhibo" class="aa">直播</a><a href="#zhibo" class="bb">直播</a></li>
				<li><a href="#donghua" class="aa">动画</a><a href="#donghua" class="bb">动画</a></li>
				<li><a href="#fanju" class="aa">番剧</a><a href="#fanju" class="bb">番剧</a></li>
				<li><a href="#guochuang" class="aa">国创</a><a href="#guochuang" class="bb">国创</a></li>
				<li><a href="#manhua" class="aa">漫画</a><a href="#manhua" class="bb">漫画</a></li>
				<li><a href="#yinyue" class="aa">音乐</a><a href="#yinyue" class="bb">音乐</a></li>
				<li><a href="#wudao" class="aa">舞蹈</a><a href="#wudao" class="bb">舞蹈</a></li>
				<li><a href="#youxi" class="aa">游戏</a><a href="#youxi" class="bb">游戏</a></li>
				<li><a href="#keji" class="aa">科技</a><a href="#keji" class="bb">科技</a></li>
				<li><a href="#shuma" class="aa">数码</a><a href="#shuma" class="bb">数码</a></li>
				<li><a href="#shenghuo" class="aa">生活</a><a href="#shenghuo" class="bb">生活</a></li>
				<li><a href="#guichu" class="aa">鬼畜</a><a href="#guichu" class="bb">鬼畜</a></li>
				<li><a href="#shishang" class="aa">时尚</a><a href="#shishang" class="bb">时尚</a></li>
				<li><a href="#guanggao" class="aa">广告</a><a href="#guanggao" class="bb">广告</a></li>
				<li><a href="#yule" class="aa">娱乐</a><a href="#yule" class="bb">娱乐</a></li>
				<li><a href="#zhuanlan" class="aa">专栏</a><a href="#zhuanlan" class="bb">专栏</a></li>
				<li><a href="#dianying" class="aa">电影</a><a href="#dianying" class="bb">电影</a></li>
				<li><a href="#tvju" class="aa">TV剧</a><a href="#tvju" class="bb">TV剧</a></li>
				<li><a href="#yingshi" class="aa">影视</a><a href="#yingshi" class="bb">影视</a></li>
				<li><a href="#jilupian" class="aa">纪录片</a><a href="#jilupian" class="bb">纪录片</a></li>
				<li class="ding-1"></li>
				<li id="toTop-btn" class="ding-2"></li>
      </ul>
        </div> -->
    
       <!-- <el-card class="live-card" > 
           <el-row type="flex" justify="space-between" :gutter="100">
             <el-col :span="1"> <span class="live-number">1</span> </el-col>
             <el-col :span="1">
               <el-avatar :size="45" :src="circleUrl" class="avtars" ></el-avatar>
             </el-col>
             <el-col :span="4">
               <span class="iddd">哔哩哔哩英雄联盟赛事</span> 
               <span class="iddd">[直播] IG vs AG</span>
             </el-col>
             <el-col :span="2">
              <span  class="el-icon-user iddd">281.2万</span>
            </el-col>
           </el-row>
         
         <div></div>
       </el-card> -->
          
    
    
  
  <!-- <el-image v-for=" e in circleUrl" :key="e.circleUrl" :size="43" :src="circleUrl" class="avtars" ></el-image>  -->
   
  <el-card class="tencard">
  <ul > 
    <li v-for="(item,index) in topimg" :key="index" class="ulimg">

      <!-- <div class="liing">
      <el-image
        :src="item.picture" class="elimg"
        ></el-image>
        <br/>
        <div class="font-card">
        <p>{{item.title}}</p>
        <br/>UP   
      </div>
      </div> -->
      <div class="liing">
              <el-image :src="item.picture" class="elimg"></el-image>
              <div class="font-card">
                <p> {{item.title}}</p>
                
              </div>
            </div>
      <!-- <el-image
        :src="item.picture" class="liimg"
        ></el-image> -->
      
        <!-- <p>{{item.title}}</p> -->
      

    </li>
  </ul>
  </el-card>
  
  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>

  <!-- <el-image
    v-for="i in imgUrl" :key="i.imgUrl"
    style="width: 100px; height: 100px"
    :src="imgUrl.imgId"
    ></el-image> -->


  </div>
</template>


<script>

export default {
  data () {
    return {
      imgurl:[

        {id:0,imgid:require('../../assets/css/main-img/center-img4.png')},
        {id:1,imgid:require('../../assets/css/main-img/center-img3.png')},
      ],
      // imagebox:[
      //   {id:0,idView:require('../../assets/css/Image/banner1.jpg')},
      //   {id:1,idView:require('../../assets/css/Image/banner1.png')},
      //   {id:2,idView:require('../../assets/css/Image/banner2.jpg')}
      circleUrl:require('../../assets/css/main-img/center-img4.png'),
      topimg:[
        {
          picture:require('../../assets/css/main-img/center-img2.webp'),
          title:'赛博朋克2077里的地铁真的能坐！体验堪比过山车！'
        },
        {
          picture:require('../../assets/css/Image/ApLOGO.webp'),
          title:'The special event is on Tuesday,April 20,at Apple Park in Cupertino, CA. You canget all the details on Apple.com'
        },
        {
          picture:require('../../assets/css/Image/4.webp'),
          title:'Tom and Jerry'

        },
        {
          picture:require('../../assets/css/Image/amen.webp'),
          title:'ドラえもん'
        },
        {
          picture:require('../../assets/css/Image/2.jpg'),
          title:'名探偵コナン'
        }
      ]
      
      
      // ],
    }
  },
  
  // components:{
  //   lefttile
  // }
  // mothods:{
  //      imgLoad(){
  //                this.$nextTick(()=>{
  //                    this.bannerHeight=this.$refs.bannerHeight[0].height;
  //                    console.log(this.$refs.bannerHeight[0].height);
  //                    // document.getElementsByClassName拿到的是数组并非某一个对象
  //                    var testH=document.getElementById("test-div");
  //                   testH.style.height= this.bannerHeight+"px";
  //              })
  //    }

    
  // },
  // mounted(){
  //    this.imgLoad();
  //           window.addEventListener('resize',() => {
  //               this.bannerHeight=this.$refs.bannerHeight[0].height;
  //               this.imgLoad();
  //           },false)
  // }
}
</script>

<style lang="less" scoped>


*{
  margin: 0;
  padding: 0;
   
}
// 开始
.tencard{
  width: 1150px;
  //height: 250px;
}
.ulimg{
  //display: block;
  float: left;
  list-style: none;
  padding-left:10px;
}
.el-img{
  width: 206px;
  height: 119px;
}

.liimg{
  position: relative;
  right: 20px;
  width: 206px;
  height:119px;
  border-radius: 4px;
  transform: translateY(0px);
  transition: .1s linear;
}
.liimg :hover .font-card{
  transform: translateY(-100px);
}
.font-card{
  position: relative;
  right:20px;
  width: 206px;
  height: 119px;
  top: -125px;
  
  //padding-left: 10px;

  border-radius: 4px;
}

.font-card p{
  font-size:1px;
}
// 结束
.app{
  background-color: rgb(255, 255, 255);
  min-height: 100vh;
  // display: flex;
  align-items: center;
  justify-content: center;
}
.one{
  width: 400px;
  height: 210px;

}
.image {
  width: 206px;
  height: 116px;
}
.blog-post{
  width: min(300px,100%);
  padding: 20px;
  display: flex;
  //justify-content: space-around;
  //flex-wrap: wrap;
  cursor: pointer;

}
.post{
  width: calc(33% - 10px);
  overflow: hidden;
}
.post-1{
  width:calc(33% - 10px);
}
.post-1 .post-content1{
  transform: translateY(-320px);
  background-color: rgba(34, 20, 20, 0.6);
}
.post-img{
  width: 100%;
  height: 304px;
  border-radius: 6px; //圆角属性
  transition: 0.1s ease-in-out;
  //transition: all .2s;
	//transition-delay: 0.01s;
}
.post-img1{
  width: 100%;
  height: 304px;
  border-radius: 6px;

}
// .post-content:hover{
//   margin-top: -10px;
// }
// .post:hover .post-img{
//   transform: translateY(150px);
// }
.post:hover .post-content{
  transform: translateY(-320px);
  background-color: rgba(34, 20, 20, 0.6);
}
.post-content{
  width: 537px;
  height: 304px;
  background-color:rgb(255, 16, 16);
  margin-top: 20px;
  //padding: 10px;
  border-radius: 10px;
  transform: translateY(-60px);
  transition: .3s linear;
  
}
.post-content1{
  width: 425px;
  
  height: 304px;
  background-color:rgb(255, 16, 16);
  margin-top: 20px;
  //padding: 10px;
  border-radius: 10px;
  transform: translateY(-60px);
  transition: .3s linear;
  
}

.post-content p {
  font-size: 16px;
  margin-bottom: 10px;
  color: rgb(255, 255, 255);
}
.ig{
  width: 206px;
  height: 116px;

}
.yincang{
  width: 386px;
	height: 96px;
	position: absolute;
	top: 10 0px;
	color: rgb(189, 32, 32);
	font-size: 12px;
	padding: 10px;
	line-height: 2em;
	transition: all .2s;
	-webkit-transition: all .5s;
  background-color: rgba(0,0,0,.1);
}
ig:hover{
  background-color: rgba(0,0,0,.6);
}

ul li{
  list-style: none;
}

// 固定栏开始
.banner{
	position: fixed;
	width: 56px;
	height: 620px;
	top: 170px;
	right: 172px;
}
.banner .banner-tou{
	position: relative;
	top: -4px;
}
.banner ul{
	position: relative;
	top: -9px;
	left: -1px;
	width: 56px;
	height: 550px;
	background-color: #FFFFFF;
	border: 1px solid #E7E7E7;
	border-radius: 10px;
	padding-top: 6px;
}
.banner ul li{
	text-align: center;
	width: 100%;
	height: 24px;
	transition: all .2s;
	-webkit-transition: all .2s;
	line-height: 24px;
	position: relative;
}
.banner ul li a{
	color: #505050;
	font-size: 12px;
	display: block;
}
.banner ul li:hover{
	background-color: #00A1D6;
}
.banner ul li:hover a{
	color: #FFFFFF;
}
.banner ul .ding-1{
	height: 31px;
	border-top: 1px solid #E7E7E7;
	margin-top: 6px;
	background: url(../../assets/css/Navigation/ding1.png) no-repeat 18px 8px;
}
.banner ul .ding-1:hover{
	background:#00A1D6 url(../../assets/css/Navigation/ding3.png) no-repeat 18px 8px;
}
.banner ul .ding-2{
	height: 31px;
	border-top: 1px solid #E7E7E7;
	border-radius: 0 0 10px 10px ;
	background: url(../../assets/css/Navigation/ding2.png) no-repeat 18px 8px;
}
.banner ul .ding-2:hover{
	background:#00A1D6 url(../../assets/css/Navigation/ding4.png
  ) no-repeat 18px 8px;
}
.banner .banner-div{
	width: 56px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid #E7E7E7;
	background-color: #FFFFFF;
	position: relative;
	top: -1px;
	left: -1px;
	text-align: center;
	padding: 6px 0;
	transition: all .2s;
	-webkit-transition: all .2s;
}
.banner .banner-div a{
	display: block;
	font-size: 12px;
	color: #505050;
}
.banner .banner-div:hover{
	background-color: #00A1D6;
}
.banner .banner-div:hover a{
	color: #FFFFFF;
}
.banner .bb{
	position: absolute;
	width: 56px;
	height: 24px;
	background-color: #00A1D6;
	color: #FFFFFF;
	font-size: 12px;
	text-align: center;
	line-height: 24px;
	z-index: 1;
	top: 0;
	left: 0;
	opacity: 0;
	transition: all .2s;;
	-webkit-transition: all .2s;
	
}
.banner .bb:hover{
	opacity: 1;
}
.image {
  width: 206px;
  height: 116px;
}
.el-header{
  background-color: #e42424;
  width: 100px;
  height: 200px;
}
.el-main{
  width: auto;
  margin-top: -6%;
  //height: 100%;
  background-color: #00A1D6;
}
.el-footer{
  background-color: yellow;
  float: left;
}
//Beta 1
.live-number{
  color: white;
  padding: 2px 6px 2px 6px;
  text-align: center;
  line-height: 20px;
  font-size: 8px;
  background-color: #00a1d6;
  border-radius: 2px;
}

.live-card{
 position: relative;
	
	top: 170px;
	//right: 172px;
  background-color: #1d6ae6;
  width: 320px;
  height: 430px;
  border-radius: 0px;
}
.header{
  
  position: relative;
	width: 320px;
	height: 45px;
	top: 0px;
	left: -21px;
  background-color: wheat;
}
.iddd{
  font-size: 10px;
}














//row布局Css
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>