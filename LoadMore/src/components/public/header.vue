<template>
  <div class="header">
    <ul>
      <li class="headerBtn">
        <slot name="left">
          <a href="javascript:history.go(-1)"><</a>
        </slot>
      </li>
      <li class="headerTxt">{{title}}</li>
      <li class="headerBtn">
        <slot name="right">
          <a href="javascript:;">消息</a>
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"Header",
    props:{
      title:{
        type:String,
        default:"购物车"
      }
    }
  }
</script>

<style>
  .header{
    background: #fff;
    height:44px;
    width:100%;
    position: fixed;
    left:0;
    top:0;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 0 5px #ccc;
    z-index: 9999;
  }
  .header ul{
    height:44px;
    width:100%;
    display: flex;
    line-height:44px;
    text-align: center;
    list-style: none;
  }
  .headerTxt{
    flex:1;
  }
  .headerBtn{
    width:60px;
  }
</style>
