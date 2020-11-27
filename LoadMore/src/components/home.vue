<template>
  <div class="home">
    <v-header title="首页"></v-header>
    <v-content>
      <mt-button type="default">default</mt-button>
    </v-content>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
