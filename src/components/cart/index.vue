<template>
  <div class="cart">
      <login-header title="购物车">
        <a href="javascript:history.back(-1)" class="iconfont icon-fanhui icon-his" slot="his" ></a>
        <span class="iconfont icon-gengduo icon-right"  slot="right"></span>
      </login-header>
    <my-cartfooter :cart-list="cartList" @change-selected="changeSelected"></my-cartfooter>
    <my-content>
      <cart-list :cart-list="cartList"></cart-list>
    </my-content>
  </div>
</template>

<script>
  import axios from "axios"
  import qs from "qs"
  import cartFooter from "./cart-footer.vue"
  import cartList from "./cart-list.vue"
  import {mapGetters,mapActions,mapState} from "vuex"

  export default{
      name:"my-cart",
      components:{
          'my-cartfooter':cartFooter,
          'cart-list':cartList
      },
      methods:{
        ...mapActions([
            "cartListData",
            "changeSelected"
        ])
      },
      computed:{
        ...mapGetters([
            "cartList"
        ])
      },
      mounted(){
          this.cartListData()
      }
  }
</script>

<style lang="scss" scoped="">
    a.icon-his{ font-size: .2rem; color: black;}
    .icon-right{ font-size: .3rem; color: black; opacity: 0.5}
</style>
