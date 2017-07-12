<template>
  <div class="list">
    <ul>
      <li v-for="(ele,index) in goodsList" :key="index">
        <router-link :to="{name:'Detail',params:{goodsid:ele.goods_id}}"
        class="listLink"
        >
          <a href="javascript:;"><img :src="ele.goods_image_url" alt=""></a>
          <dl>
            <dt><a href="javascript:;">{{ele.goods_name}}</a></dt>
            <dd class="priceP"><a href="javascript:;" class="price">￥{{ele.goods_price}}</a></dd>
            <dd class="saleParent">
              <a href="javascript:;" class="sales">
                <span>{{ele.goods_salenum}}</span>人购买
              </a>
              <div class="iconfont">
                {{ele.store_name}}<i>&#xe60b;</i>
              </div>
            </dd>
          </dl>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios"
  import {mapGetters} from "vuex"
  export default {
    name:"List",
    computed:{
      ...mapGetters([
        "goodsList"
      ])
    },
    mounted(){

    }
  }
</script>

<style lang="scss" scoped="">
  .list{
    background: #fff;
    margin-top:10px;
    font-size: 0;
    ul{
      li{
        border-bottom:1px solid #eee;
        padding:5px 10px;
        box-sizing: border-box;
        .listLink{
          display: flex;
          img{
            width:114px;
            height:114px;
            margin-right:10px;
          }
          dl{
            flex:1;
            a{
              font-size: 14px;
            }
            .priceP{
              margin:20px 0 5px;
              .price{
                color:#EC5464;
                font-size: 16px;
                font-weight: bold;
              }
            }
            .saleParent{
              display: flex;
              justify-content: space-between;
              align-items: center;
              .sales{
                color:#999;
                font-size: 12px;
                span{
                  font-weight: bold;
                }
              }
              .iconfont{
                font-size: 12px;
                color:#999;
                i{
                  vertical-align: middle;
                  font-size: 20px;
                  margin-left:5px;
                }
              }
            }
          }
        }

      }
    }
  }

</style>
