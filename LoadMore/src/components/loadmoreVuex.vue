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
              <img :src="ele.skuList[0].image" alt="">
              <p>{{ele.masterName}}</p>
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
        pageNum:1
      }
    },
    methods:{
      loadTop(){
        console.log("下拉刷新");
        this.getData({},()=>{
          this.$refs.loadmore.onTopLoaded() ;    //数据请求完成，结束下拉的状态
          this.allLoaded = false
        })
      },
      loadBottom(){
        console.log("上拉加载");
        this.getData({more:true},()=>{
          this.$refs.loadmore.onBottomLoaded()    //数据请求完成，结束加载更多的状态
        })
      },
      getData(params,cb){
          if(params.more){
            this.pageNum++
          }else{
            this.pageNum=0;
          }
          console.log(this.pageNum);

          var url = `/api/recommend/home?page=${this.pageNum}&num=6`;
        this.$http.get(url)
          .then(res=>{

              if(params.more){
                  if(res.data.data.list[0].masterName){
                    console.log("加载成功");
                    console.log(res.data.data.list);
                    this.$store.dispatch({type:"loadmore",listData:res.data.data.list});
                  }else{
                    this.allLoaded = true;// 数据已全部获取完毕
                    console.log("数据获取完毕")
                  }
              }else{
                  console.log("刷新成功");
                this.listData=res.data.data.list;
              }
            cb&&cb()
          })
      }
    },
    computed:{
      listData(){
          return this.$store.state.listData
      }
    },
    mounted(){
        this.$store.dispatch("getProData")
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


