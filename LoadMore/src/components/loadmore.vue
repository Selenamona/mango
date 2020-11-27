<template>
  <div class="load">
    <v-header title="列表"></v-header>
    <Footer></Footer>
    <v-content>
      <div class="loadMore">
        <mt-loadmore
          :top-method="loadTop"
          :bottom-method="loadBottom"
          :bottom-all-loaded="allLoaded"
          :autoFill="false"
          :bottom-distance="-10"
          ref="loadmore">
          <ul>
            <li v-for="(ele,index) in listData" :key="index">
              <img :src="ele.goodsListImg" alt="">
              <p>{{ele.goodsName}}</p>
            </li>
          </ul>
        </mt-loadmore>
      </div>
    </v-content>
  </div>
</template>

<script>
  export default {
    name:"load",
    data(){
      return {
        allLoaded:false,
        listData:[],
        pageNum:0
      }
    },
    methods:{
      loadTop(){
        console.log("下拉刷新");
        this.getData({id:0},()=>{
          this.$refs.loadmore.onTopLoaded() ;    //数据请求完成，结束下拉的状态
          this.allLoaded = false
        })
      },
      loadBottom(){
        console.log("上拉加载");
        this.getData({id:0,more:true},()=>{
          this.$refs.loadmore.onBottomLoaded()    //数据请求完成，结束加载更多的状态
        })
      },
      getData(params,cb){
          if(params.more){
            this.pageNum++
          }else{
            this.pageNum=0;
          }

          var url = `http://datainfo.duapp.com/shopdata/getGoods.php?classID=${params.id}&pageCode=${this.pageNum}&linenumber=6`;
        this.$http.jsonp(url)
          .then(res=>{
              if(params.more){
                  if(res.data[0].price){
                    this.listData = this.listData.concat(res.data)
                  }else{
                    this.allLoaded = true;// 数据已全部获取完毕
                    console.log("数据获取完毕")
                  }
              }else{
                this.listData=res.data;
              }
            cb&&cb()
          })
      }
    },
    mounted(){
        this.getData({id:0})
    }
  }
</script>

<style scoped="">
  .loadMore {  width:100%;}
  .loadMore  ul {
    overflow:hidden;
    list-style: none;
  }
  li { float:left; width:50%; padding:10px; box-sizing:border-box;}
  li  img { width:100%;}

</style>


