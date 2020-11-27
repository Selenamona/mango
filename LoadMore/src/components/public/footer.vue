<template>
  <div class="footer">
    <ul>
      <li v-for="(ele,index) in footerList" :key="index">
        <router-link :to="ele.path">
          <div><i class="iconfont">{{ele.icon}}</i></div>
          <div>{{ele.name}}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
  import "@/components/iconfont/iconfont.css"
  export default {
    name:"Footer",
    data(){
        return {
          footerList:[
              {name:"首页",path:"/",icon:"\ue64e"},
              {name:"商城",path:"/list",icon:"\ue612"},
              {name:"购物车",path:"/cart",icon:"\ue600"},
              {name:"我的",path:"/mine",icon:"\ue6a3"}
            ]
        }
    }
  }
</script>

<style scoped="">
  .footer{
    background: #fff;
    height:50px;
    position: fixed;
    bottom:0;
    left:0;
    width:100%;
    z-index: 9999;
  }
  .footer ul{
    display: flex;
    line-height:50px;
    list-style: none;
    justify-content: space-around;
  }
  .footer li{
    text-align: center;
  }
  .footer li a{
    text-decoration: none;
    color:#666;
  }

  .footer li div{
    line-height: 25px;
    height:25px;
  }
</style>
