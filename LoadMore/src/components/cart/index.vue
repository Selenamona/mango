<template>
  <div class="cart">
    <v-header title="购物车"></v-header>
    <Footer></Footer>
    <div class="sub-header">
      <p>数量：<span>{{totalNum}}</span></p>
      <p>金额：<span>{{totalMoney}}</span></p>
    </div>
    <v-content>
      <cart-list :list-data="listData" @changeNum="changeNum" ref="list"></cart-list>
    </v-content>
  </div>
</template>

<script>
  /*引入子组件cartlist*/
  import CartList from "./cartlist.vue"
  export default {
    name:"cart",
    data(){
        return {
          listData:[]
        }
    },
    methods:{
        /*修改商品数量/删除商品*/
        changeNum(type,index,id){
          if(type){   /*增减商品*/
            this.listData[index].number = this.listData[index].number*1 + type
            this.$http.get("http://datainfo.duapp.com/shopdata/updatecar.php?userID=ma&goodsID="+id+"&number="+this.listData[index].number)
              .then(res=>{
                console.log(res.data)
              })
          }else{  /*删除商品*/
            this.$http.get("http://datainfo.duapp.com/shopdata/updatecar.php?userID=ma&goodsID="+id+"&number=0")
              .then(res=>{
                 /*删除商品效果；增加class=>增加动画效果*/
               /* this.$refs：当前组件模板内的ref属性的集合
                this.$refs.list.$refs：子组件的ref属性的集合*/
                var oLi = this.$refs.list.$refs["item"+index][0]  /*cartlist页面的li*/
                oLi.className = "itemRemove"
                oLi.addEventListener("animationend",()=>{
                  this.listData.splice(index,1,{})
                })
              })
          }
        }
    },
    mounted(){
        /*获取购物车数据*/
        this.$http.jsonp('http://datainfo.duapp.com/shopdata/getCar.php?userID=ma')
          .then(res=>{
            this.listData= res.data;
          })
    },
    computed:{
      totalNum:function(){
          /*计算总数量*/
        var num = 0;
        this.listData.forEach((ele,index)=>{
            if(ele.number){
              num += ele.number*1
            }
          })
          return num;
      },
      totalMoney:function(){
          /*计算总金额*/
        var money = 0;
        this.listData.forEach((ele,index)=>{
            if(ele.number){
              money += ele.price*ele.number*1
            }
          })
          return money;
      }
    },
    components:{
        "cart-list":CartList     /*注册子组件*/
    }
  }
</script>

<style scoped>
  .sub-header{
    position: fixed;
    top:46px;
    left:0;
    display: flex;
    padding:10px;
  }
  .sub-header span{
    margin-right:30px;
  }
</style>
