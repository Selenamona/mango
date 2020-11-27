<template>
  <div class="history">
          <login-header title="浏览记录">
            <a href="javascript:history.back(-1)" slot="his">返回</a>
            <a href="javascript:;" slot="right">清除</a>
          </login-header>
         <my-content>
           <ul class="history-content">
             <li v-for="(ele,index) in listData">
               <img :src="ele.goods_image" alt="">
               <div>
                 <p class="history-name">{{ele.goods_name}}</p>
                 <p class="history-price">¥{{ele.goods_promotion_price}}</p>
               </div>
             </li>
           </ul>
         </my-content>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
      name:"my-history",
    data(){
      return{

      }
    },
    computed:{
//        listData(){
//            return this.$store.state.listData
//      }
      ...mapState([
        'listData'
      ])
    }
  }
</script>

<style lang="scss" scoped="">
    .content{ padding: 0 !important;}

    .history-content{ background: #eff2f5; height: 100vh;
        li{ width:100%; height: 135px; background: #fff; box-sizing: border-box; border-bottom: 1px solid #eee;
          img{ float: left; width:125px; height: 125px; padding: 5px;}
          p.history-price{color: #EC5464; line-height: 50px;font-size: 20px;}
          p.history-name{ font-size: 16px;}
        }
    }
</style>
