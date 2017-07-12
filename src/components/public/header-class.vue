<template>
  <div class="header">
    <ul>
      <li class="headerBtn">
        <slot name="left"><a href="javascript:history.go(-1)" class="iconfont"><i>&#xe738;</i></a></slot>
      </li>
      <li class="headerTxt">
        <slot name="center">首页</slot>
      </li>
      <li class="headerBtn">
        <slot name="right"><a href="">消息</a></slot>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"v-header"
  }
</script>

<style lang="scss" scoped="">
  li{ list-style: none}
  .header{
    font-size:0px;
    height:45px;
    position: fixed;
    left:0;
    top:0;
    background: #F8F8F8;
    border-bottom: 1px solid #eee;
    line-height:45px;
    width:100%;
    z-index:999;
    ul{
      display: flex;
      align-items: center;
      text-align:center;
      .headerTxt{
        flex:1;
      }
      .headerBtn{
        width:60px;
      }
    }
  }

</style>
