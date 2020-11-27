<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
      name:"v-content"
  }
</script>

<style>
  .header ~ .content{
    padding-top:45px;
  }
  .footer ~ .content{
    padding-bottom:50px;
  }
  .sub-header ~ .content{
    padding-top:85px;
  }
</style>
