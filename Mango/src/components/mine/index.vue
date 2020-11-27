<!---------我的----------->
<template>
  <div class="mine">
      <div class="mine-top">
          <div class="mine-img">
            <img :src="pMine.userimg_url" alt="" ref="mineimg" v-if="!show">
            <img src="http://www.mango918.com/data/upload/shop/common/default_user_portrait.gif" alt="" v-if="show">
            <img src="http://m.mango918.com/images/pback.png" alt="" class="min-img-img">
            <span class="mine-img-span">V0</span>
            <p class="min-img-name">{{pMine.userID}}</p>
          </div>
        <a href="javascript:history.back(-1)" class="iconfont icon-fanhui icon-a"></a>
        <span class="iconfont icon-gengduo mine-img-icon" @click="iconSpan = !iconSpan"></span>
        <div class="icon-two" v-if="iconSpan">
          <ul>
            <li v-for="(ele,index) in footerList">
                <router-link :to="ele.path">{{ele.text}}</router-link>
            </li>
          </ul>
          <span id="triangle-up"></span>
        </div>
      </div>
  </div>
</template>

<script>
  export default{
      name:"my-mine",
      data(){
          return{
              show:true,
              iconSpan:false,
              footerList:[
                {text:"首页",images:require("../../images/shouy.png"),path:"/home"},
                {text:"分类",images:require("../../images/fenlei.png"),path:"/fenlei"},
                {text:"搜索",images:require("../../images/shous.png"),path:"/shous"},
                {text:"购物车",images:require("../../images/gouwuche.png"),path:"/shop"},
              ]
          }
      },
      computed:{
          pMine(){
                return this.$store.state.loginData
          }
      },
    mounted(){
      /******登录判断有没有数据，默认头像*******/
      this.$store.state.loginData.length==undefined?this.show = false:this.show = true;
    }
  }
</script>

<style lang="scss" scoped="">
  li{ list-style: none;}
  a{ text-decoration: none;color: #fff;}
    .mine-top{ height: 2.64rem; width: 100%;
      background:rgba(234,456,123,0.8);
      animation: bgSize 15s infinite ease-in-out alternate;
    }
    .mine-img{ width: 100%; position:relative; height: 100%; background:url("../../images/member_top.png") no-repeat;
        background-size: 100% 2.64rem;;
      animation: bounce 400ms ease-in;
      img{ border-radius: 100%; width: .86rem; height: .86rem;
        position: absolute; top: 50%; left: 50%; margin:-.8rem 0 0 -.43rem;}
      .min-img-img{ width: 1.1rem; height: 1.1rem; margin:-.91rem 0 0 -.55rem;}
      .min-img-name{ font-size: .2rem; position: absolute; left: 50%; top: 60%; margin-left: -.58rem; color: #fff; font-weight: bold;}
      .mine-img-span{ display: inline-block; width: .18rem; height:.18rem; background: #ED5564;border-radius: 100%;
        position: absolute; left: 53%; top: 37px; color: #fff; font-size:.08rem; line-height: .18rem; text-align: center;
      }
    }
    .mine-img-icon{ position: absolute; top: 0; right: .1rem; font-size: .32rem; display: inline-block; color: #fff;}
    .icon-two{ font-size:.16rem; position: absolute; right: .1rem; top: .5rem; background: rgba(0,0,0,0.3); color: #fff; border-radius: .05rem;;
      li{ padding: .1rem .3rem; border-bottom: 1px solid #fff}
    }
    .icon-a{ position: absolute; top: .1rem; left: .1rem; font-size: .22rem; font-weight: bold; }

  #triangle-up {
    width: 0;
    height: 0;
    border-left: .10rem solid transparent;
    border-right: .10rem solid transparent;
    border-bottom: .13rem solid rgba(0,0,0,0.3);
    position: absolute;
    top: -.13rem;
    right: .1rem;
    z-index: 100;
  }

    /*******坠落弹性**********/
    @keyframes bounce  {
        0%{
          transform:translateY(-57%);
        }
       60%{
          transform:translateY(3%);
        }
      80%{
        transform:translateY(0);
      }
      90%{
        transform:translateY(-3%);
      }
      100%{
        transform:translateY(0);
      }
    }

    /******背景渐变********/
    @keyframes bgSize {
      0% {
        background: rgba(255, 105, 57, 0.5);
      }
      30%{
        background: rgba(255, 250, 99, 0.5);
      }
      60%{
        background: rgba(122, 255, 210, 0.5);
      }
      100% {
        background: rgba(243, 148, 255, 0.5);
      }
    }
</style>
