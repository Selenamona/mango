<template>
  <div>
     <my-header></my-header>
    <my-footer></my-footer>
     <my-content>
       <!--------轮播图----------->
       <div class="content-swiper">
           <mt-swipe :auto="4000">
             <mt-swipe-item v-for="(ele,index) in lunbo['item']" :key="index">
               <img :src="ele.image" alt="">
             </mt-swipe-item>
           </mt-swipe>
       </div>
      <img class="content-actjpg" src="../../images/act.jpg" alt="">
       <!----------九宫格----------->
       <my-nine></my-nine>
       <!--------广告------------->
       <div class="content-advertisement">
         <img src="../../images/hm.png" alt="">
         <ul ref="contenul">
           <li>金玉滁菊生态有限公司与红芒果网战略合作</li>
           <li>海尔洗碗机与红芒果网达成战略合作</li>
           <li>登录商家后台,商机尽在掌握！</li>
           <li>登录商家后台,商机尽在掌握！</li>
           <li>金玉滁菊生态有限公司与红芒果网战略合作</li>
         </ul>
       </div>
       <!--------文化馆，生活馆，等等------------->
       <my-culture></my-culture>
        <!---------------商品链表------------------->
       <my-list-data :list-data = "listData"></my-list-data>
       <!------------回到顶部----------------->
       <div class="header-htop" @click="headertop" ref="htop">
         <img src="../../images/gotop_b.png" alt="">
       </div>
     </my-content>
  </div>
</template>

<script>
  import nine from "./nine.vue"
  import culture from "./culture.vue"
  import listData from "./listData.vue"
  import axios from "axios"
  export default{
    name:"my-home",
    data(){
        return{
            lunbo:[],
            listData:[]
        }
    },
    methods:{
        fn(){
          var ul = this.$refs.contenul
          var htop = this.$refs.htop;
          var time = 0
          setInterval(()=>{
              if(time>=160){
                time = 0
              }
              ul.style.top = -time+"px"
            time+=40
            ul.style.transition = 1+"s"
          },3000)
        },
      headertop(){
        var interval = setInterval(()=>{
          document.body.scrollTop =  document.body.scrollTop -100
          if(document.body.scrollTop<=0){
            clearInterval(interval);
          }
        },10)
      },
      menu(){
        this.scroll = document.body.scrollTop;
        if(this.scroll>0){
          this.$refs.htop.style.display = "block"
        }else{
          this.$refs.htop.style.display = "none"
        }
      }
    },
    mounted(){
        axios.get("/php?act=index")
          .then(res=>{
            //console.log(res.data.datas)
            this.lunbo = res.data.datas[0].adv_list
            console.log(res.data.datas[1].goods4)
            this.listData = res.data.datas[1].goods4
          })
        this.fn()
      window.addEventListener('scroll', this.menu)
    },
    components:{
        "my-nine":nine,
        "my-culture":culture,
        "my-list-data":listData
    },
    beforeDestroy(){
        console.log("beforeDestroy")
      window.removeEventListener('scroll', this.menu)
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped="">
  *{margin: 0; padding: 0;}
  li{list-style: none;}
  .content-swiper{ height:2.12rem;
    img{ width: 100%; }
  }
  .content-actjpg{
    width: 100%;
  }
  .content-advertisement{border-top: 1px solid #eee; border-bottom: 1px solid #ccc; height: 40px; overflow: hidden; position: relative;
    img{ display: block; float: left;}
    ul{ float: left; animation: scroll 10s ease infinite; position: absolute; left: 120px;
      li{ line-height: 40px; font-size: 12px;}
    }
  }
  .header-htop{ background: rgba(255,255,255,0.85); overflow: hidden;position: fixed; bottom: 50px; right: 5px;z-index: 50;
    box-sizing: border-box; width: .46rem; height:.46rem;  border: 1px solid #ccc; border-radius: 100%;
      img{ width: .26rem; height: .26rem; padding:.1rem; opacity: 0.5 }
  }



</style>
