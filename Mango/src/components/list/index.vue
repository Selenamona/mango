<template>
  <div class="goodsList">
    <!--列表头部-->
    <v-header>
      <div slot="center" class="center">
        <div class="searchBox">
          <span class="iconfont"><i>&#xe60a;</i></span>
          <router-link :to="{name:'Search'}">
            <input type="text" :placeholder="keyword" v-model="keyword">
          </router-link>
        </div>
        <div class="icon">
          <a class="iconfont" href="#/class"><i>&#xe619;</i></a>
          <a href="#/class">分类</a>
        </div>
      </div>
      <div slot="right" class="iconfont">
        <i>&#xe60b;</i>
      </div>
    </v-header>
    <!--列表 subnav 数据显示分类切换-->
    <div class="sub-header">
      <ul class="headerTab">
        <li class="iconfont" @click="changeOrder">
          <span ref="order">综合排序</span><i>&#xe61c;</i>
        </li>
        <div class="order" ref="orderClass">
          <p v-for="(ele,index) in order" :key="index" @click="clickItem(index)">{{ele}}</p>
        </div>
        <li class="active" @click="composite(2)">销量优先</li>
        <li class="iconfont" @click="popUp">筛选<i>&#xe61c;</i></li>
      </ul>
      <div class="iconfont changeShow"><i>&#xe61e;</i></div>
    </div>
    <!--列表内容-->
    <v-content>
      <v-list></v-list>
    </v-content>
    <!--右侧弹出框-->
    <mt-popup
      v-model="popupVisible"
      position="right">
      <div class="pop">
        <v-header></v-header>
      </div>
    </mt-popup>
  </div>
</template>

<script>
  import axios from "axios"
  import List from "./list.vue"
  import {mapGetters,mapActions} from "vuex"
  import qs from "qs"
  export default {
    name:"List",
    data(){
        return {
            show:false,    /*排序列表的显示隐藏*/
            order:["综合排序","价格从高到低","价格从低到高","人气排序"],
            popupVisible:false,
            id:""
        }
    },
    computed:{
      ...mapGetters([
        "goodsList",
        "brandID",
        "keyword"
      ])
    },
    methods:{
      ...mapActions([
          "getGoodsList",
          "getBrandList",
          "searchList"
      ]),
      popUp(){
        /*筛选*/
        this.popupVisible=true;
      },
      composite(n){
          /*点击菜单切换*/
          for(var i=0; i< 3;i++){
            this.$refs.order.parentNode.parentNode.children[i].style.color = "#888"
          }
         this.$refs.order.parentNode.parentNode.children[n].style.color = "#ED5564"
         this.getGoodsList({order:"",id:this.id})
      },
      changeOrder(){
          /*点击显示隐藏排序方式*/
          if(!this.show){
             /* 点击显示*/
            this.$refs.orderClass.style.display = "block";
            this.show = true;
          }else{
              /*点击消失*/
            this.$refs.orderClass.style.display = "none";
            this.show = false;
          }
      },
      clickItem(n){
          /*改变排序方式*/
          this.$refs.order.innerHTML = this.$refs.orderClass.children[n].innerHTML;  /*替换文字*/
          this.$refs.orderClass.style.display = "none";   /*盒子消失*/
          this.show=false;        /*解决点击两次的bug*/
          /*排序方式颜色变化*/
          for(var i = 0;i<4;i++){
            this.$refs.orderClass.children[i].setAttribute("class","")
          }
          this.$refs.orderClass.children[n].setAttribute("class","active");
          /*菜单切换颜色变化*/
          for (var i=0; i<3;i++){
            this.$refs.order.parentNode.parentNode.children[i].style.color = "#888"
          }
          this.$refs.order.parentNode.style.color = "#ED5564";

          console.log(Number(this.id))
          console.log(this.keyword)
          console.log(this.id)
          /*请求数据*/
          if(n==0){   /*综合排序*/
            this.getGoodsList({order:"",id:this.id})
          }
          if(n==1){   /*价格从高到低*/
              this.getGoodsList({order:"&key=3&order=2",id:this.id})
          }
          if(n==2){   /*价格从低到高*/
              this.getGoodsList({order:"&key=3&order=1",id:this.id})
          }
          if(n==3){   /*人气排序*/
            this.getGoodsList({order:"&key=2&order=2",id:this.id})
          }
      }
/*      getBrandList(id){
        axios.get("php?act=goods&op=goods_list&b_id="+id+"&page=10&curpage=1&b_id="+id)
          .then(res=>{
            this.brandID = res.data.datas.goods_list
          })
      }*/
    },
    components:{
        "v-list":List
    },
    mounted(){
      this.id = this.$route.params.cityid;
      //console.log(this.$route.params)
      var num = Number(this.id)/100;
      if(num){
        if(num>=10){
          console.log("id")
          this.getGoodsList({order:"",id:this.id})
        }else{
          console.log("brandID")
          this.getBrandList(this.id)
        }
      }else{
         var params = qs.stringify({"act":"goods","op":"goods_list","keyword":this.id,"page":10,"curpage":1,"keyword":this.id});
         var goods = this.id;
         this.searchList({params,goods})
         this.keyword = this.id
      }
    }
  }
</script>

<style lang="scss" scoped="">
@import "style";

  /*
   综合排序
   /php?act=goods&op=goods_list&gc_id=7204&page=10&curpage=1&gc_id=7204
   价格从高到底
   php?act=goods&op=goods_list&gc_id=7204&page=10&curpage=1&gc_id=7204&key=3&order=2
   价格从低到高
   php?act=goods&op=goods_list&gc_id=7204&page=10&curpage=1&gc_id=7204&key=3&order=1
   人气排序
   php?act=goods&op=goods_list&gc_id=7204&page=10&curpage=1&gc_id=7204&key=2&order=2
   品牌数据请求
   php?act=goods&op=goods_list&b_id=530&page=10&curpage=1&b_id=530
   */

</style>
