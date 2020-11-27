<template>
  <div class="content">
    <slot>    </slot>
  </div>
</template>

<script>
  export default {
      name:"v-content"
  }
</script>

<style lang="scss" scoped="">
  li{ list-style: none}
  .header ~ .content{
    padding-top:46px;
  }
  .footer ~ .content{
    padding-bottom:50px;
  }
  .sub-header ~ .content{
    padding-top:86px;
  }
</style>
