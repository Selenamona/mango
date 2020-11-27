<template>
  <ul class="list">
    <li v-for="(ele,index) in listData" :key="index" :ref="'item'+index" v-if="ele.number">
      <input type="checkbox">
      <img :src="ele.goodsListImg" alt="">
      <dl>
        <dt>{{ele.goodsName}}</dt>
        <dd class="price">￥{{ele.price}}.00</dd>
        <dd>数量:
          <div class="num">
            <button @click="change(-1,index,ele.goodsID)">-</button>
            <input type="text" v-model="ele.number">
            <button @click="change(1,index,ele.goodsID)">+</button>
          </div>
        </dd>
      </dl>
      <div class="del" @click="change(0,index,ele.goodsID)">删除</div>
    </li>
  </ul>
</template>

<script>
  export default {
    name:"cartlist",
    props:{
      "list-data":{
        type:Array,
        default:()=>{
            return []
        }
      }
    },
    methods:{
      change(type,index,id){
          this.$emit("changeNum",type,index,id)
      }
    }
  }
</script>

<style scoped="">
  .list {
    padding:0px 10px;
    font-size: 14px;
  }
  .list li{
    list-style:none;
    display: flex;
    margin:20px 0;
  }
  .list img{
    width:70px;
    height:80px;
  }
  .list dl{
    flex: 1;
    margin: 0 6px;
  }
  .list input{
    width:40px;
    height:20px;
    text-align: center;
    border:none;
    border-left:1px solid #ccc;
    border-right:1px solid #ccc;
    outline: medium;
  }
  .list button{
    width:20px;
    height:20px;
    border:none;
    background: #fff;
    outline: medium;
  }
  .list .num{
    border:1px solid #ccc;
    width:94px;
    display: inline-block;
  }
  .list .price{
    margin:5px 0;
  }
</style>
