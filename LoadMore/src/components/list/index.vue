<template>
  <div class="list">
    <v-header title="列表"></v-header>
    <Footer></Footer>
    <v-class :class-data="classData" @change="changeclass"></v-class>
    <v-content>
      <v-list :list-data="listData"></v-list>
    </v-content>
  </div>
</template>

<script>

  import Classes from "./classdata.vue"
  import List from "./listdata.vue"
  export default {
    name:"list",
    data(){
      return {
        classData:[],
        listData:[]
      }
    },
    methods:{
      getProData(id){
        this.$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?classID="+id)
          .then(res=>{
            this.listData=res.data
          })
      },
      changeclass(id){
            this.getProData(id)
      }
    },
    components:{
      "v-class":Classes,
      "v-list":List
    },
    mounted(){
       this.$http.get("http://datainfo.duapp.com/shopdata/getclass.php")
         .then(res=>{
           this.classData=res.data
         });
      this.getProData(0);
    }
  }
</script>

<style scoped>

</style>
