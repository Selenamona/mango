<template>
  <div class="cart">
    <ul class="cart-ul">
      <li v-for="(ele,index) in cartList.cart_list">
          <p class="cart-top">
            <!----全选----->
            <input type="checkbox" :checked="ele.allbtn" @change="changeSelected({type:'arr',index})">
            <img src="../../images/store_b.png" alt="">
            <span>{{ele.store_name}}</span>
          </p>
          <p class="cart-freight">
            <span>免运费</span>
            {{ele.free_freight}}
          </p>
          <div class="cart-div">
              <ul>
                <li v-for="(data,index) in ele.goods">
                  <input type="checkbox" class="cart-checkbxo" :checked="data.selected">
                  <div class="cart-div-img">
                    <img :src="data.goods_image_url" alt="">
                  </div>
                  <div class="cart-div-name">
                      <p class="cart-name">{{data.goods_name}}
                        <img src="../../images/del_b.png" alt="" class="name-img" @click="getDelete(data.cart_id)">
                      </p>
                      <p class="cart-spec">{{data.goods_spec}}</p>
                      <div class="cart-price">
                          <span>¥{{data.goods_price}}</span>
                          <span class="goods-sale"></span>
                          <div class="care-price-div">
                              <span class="minus" @click="cartPast({index,num:data.goods_num*1-1,id:data.cart_id})">-</span>
                              <span>
                                  <input type="text" v-model="data.goods_num" class="cart-div-input">
                              </span>
                              <span class="add" @click="cartPast({index,num:data.goods_num*1+1,id:data.cart_id})">+</span>
                          </div>
                      </div>
                  </div>
                </li>
              </ul>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex'
  import { MessageBox } from 'mint-ui';

  export default{
      name:"cart-list",
      data(){
          return{
            showCancelButton:true
          }
      },
      props:{
          cartList:{
              default:[]
          }
      },
    computed:{
      ...mapGetters([
          "allSelected"
      ])
    },
    methods:{
      ...mapActions([
        "cartPast",
        "getDeletes",
        "changeSelected"
      ]),
      getDelete(id){
        MessageBox.confirm('确定执行此操作?').then(action => {
            this.getDeletes(id)
        });
      }
    }
  }
</script>

<style scoped="" lang="scss">

  .cart-div-name{ font-size:0;}

    .cart-top{ border-bottom: 1px solid #eee; padding: .1rem; font-size: .16rem;
      &>img{ width: .13rem; height: .13rem; padding: 0 .05rem;}
    }
    .cart-freight{border-bottom: 1px solid #eee; font-size: .12rem; padding: .08rem;
      &>span{ background: #ED5564; padding: .02rem .05rem ; border-radius: 5px; color: #fff;}
    }
    .cart-ul{
        &>li{ background:#fff; margin-top: .15rem;}
    }

    .cart-div{ overflow: hidden;
      .cart-checkbxo{ float: left;}
      img{ width: .58rem; height: .58rem; border-radius: 5px;}
      .cart-div-img{ border: 1px solid #eee; width: .68rem; height: .68rem; box-sizing: border-box;float: left; padding: .05rem;border-radius: 5px; margin-right: .05rem;}
      .cart-name{ overflow: hidden; font-size: .13rem; margin-left:.10rem; padding-right: .4rem; position: relative;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        .name-img{ position: absolute; right: .1rem; width: .15rem; height: .15rem; top: 0; opacity: 0.5;}
      }
      .cart-price{ font-size: .13rem; display: inline-block;font-weight: 600;
        &>span{color: #DB4453;}
      }
       li{padding: .1rem; font-size: 0;}
      .cart-spec{ color: #ccc; font-size: .1rem; height: .16rem; width: 1.3rem; overflow: hidden;text-overflow:ellipsis; white-space:nowrap;}
    }
    .care-price-div{ float: right; border: 1px solid #ccc; border-radius: 5px; background: #f5f5f5; margin-top: -.19rem;
        .minus,.add{ padding:0 .1rem; font-size: .2rem; font-weight: 100; display: inline-block; opacity: 0.5;}
    }
    .cart-div-input{ width: .3rem; height:.3rem; border: none; text-align: center}
    .goods-sale{width: 1rem;   display: inline-block}
</style>
