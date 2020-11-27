<template>
  <div class="sub-header">
    <ul>
      <li v-for="(ele,index) in classData" @click="changeClass(ele.classID)">{{ele.className}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"classes",
    props:{
        classData:{
          type:Array,
          default:()=>{
              return []
          }
        }
    },
    methods:{
      changeClass(id){
          this.$emit("change",id)
      }
    }
  }
</script>

<style scoped>
  .sub-header{
    height:40px;
    position: fixed;
    top:45px;
    left:0;
    background: #fff;
    width:100%;
    z-index: 999;
  }
  .sub-header ul{
    white-space: nowrap;
    overflow: hidden;
    overflow-x: auto;
    width:100%;
    line-height:40px;
    height:40px;
    font-size: 0;

  }
  .sub-header li{
    line-height:40px;
    display: inline-block;
    padding:0 10px;
    font-size: 16px;
  }
</style>
