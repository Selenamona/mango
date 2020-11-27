<template>
  <div class="login">
    <v-header title="登录">
      <a href="#/register" slot="right">注册</a>
    </v-header>
    <v-content>
      <p><span>用户名：</span><input class="txt" type="text"></p>
      <p><span>密码：</span><input class="txt" type="password"></p>
      <p><input class="check" type="checkbox">显示密码</p>
      <p><input class="check" type="checkbox">记住密码</p>
      <button>登录</button>
    </v-content>
  </div>
</template>

<script>
  export default {
      name:"Login"
  }
</script>

<style scoped>
  p{
    width: 100%;
    padding:20px 30px;
    box-sizing: border-box;
  }
  span{
    width:80px;
    display: inline-block;
  }
  .txt{
    height:20px;
    width:65%;
  }
  .check{
    margin-right:10px;
    vertical-align: middle;
  }
  button{
    width:150px;
    height:40px;
    line-height:30px;
    color:#fff;
    background: #f10;
    text-align: center;
    display: block;
    margin:20px auto;
    border: none;
    font-size: 18px;
  }
</style>
