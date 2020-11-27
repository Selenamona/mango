<template>
    <div class="detailPage">
      <!--商品、详情、评论切换-->
      <mt-navbar v-model="selected" ref="header" class="headerReal">
        <a class="iconfont" href="javascript:history.go(-1)">
          <i>&#xe643;</i>
        </a>
        <mt-tab-item id="goods">商品</mt-tab-item>
        <mt-tab-item id="detail">详情</mt-tab-item>
        <mt-tab-item id="comments">评价</mt-tab-item>
        <a class="iconfont">
          <i>&#xe60b;</i>
        </a>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <!--菜单切换：商品内容区域-->
        <mt-tab-container-item id="goods" class="goods">
            <!-- 轮播图区域-->
            <div class="topPic">
              <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(ele,index) in goodsImg" :key="index">
                  <img :src="ele" alt="">
                </mt-swipe-item>
              </mt-swipe>
            </div>
            <!--子组件：商品详细信息-->
            <v-msg :show="show" :show-loading="showLoading"></v-msg>
        </mt-tab-container-item>
        <!--菜单切换：详情内容区域-->
        <mt-tab-container-item id="detail" class="detail">
         <div v-html="detail" ref="imgRest"></div>
        </mt-tab-container-item>
        <!--菜单切换：评价内容区域-->
        <mt-tab-container-item id="comments">
            <v-comments></v-comments>  <!--子组件：商品评论-->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
</template>

<script>
  import axios from "axios"
  import {mapGetters,mapActions} from "vuex"
  import Comments from "./comments.vue"
  import Msg from "./detailMsg.vue"
  export default {
    name:"Detail",
    data(){
        return {
          goodsID:"",         /*列表页传递过来的id*/
          selected:'goods',    /*菜单切换*/
          show:false,
          showLoading:false
        }
    },
    components:{
        "v-comments":Comments,     /*商品评论组件*/
        "v-msg":Msg                /*轮播图下方信息组件*/
    },
    computed:{
      ...mapGetters([
        "goodsMsg",
        "comments",
        "goodsImg",
        "detail"
        ])
    },
    methods:{
      ...mapActions([
          "getDetailMsg",
          "getComments",
          "getDetail"
      ]),
      /*通过监听滚动事件判断头部的显示隐藏*/
      changeHeader(){
          var scrollTop = document.body.scrollTop;
          var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
          var scrollHeight = document.body.scrollHeight;
          var oHeader = document.querySelector(".headerReal")
          if(scrollTop){
            oHeader.style.display="flex"
          }else{
            oHeader.style.display="none"
          }
         /* console.log("滚动条在Y轴上的滚动距离"+scrollTop)
          console.log("内容可视区域的高度"+clientHeight)
          console.log("内容可视区域的高度加上溢出（滚动）的距离"+scrollHeight)
          scrollTop + clientHeight >= scrollHeight  =>判断滚动条滑动到底部
          */
          if(scrollTop + clientHeight >= scrollHeight-100){
            this.showLoading=true;
            setTimeout(()=>{
              this.getDetail(this.goodsID)
              this.showLoading=false;
              this.show=true;
            },2000)

          }

      }
    },
    mounted(){
      /*列表页传递过来的商品id*/
      this.goodsID = this.$route.params.goodsid
      this.getDetailMsg(this.goodsID)
      /*监听滚动事件*/
      window.addEventListener("scroll",this.changeHeader)
      this.getComments()
    },
    updated(){
      /*当切换到详情、评论，阻止隐藏*/
      if(this.selected == "detail" || this.selected == "comments"){
        window.removeEventListener("scroll",this.changeHeader)
      }else{
        window.addEventListener("scroll",this.changeHeader)
      }
      if(this.selected == "detail"){
        document.body.scrollTop=0;
        this.getDetail(this.goodsID)
      }
    },
    beforeDestroy(){
      window.removeEventListener("scroll",this.changeHeader)
    }
  }
</script>

<style lang="scss">
@import "./style"
</style>
