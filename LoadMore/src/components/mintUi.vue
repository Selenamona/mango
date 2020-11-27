<template>
  <div class="mint">
    <!--头部-->
    <mt-header title="Mint UI">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right" @click="bounceOut"></mt-button>
    </mt-header>

    <!--顶部选项卡-->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'内容 ' + n" >{{n}}</mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" >{{n}}</mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" >{{n}}</mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <!--底部选项卡-->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/logo.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
    <!--tab-container-->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="外卖">
        <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="订单">
        <div class="pic">
          <!--轮播图-->
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <img  src="../assets/6.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
              <img  src="../assets/7.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
              <img  src="../assets/8.jpg" alt="">
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
        <mt-button type="default" @click="fn1">消息提示框</mt-button>
        <br/>
        <mt-button type="primary" @click="fn2">加载提示框</mt-button>
        <br/>
        <mt-button type="danger" @click="fn3">弹出式提示框</mt-button>
        <br/>
        <mt-button size="small" @click="fn4">Action</mt-button>
        <!--Action sheet-->
        <mt-actionsheet
          :actions="actions"
          v-model="sheetVisible">
        </mt-actionsheet>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <mt-cell v-for="n in 9" title="tab-container 4"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>

    <!--弹出框-->
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade">
    </mt-popup>
  </div>

</template>

<script>
  import {MessageBox} from 'mint-ui'
  export default {
      name:"mint",
      data(){
          return {
            selected:"1",
            popupVisible:false,
            sheetVisible:false,
            actions:[{name:"分享到QQ",method:()=>{
                    console.log("qq")
              }},{name:"分享到微信",method:()=>{
              console.log("微信")
            }},{name:"分享到微博",method:()=>{
              console.log("微博")
            }}]
          }
      },
      methods:{
        bounceOut(){
            this.popupVisible = true;
        },
        fn1(){
          /*<!--消息提示框-->*/
          this.$toast({
            message: '操作成功',
            iconClass: 'icon icon-success'
          });

         /* Toast并不是一个全局变量,需要引入import { Toast } from 'mint-ui'
          或者有提供一个实例上的方法，通过 vm.$toast 调用*/

        },
        fn2(){
          /*<!--加载提示框-->*/
          this.$indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
          });
        },
        fn3(){
          /*<!--弹出式提示框-->*/
          MessageBox({
            title: '提示',
            message: '确定执行此操作?',
            showCancelButton: true
          });
        },
        fn4(){
          this.sheetVisible = true;
        }
      }
  }
</script>

<style>
  .pic{
    height:300px;
  }
  .pic img{
    width:100%;
    height:100%;
  }
</style>

