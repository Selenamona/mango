<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
  export default{
      name:"my-content"
  }
</script>

<style lang="scss" scoped="">
  *{ margin: 0; padding: 0}
  li{ list-style: none}
  .content{ padding: 44px 0 50px 0; overflow: hidden; font-size: 16px;}
  .login-header ~ .content{padding:20px 0 0 0 ; overflow: hidden; overflow-y: auto;  }
  .footer ~ .content{}
  .cart-footer ~ .content{width: 100%;
    background: #eff2f5; overflow-x: hidden; padding:0 0 55px 0;}
</style>
