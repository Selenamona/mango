<template>
  <div class="searchPage">
    <v-header>
      <div slot="center">
        <span class="iconfont"><i>&#xe60a;</i></span>
        <input type="text" v-model="buyGoods">
      </div>
        <router-link :to="{name:'List',params:{id:buyGoods}}" class="iconfont" slot="right">
          搜索
        </router-link>
    </v-header>
    <v-content>
      <div class="searchTxt">
        <div class="hot">
          <p>热门搜索</p>
          <router-link :to="{name:'List',params:{id:ele}}" v-for="(ele,index) in list" :key="index">
            {{ele}}
          </router-link>
        </div>
        <div class="history">
          <p>历史记录</p>
          <a v-for="(data,n) in his_List" :key="n">{{data}}</a>
        </div>
        <button>清空历史</button>
      </div>
    </v-content>
  </div>
</template>

<script>
  import axios from "axios"
  import qs from "qs"
  import {mapActions,mapGetters} from "vuex"
  export default {
    name:"Search",
    data(){
        return {
          list:[],
          his_List:[],
          buyGoods:"热水器",
          id:""
        }
    },
    computed:{
      ...mapGetters([
          "goodsList"
      ])
    },
    methods:{
      ...mapActions([
          "searchList"
      ])
    },
    mounted(){
      axios.get("/php?act=index&op=search_key_list")
        .then(res=>{
          this.list = res.data.datas.list;
          this.his_List = res.data.datas.his_list;
        })
    }
  }
</script>

<style lang="scss" scoped="">
  .headerBtn{
    a{
      font-size: 14px;
    }
  }
  .headerTxt div{
    border:1px solid #ccc;
    border-radius: 5px;
    height:30px;
    background:#fff;
    display: flex;
    span{
      display: inline-block;
      height:30px;
      line-height:30px;
      float: left;
      width:25px;
      i{
        color:#ccc;
        width:15px;
        height:15px;
        line-height:15px;
        display: inline-block;
        font-size: 15px;
      }
    }
    input{
      height:30px;
      /*vertical-align: middle;*/
      float: right;
      border:none;
      margin-right:5px;
      outline: medium;
      flex:1;
    }
  }
  .searchTxt{
    position: absolute;
    left:0;
    top:45px;
    bottom:0;
    width:100%;
    background: #eff2f5;
    padding:20px 10px;
    box-sizing: border-box;
    p{
      color:#111;
      font-size: 15px;
      margin-bottom:10px;
    }
    .hot{
      margin-bottom:20px;
      font-size: 0;
      a{
        display: inline-block;
        padding:5px 10px;
        font-size: 14px;
        color:#555;
        background: #fff;
        margin-right:10px;
        margin-bottom:10px;
        border-radius: 30px;
      }
    }
    .history{
      a{
        display: inline-block;
        padding:5px 10px;
        font-size: 14px;
        color:#555;
        background: #fff;
        margin-right:10px;
        margin-bottom:10px;
      }
    }
  }
  button{
    width:80%;
    height:40px;
    background: #EEE;
    text-align: center;
    line-height:40px;
    display: block;
    margin:50px auto 0;
    border:none;
    outline: medium;
    font-size: 16px;
  }



</style>
