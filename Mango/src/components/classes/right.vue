<template>
  <div class="classRight" ref="rightScro">
    <ul style="">
      <li v-for="(ele,index) in brands">
        <router-link :to="{name:'List',params:{id:ele.brand_id}}">
          <img :src="ele.brand_pic" alt="">
          <p>{{ele.brand_name}}</p>
        </router-link>
      </li>
    </ul>
    <dl v-for="(ele,index) in classRight" :key="index">
      <dt><a href=""><span> > </span><i></i>{{ele.gc_name}}</a></dt>
      <dd v-for="(item,n) in ele.child" :key="n">
        <router-link :to="'/List/'+item.gc_id">
          {{item.gc_name}}
        </router-link>
       <!-- <a v-link="{name:'list',params:item.gc_id}">{{item.gc_name}}</a>-->
      </dd>
    </dl>
  </div>
</template>

<script>
  import axios from "axios"
  import IScroll from "iscroll"
  import {mapGetters,mapActions} from "vuex"
  export default {
    name:"v-classTxt",
    computed:{
      ...mapGetters([
        "classRight",
        "brands"
      ]),
    },
    methods:{
      ...mapActions([
          "getBrands"
      ])
    },
    mounted(){
       this.getBrands();
       this.myRIScroll = new IScroll(this.$refs.rightScro,{
          scrollBars:true
       })
    },
    updated(){
      this.myRIScroll.refresh()
    }
  }
</script>

<style scoped="" lang="scss">
  li{ list-style: none}
  .classRight{
    font-size: 0;
    overflow: hidden;
    height:100%;
    background: #FCFCFC;
    ul{
      overflow: hidden;
      float: left;
    }
    li{
      width:80px;
      height:80px;
      float: left;
      margin-top:10px;
      margin-left:10px;
      background: #fff;
      font-size: 12px;
      text-align: center;
      a{
        color:#444;
        img{
          width:100%;
          margin:8px 0;
        }
      }
    }
    dl{
      margin-bottom:10px;
      overflow: hidden;
      dt{
        box-sizing: border-box;
        padding:0 10px;
        line-height:32px;
        height:32px;
        background: #fafafa;
        border:1px solid #F5F5F5;
        width:100%;
        a{
          font-size: 14px;
          color:#444;
          display: block;
          span{
            float:right;
          }
          i{
            width:10px;
            height:10px;
            background: #f99;
            border-radius: 50%;
            display: inline-block;
            margin-right:10px;
          }
        }
      }
      dd{
        float: left;
        width:73px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin:10px 10px;
        a{
          font-size: 12px;
          color:#444;
        }
      }
    }
  }
</style>
