<template>
  <div class="contentClass" ref="leftScroll">
    <ul class="classLeft" >
      <li @click="clickBrand" ref="brands" class="active">
        <span class="iconfont"><i>{{classIcon[0]}}</i></span>
        <p>品牌推荐</p>
      </li>
      <li v-for="(ele,index) in classes" :key="index" @click="changeClass(index,ele.gc_id)" ref="oLi">
        <span class="iconfont"><i>{{classIcon[index+1]}}</i></span>
        <p>{{ele.gc_name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios"
  import IScroll from "iscroll"
  import {mapGetters,mapActions} from "vuex"
  export default {
    name:"v-class",
    data(){
      return {
        classIcon:["\ue626","\ue601","\ue602","\ue966","\ue608","\ue621","\ue60f","\ue60d","\ue67a","\ue61b","\ue61d","\ue72c","\ue618"]
      }
    },
    computed:{
      ...mapGetters([
        "classes"
      ])
    },
    methods:{
      ...mapActions([
        "getClasses"
      ]),
      changeClass(index,id){
          this.$emit("change",index,id)
      },
      clickBrand(){
          this.$emit("clickBrand")
      }
    },
    mounted(){
        this.getClasses();
        this.myIScroll = new IScroll(this.$refs.leftScroll,{
            scrollBars:true
        })
    },
    updated(){
      this.myIScroll.refresh()
    }
  }
</script>

<style lang="scss" scoped="">
  li{ list-style: none}
  .contentClass{
    font-size: 0;
    background: #eff2f5;
    float: left;
    width:84px;
    height:100%;
    padding:10px 10px 0;
    box-sizing: border-box;
    font-size: 12px;
    color:#999;
    .classLeft{
      li{
        margin-bottom:15px;
        padding-bottom:5px;
        overflow: hidden;
        box-sizing: border-box;
        text-align: center;
        border-bottom:2px solid #eff2f5;
        &.active{
          color:#ED5564;
          border-bottom:2px solid #ED5564;
          i{
            color:#ED5564;
          }
        }
        i{
          font-size: 25px;
          color:#999;
        }
        p{
          white-space: nowrap;
        }
      }
    }

  }

</style>
