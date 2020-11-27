<template>
  <div id="app">
    <router-view></router-view>  <!--路由盒子-->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/*删除商品动画效果*/

  .itemRemove {
    overflow: hidden;
    -webkit-animation:removeItem .8s both cubic-bezier(.24,.01,.38,.97);
    animation: removeItem .8s both cubic-bezier(.24,.01,.38,.97)}
  @-webkit-keyframes removeItem{
    0% {
      opacity: 1;
    }
    80%{
      opacity: 0;
    }
    95%{
      margin-top: 0;
      margin-bottom: 0;
      border-top-width: 0;
      border-bottom-width: 0;
      padding-top: 0;
      padding-bottom: 0;
      opacity: 0;
      height: 0;

    }
    100% {
      margin-top: 0;
      margin-bottom: 0;
      border-top-width: 0;
      border-bottom-width: 0;
      padding-top: 0;
      padding-bottom: 0;
      opacity: 0;
      height: 0;
    }
  }
  @keyframes removeItem{
    0% {
      opacity: 1;
    }
    80%{
      opacity: 0;
    }
    95%{
      margin-top: 0;
      margin-bottom: 0;
      border-top-width: 0;
      border-bottom-width: 0;
      padding-top: 0;
      padding-bottom: 0;
      opacity: 0;
      height: 0;
    }
    100% {
      margin-top: 0;
      margin-bottom: 0;
      border-top-width: 0;
      border-bottom-width: 0;
      padding-top: 0;
      padding-bottom: 0;
      opacity: 0;
      height: 0;
    }
  }
</style>
