<template>

  <div class="app">

    <a href="" class="you-2">联系客服</a>
    <el-container>
      <img src="../assets/css/Image/fm.png" alt="" class="fm">
    
      <el-header>

        <div class="topp" shadow="never">
          
				
        
          <el-row :gutter="30" type="flex" justify="start" class="tp-ringht">
            <el-col :span="0.2" class="row">
              <el-link icon="el-icon-eleme" :underline="false">主站</el-link>
            </el-col>
            <el-col :span="0.2" class="row">
              <el-link :underline="false">番剧</el-link>
            </el-col>
            <el-col :span="0.2" class="row">
              <el-link :underline="false">游戏中心</el-link>
            </el-col>
            <el-col :span="0.2" class="row">
              <el-link :underline="false">直播</el-link>
            </el-col>
            <el-col :span="0.2" class="row">
              <el-link :underline="false">会员购</el-link>
            </el-col>
            <el-col :span="0.2" class="row">
              <el-link :underline="false">漫画</el-link>
            </el-col>
            <el-col :span="0.1" class="row">
              <el-link :underline="false">赛事</el-link>
            </el-col>
            <el-col :span="2" class="row">
              <el-link icon="el-icon-mobile" :underline="false">下载APP</el-link>
            </el-col>
          </el-row>
          <el-row class="tp-input" type="flex" justify="center">
            <el-col :span="7">
              <el-input placeholder="高中男生在街上跳gay舞（＾∀＾●）ﾉｼ" clearable>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10" class="tp-left" type="flex" justify="end">
            <el-col :span="0.2" class="row">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </el-col>
            <el-col :span="0.2" class="row">
              <el-link :underline="false">大会员</el-link>
            </el-col>
            <el-col :span="0.2" class="row">

              <el-link :underline="false">
                <el-badge is-dot>消息</el-badge>
              </el-link>

            </el-col>
            <el-col :span="0.2" class="row">
              <el-link :underline="false">动态</el-link>
            </el-col>
            <el-col :span="0.2" class="row">
              <el-link :underline="false">收藏</el-link>
            </el-col>
            <el-col :span="0.2" class="row">
              <el-link :underline="false">历史</el-link>
            </el-col>
            <el-col :span="0.2" class="row">
              <el-link :underline="false">创作中心</el-link>
            </el-col>
            <el-col :span="2" class="row">
              <el-button class="tougao" @click="out">投稿</el-button>
            </el-col>

          </el-row>



          <div class="tp-img">
            <img src="../assets/css/Image/bilibili.png" alt="" class="logo">
          </div>


        </div>

      </el-header>

      <!-- 中间图标 -->
      <el-main>

        <el-card class="main" shadow="never">
          <el-card class="ztubiao" shadow="never">
            <el-row :gutter="20" align="bottom">
              <el-col :span="5" class="mbutton">
                <el-tooltip effect="light" content="首页" placement="bottom">
                  <el-button type="danger" circle icon="el-icon-s-home"></el-button>
                </el-tooltip>
                <div class="sy">
                  <a href="">首页</a>
                </div>
              </el-col>

              <el-col :span="5">
                <el-tooltip effect="light" content="动态" placement="bottom">
                  <el-button type="success" circle icon="el-icon-wind-power"></el-button>
                </el-tooltip>
                <div class="dt">
                  <a href="">动态</a>
                </div>
              </el-col>

              <el-col :span="5">
                <el-tooltip effect="light" content="热门" placement="bottom">
                  <el-button type="warning" circle icon="el-icon-s-promotion"></el-button>
                </el-tooltip>
                <div class="dt">
                  <a href="">热门</a>
                </div>
              </el-col>

              <el-col :span="5">
                <el-tooltip effect="light" content="频道" placement="bottom">
                  <el-button type="primary" circle icon="el-icon-s-marketing"></el-button>
                </el-tooltip>
                <div class="pt">
                  <a href="">频道</a>
                </div>
              </el-col>
            </el-row>
          </el-card>
          <!-- 文字链接区域 -->
          <div class="text" shadow="never">
            <div class="longttext">
              <a href="#">动画</a>
              <span>999+</span>
              <a href="#">音乐</a>
              <span>999+</span>
              <a href="#">舞蹈</a>
              <span>999+</span>
              <a href="#">知识</a>
              <span>999+</span>
              <a href="#">时尚</a>
              <span>999+</span>
              <a href="#">娱乐</a>
              <span>999+</span>
              <a href="#">放映厅</a>
              <span>999+</span>
              <a href="#">美食</a>
              <span>999+</span>
              <a href="#">单机游戏</a>
              <span>999+</span>

              <div>
                <a href="#">番剧</a>
                <span>99+</span>
                <a href="#">国创</a>
                <span>999+</span>
                <a href="#">游戏</a>
                <span>999+</span>
                <a href="#">数码</a>
                <span>999+</span>
                <a href="#">鬼畜</a>
                <span>999+</span>
                <a href="#">资讯</a>
                <span>999+</span>
                <a href="#">影视</a>
                <span>999+</span>
                <el-dropdown>
                  <span class="el-dropdown-link">
                    更多<i class="el-icon-arrow-down "></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>搞笑</el-dropdown-item>
                    <el-dropdown-item>美食</el-dropdown-item>
                    <el-dropdown-item>动物圈子</el-dropdown-item>
                    <el-dropdown-item>单机游戏</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </div>

          <el-card class="ytubiao">
            <el-row :gutter="30">
              <el-col :span="6">
                <el-link icon="el-icon-date" class="font">专栏</el-link>
              </el-col>
              <el-col :span="8">
                <el-link icon="el-icon-date" class="font">活动</el-link>
              </el-col>
              <el-col :span="6">
                <el-link icon="el-icon-date" class="font">小黑屋</el-link>
              </el-col>

              <el-row :gutter="10">
                <el-col :span="6">
                  <el-link icon="el-icon-date" class="font">直播</el-link>
                </el-col>
                <el-col :span="6">
                  <el-link icon="el-icon-date" class="font">课堂</el-link>
                </el-col>
                <el-col :span="6">
                  <el-link class="font">音乐PLUS</el-link>
                </el-col>
              </el-row>

            </el-row>
          </el-card>
          <div class="zuo-2">
            <i class="el-icon-refresh bilifont"></i>
            <span>换一换</span>
            <!-- <a href="" class="el-icon-refresh zuo-2">换一换</a> -->
          </div>


          <!-- 轮播图 -->
          <div class="carda">
            <el-carousel>
              <el-carousel-item v-for="item in imagebox" :key="item.id">
                <img :src="item.idView">
              </el-carousel-item>
            </el-carousel>
          </div>



          <div class="ig">
            <tenimg></tenimg>
            <!-- <div class="img0">
              <el-image :src="require('../assets/css/Image/1.jpg')" class="img1"></el-image>

              <div class="yincang">
                <p>赛博朋克2077里的地铁真的能坐！体验堪比过山车！</p>
                <p><span>UP</span>逗川kshadow</p>
                <p>9.1万播放</p>
              </div>
            </div>

            <div class="img0">
              <el-image :src="require('../assets/css/Image/3.webp')" class="img1"></el-image>
              <div class="yincang">
                <p>苹果三月发表会确定延期为4月,<br/>库克不讲武德发布iphone13</p>
                <p><span>UP</span>逗川kshadow</p>
                <p>9.1万播放</p>
              </div>
            </div>

            <div class="img0">
              <el-image :src="require('../assets/css/Image/2.jpg')" class="img1"></el-image>
              <div class="yincang">
                <p>赛博朋克20 77里的地铁真的能坐！体验堪比过山车！</p>
                <p><span>UP</span>逗川kshadow</p>
                <p>9.1万播放</p>
              </div>
            </div>
            

            <div class="img0">
              <el-image :src="require('../assets/css/Image/4.webp')" class="img1"></el-image>
              <div class="yincang">
                <p>赛博朋克2077里的地铁真的能坐！体验堪比过山车！</p>
                <p><span>UP</span>逗川kshadow</p>
                <p>9.1万播放</p>
              </div>
            </div>

            <div class="img0">
              <img src="../assets/css/Image/banner4.jpg" class="img1">
              <div class="yincang">
                <p>赛博朋克2077里的地铁真的能坐！体验堪比过山车！</p>
                <p><span>UP</span>逗川kshadow</p>
                <p>9.1万播放</p>
              </div>
            </div> -->
            <!-- <el-card class="beta-card">
              <div class="di2">
              <ul>
              <li v-for=" (i,index) in tenimg" :key="index">
                <el-image :src="i.picture">11</el-image>
                
                <a>{{i.name}}</a>
                <a>{{i.numberId}}</a>
              </li>
            </ul>
            </div>
            </el-card> -->
            


            <!-- <div class="di2">
              <el-image :src="require('../assets/css/Image/4.webp')" class="img1"></el-image>
              <div class="yincang">
                <p class="pw">2021年9月iphone13发布啦,中国大陆首发6000起步</p>  
                <p><a>UP</a>逗川kshadow</p>
                <p>9.1万播放</p>
              </div>
            </div>

            <div class="di3">
              <el-image :src="require('../assets/css/Image/4.webp')" class="img1"></el-image>
              <div class="yincang">
                <p>2021年9月iphone13发布啦,中国大陆首发6000起步</p>
                <p><span>UP</span>逗川kshadow</p>
                <p>9.1万播放</p>
              </div>
            </div>

            <div class="di4">
              <el-image :src="require('../assets/css/Image/4.webp')" class="img1"></el-image>
              <div class="yincang">
                <p>2021年9月iphone13发布啦,中国大陆首发6000起步</p>

                <p><span>UP</span>逗川kshadow</p>
                <p>9.1万播放</p>
              </div>
            </div>

            <div class="di4">
              <el-image :src="require('../assets/css/Image/4.webp')" class="img1"></el-image>
              <div class="yincang">
                <p>2021年9月iphone13发布啦,中国大陆首发6000起步</p>
                <p><span>UP</span>逗川kshadow</p>
                <p>9.1万播放</p>
              </div>
            </div>

            <div class="di4">
              <el-image :src="require('../assets/css/Image/b8.webp')" class="img1"></el-image>
              <div class="yincang">
                <p>2021年9月iphone13发布啦,中国大陆首发6000起步</p>
                <p><span>UP</span>逗川kshadow</p>
                <p>9.1万播放</p>
              </div>
            </div> -->



          </div>

          <div class="main-top">
            <!-- <img src="../assets/css/Image/c1.png" class="zj-img"> -->
            <p href="" class="main-font">推广
              <img src="../assets/css/Image/d1.png" alt="" class="top-img">
              <a href="" class="small-logo">异世相遇,尽享美味</a>
            </p>


          </div>
          <div class="top-button">
            <el-button class="look-button"> 观看列表 </el-button>
          </div>
          <div class="zj">
            <div class="zj-main">
              <ul style="list-style:none">
                <li>
                  <a href="">
                    <el-image class="img1" :src="require('../assets/css/Image/main-top-img5.webp')"></el-image>
                    <p><span>广告</span>《明日方舟》全新EP – Zone 10发布</p>
                  </a>

                </li>

                <li>
                  <a href="">
                    <el-image class="img1" :src="require('../assets/css/Image/main-top-img6.webp')"></el-image>
                    <p><span>汽车</span>Ferrari-LaFerrari</p>

                  </a>

                </li>

                <li>
                  <a href="">
                    <el-image class="img1" :src="require('../assets/css/Image/main-top-img9.webp')"></el-image>
                    <p><span>广告</span>《明日方舟》全新EP – Zone 10发布</p>
                  </a>

                </li>

                <li>
                  <a href="">
                    <el-image class="img1" :src="require('../assets/css/Image/main-top-img4.jpg')"></el-image>
                    <p><span>广告</span> 4月苹果新品发布会</p>
                  </a>

                </li>


              </ul>
              
            
            
            </div>
            
           

            <div class="left-img">
              <el-image style="width: 320px; height: 185px" :src="require('../assets/css/Image/main-top-img7.png')">
              </el-image>

            </div>

          </div>

          <div class="main-center">
            <div class="center-top">
              <p href="">正在直播
                <a href="" class="center-font">当前共有 5680 个在线直播</a>
              </p>
            </div>
            <div class="center-button">
              <el-button type="info" class="center-btn" >换一换</el-button>
              <el-button type="info" class="center-btn">更多 ></el-button>
            </div>


            <div class="img-center">
              <div class="center-img">
                <ul id="main-nav" style="list-style:none">
                  <li>
                    <a href="">
                      <el-image class="img1" :src="require('../assets/css/main-img/center-img1.webp')"></el-image>
                      <p><span>广告</span>《明日方舟》全新EP – Zone 10发布</p>
                    </a>

                  </li>

                  <li>
                    <a href="">
                      <el-image class="img1" :src="require('../assets/css/main-img/center-img2.webp')"></el-image>
                      <p><span>广告</span>《明日方舟》全新EP – Zone 10发布</p>

                    </a>

                  </li>

                  <li>
                    <a href="">
                      <el-image class="img1" :src="require('../assets/css/main-img/center-img6.webp')"></el-image>
                      <p><span>广告</span>《明日方舟》全新EP – Zone 10发布</p>
                    </a>

                  </li>

                  <li>
                    <a href="">
                      <el-image class="img1" :src="require('../assets/css/main-img/center-img5.jpg')"></el-image>
                      <p><span>广告</span> 4月苹果新品发布会</p>
                    </a>

                  </li>
                </ul>
                <!-- 第二行直播 -->
              </div>
              <div class="center-imgg">
                <ul style="list-style:none">
                  <li>
                    <a href="">
                      <el-image class="img1" :src="require('../assets/css/main-img/center-img1.webp')"></el-image>
                      <p><span>广告</span>《明日方舟》全新EP – Zone 10发布</p>
                    </a>

                  </li>

                  <li>
                    <a href="">
                      <el-image class="img1" :src="require('../assets/css/main-img/center-img4.png')"></el-image>
                      <p><span>广告</span>《明日方舟》全新EP – Zone 10发布</p>

                    </a>

                  </li>

                  <li>
                    <a href="">
                      <el-image class="img1" :src="require('../assets/css/main-img/center-img10.webp')"></el-image>
                      <p><span>广告</span>《明日方舟》全新EP – Zone 10发布</p>
                    </a>

                  </li>

                  <li>
                    <a href="">
                      <el-image class="img1" :src="require('../assets/css/main-img/center-img9.webp')"></el-image>
                      <p><span>广告</span> 4月苹果新品发布会</p>
                    </a>
                  </li>
                </ul>

              </div>
              
            </div>
            <div class="center-left">
              <el-tabs v-model="activeName">
                <el-tab-pane label="直播排行" name="first">
                  <!-- 直播子菜单选项 -->
                  <div class="live-show">
                    
                    
                     <lefttile></lefttile>
                   
                    
                    
                  </div>
                </el-tab-pane>
                <el-tab-pane label="关注的主播" name="second"><span class="tab-font">没有数据(-_-#)</span></el-tab-pane>
                <el-tab-pane label="为您推荐" name="third">
                  <el-carousel>
                    <el-carousel-item v-for="itemm in mainimg" :key="itemm.id">
                      <img :src="itemm.idView">
                    </el-carousel-item>
                  </el-carousel>

                </el-tab-pane>

              </el-tabs>
            </div>
          </div>

        </el-card>



      </el-main>


      <el-footer>Footer
        <!-- <el-backtop  :botton="40"></el-backtop> -->
        <div class="banner">
          <img src="../assets/css/Navigation/tou.png" class="banner-tou" />
          <ul id="banner" style="list-style:none">
            <li class="index-tabs"><a href="#zhibo" class="aa">直播</a><a href="#zhibo" class="bb">直播</a></li>
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
          
        </div>
        
        <el-card> 


          <div class="footer-top">
            <div class="footer-top-1">
              <h3>bilibili</h3>
              <ul>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">加入我们</a></li>
                <li><a href="#">bilibili认证</a></li>
                <li><a href="#">联系我们</a></li>
                <li><a href="#">友情链接</a></li>

              </ul>
            </div>
            <div class="footer-top-2">
              <h3>传送门</h3>
              <ul>
                <li><a href="#">会员中心</a></li>
                <li><a href="#">帮助中心</a></li>
                <li><a href="#">侵权申诉</a></li>
                <li><a href="#">壁纸站</a></li>
                <li><a href="#">高级弹幕</a></li>
              </ul>
            </div>
          </div>
        </el-card>









      </el-footer>


    </el-container>
     
  </div>
  
</template>

<script>
import lefttile from '@/components/Left-title/left-tile'
import tenimg from '@/components/Left-title/tenimg'
  export default {
    data() {  
      return {
        imagebox: [{
            id: 0,
            idView: require('../assets/css/Image/z1.jpg')
          },
          {
            id: 1,
            idView: require('../assets/css/Image/z2.jpg')
          },
          {
            id: 2,
            idView: require('../assets/css/Image/z3.jpg')
          },
          {
            id: 3,
            idView: require('../assets/css/Image/z4.png')

          },


        ],
        mainimg: [{
            id: 0,
            idView: require('../assets/css/Image/main-top-img10.jpg'),
            title:'赛博朋克2077里的地铁真的能坐！体验堪比过山车！'
          },
          {
            id: 1,
            idView: require('../assets/css/Image/main.webp'),
            
          },
        ],
        tenimg:[
          {
            
            picture:require('../assets/css/main-img/center-img8.webp'),
            name:'4月Aplle春季发布会',
            numberId:'库克'
          },
          {
            picture:require('../assets/css/Image/4.webp'),
            name:'iphon14',
            numberId:'SIDIFEN',

          } 
        ],
    
        activeName: 'first',
        circleUrl:require('../assets/css/main-img/center-img1.webp')
       


      }
    },
    components:{
      lefttile,
      tenimg
    },

    methods: {
      out() {
        this.$router.push('./Welcome')
      },
      //     setSize(){
      //       //this.bannerHeight = 400 /1920 * this.screenWith
      //     },
      //     imgLoad(){

      //               this.$nextTick(()=>{
      //                   this.bannerHeight=this.$refs.bannerHeight[0].height;
      //                   console.log(this.$refs.bannerHeight[0].height);
      //                    // document.getElementsByClassName拿到的是数组并非某一个对象
      //                   var testH=document.getElementById("test-div");
      //                   testH.style.height= this.bannerHeight+"px";
      //               })
      //   },
      
      
    }    
  // mounted(){
  //               // this.imgLoad();
  //               // window.addEventListener('resize',() => {
  //               //     this.bannerHeight=this.$refs.bannerHeight[0].height;
  //               //     this.imgLoad();
  //               // },false)
  // }

  }
</script>



<style lang="less" scoped> 
  // ul li{
  //   list-style: none;
  // }
  // ul #banner{

  // }
  // 导航栏样式
  .beta-card{
    position: relative;
    width: 1150px;  
    background-color: #00A1D6;
    left: -1200px;
  }
  .banner {
    // position: relative;
    position: fixed;
    width: 56px;
    height: 620px;
    top: 170px;
    right: 172px;

  }

  .banner .banner-tou {
    position: relative;
    top: 245px;
    left: 90px;
    //margin-left: 60%;
  }

  .banner ul {
    position: relative;
    top: 220px;
    left: 90px;
    width: 56px;
    height: 550px;
    background-color: white;
    border: 1px solid #E7E7E7;
    border-radius: 10px;
    padding-top: 6px;
    padding-left: unset;

  }

  .banner ul li {
    text-align: center;
    width: 100%;
    height: 24px;
    transition: all .2s;
    -webkit-transition: all .2s;
    line-height: 24px;
    position: relative;
    padding: 6px 0px 0px -40px;
  }

  .banner ul li a {
    color: #505050;
    font-size: 12px;
    display: block;
  }

  .banner ul li:hover {
    background-color: #00A1D6;
  }

  .banner ul li:hover a {
    color: #FFFFFF;
  }

  .banner ul .ding-1 {
    height: 31px;
    border-top: 1px solid #E7E7E7;
    margin-top: 6px;
    background: url(../assets/css/Navigation/ding1.png) no-repeat 18px 8px;
  }

  .banner ul .ding-1:hover {
    background: #00A1D6 url(../assets/css/Navigation/ding3.png) no-repeat 18px 8px;
  }

  .banner ul .ding-2 {
    height: 31px;
    border-top: 1px solid #E7E7E7;
    border-radius: 0 0 10px 10px;
    background: url(../assets/css/Navigation/ding2.png) no-repeat 18px 8px;
  }

  .banner ul .ding-2:hover {
    background: #00A1D6 url(../assets/css/Navigation/ding4.png
) no-repeat 18px 8px;
  }

  .banner .banner-div {
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

  .banner .banner-div a {
    display: block;
    font-size: 12px;
    color: #505050;
  }

  .banner .banner-div:hover {
    background-color: #00A1D6;
  }

  .banner .banner-div:hover a {
    color: #FFFFFF;
  }

  .banner .bb {
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
    transition: all .2s;
    ;
    -webkit-transition: all .2s;

  }

  .banner .bb:hover {
    opacity: 1;
  }

  .image {
    width: 206px;
    height: 116px;
  }






























  //顶部布局
  // 定义全局布局,不随着浏览器缩放而进行变化
  //background-image: url('../assets/css/Image/fm.png');

  .el-container {
    width: 1800px;
  }

  .el-header {
    background-color: #ffffff;

  }

  .el-main {
    width: auto;
    margin-top: -6%;
    //height: 100%;
  }

  

  a {
    font-size: 10px;
    text-decoration: none;
    color: black;
  }

  .row {
    margin-top: -1%;

  }

  .logo {
    display: flex;
    margin-left: 10%;
    margin-top: 3%;

  }

  .mbutton {

    margin-left: 10.3%;

  }

  .tinput {
    margin-left: 8%;
  }

  .huandeng {
    width: 400px;
    background-color: #ff5c7c;

  }

  .el-card {
    border-radius: 4px;
  }

  // 投稿按钮
  .tougao {


    //margin-top:0.7%;
    //margin-left: 95%;
    width: 120px;
    height: 40px;
    background-color: #fb7299;
    color: white;


  }

  // 首页按钮
  .home {
    background-color: #ff5c7c;
  }

  // 文字方向
  .afont {
    display: inline-table;
    font-size: 13px;
    margin-left: 120px;
    margin-top: 5px;


  }

  .el-input {
    margin-top: 2%;

  }

  .fm {
    width: 1900px;
  }

  // 轮播图
  .main {
    // width: 1800px;
    margin-top: 2.5%;
    // height: 1200px;

  }

  .nav {
    background-color: #00A1D6;
  }

  .carda {
    width: 550px;
    height: 245px;
    //margin-top: 50px;//暂时设定.return
    margin-left: 5%;
    //background-color: #ff5c7c;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1) //添加阴影


  }

  .el-carousel {
    border-radius: 4px;

  }

  .el-image {
    border-radius: 2px;
    //box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }

  // 左边边图标
  .ztubiao {
    width: 300px;
    height: 100px;
    margin-left: 5%;
    //background-color: #464243;
  }

  // 右边图标文字位置
  .sy {
    //background-color: #fb7299;
    margin-left: 17%; //首页
  }

  .dt {
    margin-left: 15%; //动态
  }

  .rm {
    margin-left: 15%; //热门
  }

  .pt {
    margin-left: 15%; //频道
  }

  .text {
    width: 1020px; //文字宽度
    height: 100px;
    margin-left: 23%;
    margin-top: -5.5%;
    //background-color: rgb(167, 7, 7);

  }

  .topp {
    //background: url(../assets/css/Image/fm.png) no-repeat center;
    width: 1800px;
    height: 200px;
    float: left;
    margin-top: -8%;
    // display: flex;

  }

  span {
    font-size: 1px;
    letter-spacing: 1px; //文字间距


    background-color: rgba(236, 10, 10, 0);
  }

  .longttext {
    //position: fixed;
    padding-top: 2%;
    margin-left: 10px;
    letter-spacing: 10px;
    //margin-left: 7%;
    line-height: 20px;
    padding-left: 30px;
    background-color: white;

  }

  .longttext .a {
    color: black;
  }

  .ytubiao {
    //float: left;
    width: 300px; //右边图标
    height: 100px;
    margin-left: 75%;
    margin-top: -5.5%;

  }

  .el-dropdown-link {
    cursor: pointer; //更多的文字颜色
    color: #020202;
    margin-left: 30px;

  }

  .el-icon-arrow-down {
    font-size: 7px;
  }

  .el-aside {
    background-color: red;
  }


  .tp-img {
    //height: 200px;
    width: 1919px;
    margin-top: -3%;
    margin-right: 10%;
  }

  .tp-input {
    margin-top: -2%;
  }

  .tp-left {
    margin-top: -1%;
    margin-left: 10%;
  }

  .el-badge {
    margin-top: 2%;

  }

  .el-link {
    color: white;
  }

  .font {
    color: #020202;
  }

  .img0 {
    margin-left: 0.3%;
    margin-top: 0.2%;
  }

  .img1 {
    width: 206px;
    height: 116px;
    border-radius: 4px;
  }

  .di2 {
    width: 206px;
    height: 116px;
    margin-left: -62.7%;
    margin-top: 7.5%;
  }

  .di3 {
    margin-top: 7.5%;
    margin-left: 0.3%;
  }

  .di4 {
    margin-top: 7.5%;
    margin-left: 0.3%
    
  }

  .zj {
    //margin-top: 5%;
    width: 1700px;
    height: 230px;
    margin-left: 5%;
    //background-color: #772323;

  }

  .zj-img {
    margin-top: 0.2%;
    margin-left: 1%;

  }

  .zj-main {
    //position: absolute;
    //1310*305 tudouchaomalingshu
    width: 1300px;
    height: 305px;
    //background-color: #fb7299;
    margin-left: -6%;


  }

  .ig {
    float: left;
    padding: 0px;
    margin: 0px;
    width: 1700px;
    height: 260px;
    background-color: rgba(255, 0, 0, 0);
    margin-left: 37.3%;
    margin-top: -14.3%;
    display: flex;
    width: calc(100% - 10px);
    overflow: hidden;
    

  }
  .pw{
    width: 206px;
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

  .di2:hover .yincang {
    transform: translateY(-73.6px);
    background-color: rgba(34, 20, 20, 0.6);
  }

  .di3:hover .yincang {
    transform: translateY(-73.6px);
    background-color: rgba(34, 20, 20, 0.6);
  }

  .di4:hover .yincang {
    transform: translateY(-73.6px);
    background-color: rgba(34, 20, 20, 0.6);

  }

  .main-top {


    width: 1286px;
    height: 36px;
    margin-left: 6%;
    margin-top: 4%;
    background: rgba(0, 0, 0, 0);
    color: #ffffff;
    line-height: 30px;
    font-size: 30px;

  }

  .main-font {
    height: 34px;
    font-size: 20px;
    text-indent: 50px;
    background: url(../assets/css/Image/c1.png) no-repeat 10px;
    margin-bottom: 20px;
    color: black;
    //line-height: 45px;
    //padding-top: -45%;
    // 填写验证规则,输入表单验证测试范围

  }

  .top-img {
    margin-left: 2%;

  }

  //ul li a
  .zj-main ul li a {
    float: left;
    margin-top: 10px;

    margin-left: 7%;
    color: black;


  }

  .center-img ul li a {
    float: left;
    margin-top: 10px;

    margin-left: 7%;
    color: black;


  }

  .center-imgg ul li a {
    float: left;
    margin-top: 10px;

    margin-left: 7%;
    color: black;


  }


  .main-img {

    width: 855px;
    height: 230px;
    background-color: white;

    margin-left: 30px;


  }

  .top-button {
    width: 264px;
    height: 28px;
    margin-left: 82%;
    margin-top: -2%;
  }

  .look-button {
    width: 320px;
    height: 30px;
    background-color: #e9e9e9;
    border-radius: 3px;
    color: black;
    margin-left: -10%;
    border: #bdb5b5 2px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    font-size: 14px Base;

  }

  .left-img {
    margin-left: 76.5%;
    margin-top: -17.7%;
    border: #bdb5b5;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0);

  }

  .small-logo {
    height: 38px;
    font-size: 15px;
    text-indent: 50px;

    margin-bottom: 20px;
    color: black;
  }

  .main-center {
    width: 1700px;
    height: 425 px;
    //background-color: rgb(82, 82, 50);
    margin-left: 5%;
  }

  .zuo-2 {

    background-color: white;
    position: absolute;
    top: 330px;
    right: 130px;
    width: 28px;
    height: 73px;
    border: 1px solid silver;
    border-radius: 3px;
    color: #505050;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7px;
    line-height: 14px;
    cursor: pointer;
  }

  .bilifont {

    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;

  }

  .zuo-2 span {
    display: inline-block;
    font-size: 12px;
    line-height: 15px;
    padding-top: 2px;
    width: 12px;

  }

  .you-2 {
    //display: block;
    position: fixed;
    width: 10px;
    height: 65px;
    top: calc(40% + 84px);
    background-color: white;
    color: #242323;
    box-shadow: 0 3px 7px 0 #b1adad;
    border-radius: 0 2px 2px 0;
    padding: 8px 8px;
    font-size: 13px;
    padding-left: 8px;

  }

  .card-1 {
    width: 50px;
    left: unset;
    background-color: #00A1D6;
  }

  .card-2 {
    position: relative;
    width: 50px;
    right:3px;
    top: -10px;
  }

  .center-top {

    font-size: 20px;
    text-indent: 50px;
    background: url(../assets/css/Image/s7.png) no-repeat 20px;
    margin-bottom: 20px;
    color: black;
    line-height: -20px;
    

  }

  .center-font {
    font-size: 10px;
    color: rgb(85, 83, 83);
    margin-left: 1%;
  }

  .center-button {
    
    width: 175px;
    margin-left: 58.6%;
    margin-top: -3%;
  }

  .center-btn {
    width: 75px;
    height: 23px;
    line-height: 1px;
    border-radius: 0px;
    background-color: rgb(255, 255, 255);
    color: rgb(59, 59, 59);
    font-size: 12px;
  }

  .img-center {
    width: 1323px;
    height: 130px;
    font-size: 8px;
    margin-top: 0.2%;
  }

  .center-img {
    width: 1300px;
    height: 305px;
    margin-left: -7.5%;


  }

  .center-imgg {
    width: 1300px;
    height: 305px;
    margin-left: -7.5%;
    margin-top: -7%;
  }

  .center-left {
    width: 320px;
    height: 456px;
    margin-left: 76%;
    margin-top: -10.4%;
    
  }

  .tab-font {
    float: left;
    margin-left: 24%;
    font-size: 20px;
    color: #b8b8b8;
  }

  .live-show {
    width: 320px;
    //height: 456px;
    //background-color: #fb7299;
    color: black;
    font-size: 12px;
  }
  .show-username{
    line-height: 18px;
    color: #00a1d6;
    font-size: 12px;
  }
  .live-numbers {
    position: relative;
    color: white;
    background-color:yellow;
  
  

  }
  .show-number{
    position: relative;
    width:59px;
    left:93px;
    top:3px;
    color: #999;
  }
  .live-number {
    position:relative;
    color: white;
    right:14px;
    padding: 1px 4.5px 1px 4.5px;
    text-align: center;
    line-height: 20px;
    background-color: #00a1d6;
    border-radius: 2px;
  }

 


  .live-card {
    border-radius: 0px;
    width: 320px;
    height: 60px;
   
  }

  


  .live-show el-row el-cow {
    color: black;
  }
  .card-3{
    position: relative;
    width: 100px;
    right: 12px;
    top:-21px;
    font-size: 12px;
  
  }

  .footer-top {
    float: left;
    height: 136px;
    width: 1200px;
    margin: 0px auto;
    background-color: #df4c4c;

  }

  .footer-top .footer-top-1 {
    width: 435px;
    height: 100%;
    float: left;
    background-color: #a5a5a5;

  }

  .el-footer .footer-top .footer-top-1 h3 {
    font-size: 15px;
    color: #d8d8d8;

  }

  .el-footer .footer-top .footer-top-1 ul {
    width: 394px;
    height: 65px;
    margin-top: 25px;
  }

  .el-footer .footer-top .footer-top-1 ul li {
    height: 32px;
    float: left;
    padding-right: 54px;
    line-height: 32px;
    list-style: none;
  }

  .el-footer .footer-top .footer-top-1 ul li a {
    color: #020202;
    font-size: 14px;
    transition: all 0.2s;
    -webkit-transition: all 0.2s;

  }

  .el-footer .footer-top .footer-top-1 ul li:hover {
    color: #00a1d6;
  }

  .el-footer .footer-top .footer-top-2 {
    width: 436px;
    height: 100%;
    border-left: 1px solid #EEEEEE;
    border-right: 1px solid #EEEEEE;
    float: left;
    padding-left: 40px;
    background-color: yellow;
  }

  .el-footer .footer-top .footer-top-2 h3 {
    color: #999999;
    font-size: 16px;
  }

  .el-footer .footer-top .footer-top-2 ul {
    width: 394px;
    height: 96px;
    margin-top: 15px;
  }

  .el-footer .footer-top .footer-top-2 ul li {
    height: 32px;
    width: 118px;
    float: left;
    line-height: 32px;
    list-style: none;
  }

  .el-footer .footer-top .footer-top-2 ul li a {
    color: black;
    font-size: 14px;
  }

  .el-footer .footer-top .footer-top-2 ul li:hover a {
    color: #00A1D6;
  }
  .whiteboard{
    position: relative;
    background-color: white;
    left: 659px;
    top: -118px;
  }
  .topboard{
    position: relative;
    background-color: white;
    left: 659px;
    top: -275px;
    height: 10px;

  }
</style>