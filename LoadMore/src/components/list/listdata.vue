<template>
  <div class="list" ref="list">
    <ul>
      <li v-for="(ele,index) in listData">
        <img :src="ele.goodsListImg" alt="">
        <p>{{ele.goodsName}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import IScroll from 'iscroll'    /*引入插件*/
  export default {
    name:"list",
    props:{
        listData:{
          type:Array,
          default:()=>{
                return []
          }
        }
    },
    mounted(){
      /*获取真实*/
      this.myScroll = new IScroll(this.$refs["list"],{
        scrollbars:true
      });
    },
    updated(){
      //内容更新，重新渲染；若内容少，无需滚动的页面，则不会出现滚动条
      this.myScroll.refresh()
    }
  }
</script>

<style scoped>
.list{
  position: fixed;
  left:0px;
  top:85px;
  bottom:50px;
  width:100%;
  overflow: hidden;
}
ul{
  overflow: hidden;
  padding:0 20px;
  list-style: none;
}
.list li{
  float: left;
  width: 50%;
  padding:10px;
  box-sizing: border-box;
  margin:0 !important;
}
.list li img{
  width:100%;
  height:230px;
}
.list li p{
  overflow: hidden;
  white-space: nowrap;
  width:100%;
  text-overflow: ellipsis;
}
</style>
