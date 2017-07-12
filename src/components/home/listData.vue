
<!---------商品列表------------->

<template>
  <div class="list-data">
      <ul>
        <li v-for="(ele,index) in listData.item" @click="addTo(ele)" :key="index">
          <img v-lazy="ele.goods_image" alt="">
          <p class="list-data-name">{{ele.goods_name}}</p>
          <p class="list-data-price">¥{{ele.goods_promotion_price}}</p>
        </li>
      </ul>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default{
      name:"my-listdata",
      data(){
          return{

          }
      },
    props:{
      listData:{
          default:[]
      }
    },
    methods:{
          addTo(ele){
              console.log(ele)
              this.$store.dispatch("getProductData",ele)
               // ...mapActions(["getProductData"],ele)
          }
    }
  }
</script>

<style lang="scss" scoped="">
  .list-data{ background: #F2F2F2; overflow: hidden;
    ul{}
    li{ width: 48.9%; float: left; background: #fff; margin: 2px;
      img{ width: 100%;}
      .list-data-name{overflow : hidden;   /*********多行显示文本框*************/
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    font-size:13px;
        box-sizing: border-box; padding: 3px;
      }
      .list-data-price{ font-size: 12px;color: red; padding:2px 0; box-sizing: border-box; padding: 3px;}
    }
    li:nth-child(even){ float: right}
  }
</style>
