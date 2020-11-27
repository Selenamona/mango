<template>
  <div class="classes">
    <v-header>
      <div slot="center">
        <span class="iconfont"><i>&#xe60a;</i></span>
        <router-link :to="{name:'Search'}">
           <input type="text" placeholder="花茶">
        </router-link>
      </div>
      <a class="iconfont" slot="right"><i>&#xe60b;</i></a>
    </v-header>
    <v-content>
      <v-class @change="changeClass" ref="left" @clickBrand="getFirstBrands"></v-class>
      <v-classTxt></v-classTxt>
    </v-content>
  </div>
</template>

<script>
import axios from "axios"
import Left from "./left.vue"
import Right from "./right.vue"
import {mapActions} from "vuex"
export default {
  name:"Classes",
  components:{
      "v-class":Left,
      "v-classTxt":Right
  },
  methods:{
    ...mapActions([
      "getClasses",
      "getClassesData",
      "getBrands"
    ]),
    getFirstBrands(){
      this.getBrands()
      const l=this.$refs.left.$refs.oLi;
      for(var i=0; i<l.length;i++){
        l[i].setAttribute("class","")
      }
      this.$refs.left.$refs.brands.setAttribute("class","active")
    },
    changeClass(index,id){
      const l=this.$refs.left.$refs.oLi;
      for(var i=0; i<l.length;i++){
        l[i].setAttribute("class","")
      }
      this.$refs.left.$refs.brands.setAttribute("class","");
      l[index].setAttribute("class","active");
      this.getClassesData(id)
    }
  }
}

</script>

<style lang="scss" scoped="">
  li{ list-style: none}
  .content{
    width:100%;
    position: absolute;
    left:0;
    bottom:0;
    top:0;
    overflow: hidden;
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
</style>
