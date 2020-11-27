<template>
  <div class="footer">
    <ul>
      <li v-for="(ele,index) in footerList">
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
        name:"my-footer",
        data(){
            return{
                footerList:[
                  {text:"首页",images:require("../../images/shouy.png"),path:"/home"},
                  {text:"分类",images:require("../../images/fenlei.png"),path:"/class"},
                  {text:"搜索",images:require("../../images/shous.png"),path:"/search"},
                  {text:"购物车",images:require("../../images/gouwuche.png"),path:"/cart"},
                  {text:"登录",images:require("../../images/denglu.png"),path:"/denglu"}
                ]
            }
        }
    }
</script>

<style  rel="stylesheet/scss" lang="scss" scoped="">

  *{margin: 0; padding: 0;}
  li{list-style: none;}
  .footer{ width: 100%; height: 50px; background: #fff; font-size: 0; box-sizing: border-box; border-top: 1px solid #ccc; position: fixed; bottom: 0; left: 0;
    &>ul{ display:flex; justify-content: space-around;
      &>li{ text-align: center; padding-top: 3px;
        a{text-decoration: none}
        img{ width: 25px; height: 25px;}
        p{ font-size: 12px; color: #999;}
      }
    }
  }



</style>
