
<!---------九宫格------------->

<template>
  <div class="content-nine">
    <ul>
      <li v-for="(ele,index) in listData" :key="index">
        <router-link :to="ele.path">
          <img :src="ele.images" alt="">
          <p>{{ele.text}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
      name:"my-nine",
      data(){
          return{
              listData:[
                {text:"0元抽奖",images:require("../../images/icon_lotto.png"),path:"javascript:;"},
                {text:"店铺街",images:require("../../images/icon_shop.png"),path:"javascript:;"},
                {text:"每日签到",images:require("../../images/icon_signin.png"),path:"javascript:;"},
                {text:"女王专享",images:require("../../images/icon_groupon.png"),path:"javascript:;"},
                {text:"我的商城",images:require("../../images/icon_user.png"),path:"/mine"},
                {text:"我的订单",images:require("../../images/icon_check.png"),path:"javascript:;"},
                {text:"我的财产",images:require("../../images/icon_wallet.png"),path:"javascript:;"},
                {text:"我的足迹",images:require("../../images/icon_record.png"),path:"/history"},
                {text:"话费充值",images:require("../../images/icon_phone.png"),path:"javascript:;"},
                {text:"积分兑换",images:require("../../images/icon_ integral.png"),path:"javascript:;"}
              ]
          }
      }
  }
</script>

<style lang="scss" scoped="">
  .content-nine{ overflow: hidden;
      li{ float: left; width: 20%; text-align: center; margin: 5px 0; list-style: none;
        img{ width: 40px; padding:0 .18rem;}
        p{ font-size: 12px;}
      }
  }
</style>
