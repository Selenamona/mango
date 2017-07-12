<template>
  <div class="cart-footer">
    <div class="cart-footer-box">
          <span class="cart-footer-box">
            <input type="checkbox" :checked="allSelected" @change="changeSelected({type:'all'})">
          </span>
          <span class="cart-footer-left">确认信息</span>
          <p class="cart-footer-content">
                合计总金额：
              <span>
                ￥ <em>{{cartList.sum}}</em>
              </span>
          </p>
    </div>
  </div>
</template>

<script>
  import {mapActions} from "vuex"

  export default{
    name:"my-cartfooter",
    props:{
      cartList:{
        default:[]
      }
    },
    methods: {
      changeSelected(str){
          this.$emit('change-selected',str)
      }
    }
  }
</script>

<style lang="scss" scoped="">
  .cart-footer{width: 100%; height: 44px; box-sizing: border-box; background: rgba(255,255,255,0.8);
    position: fixed; bottom: 0; left: 0; z-index: 1111;
    .cart-footer-box{ height: 44px;  width: 100%; overflow: hidden;
        .cart-footer-content{ display: inline-block; font-size: .13rem; float: right; line-height: 44px; padding-right:.2rem ;
            span{color: #DB4453;
              em{font-size: .22rem; color:#DB4453; font-weight: bold}
            }
        }
        .cart-footer-left{ display:inline-block;width: .93rem;  float: right;background: #ED5564;
          font-size: 18px; font-weight: 500; color: #fff; text-align: center; line-height: 44px; }
    }
  }

  .cart-footer-box{ height: 100%;
    input{ float:left; margin:12px; width: .2rem; height: .2rem}
  }
</style>
