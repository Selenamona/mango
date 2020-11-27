/**
 * Created by Administrator on 2017/6/23.
 */
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    listData:[]
  },
  mutations:{
    changeProData(state,newData){
      state.listData = newData
    }
  },
  actions:{
/*    getProData(context){
      context.commit()
    }*/
    getProData({commit}){
      //获取数据
      Vue.http.get("/api/recommend/home?page=1&num=6").then(res=>{

        console.log(res.data.data);
        var newData = res.data.data.list;
        commit("changeProData",newData)
      });
    },
    loadmore(context,Data){
      var newData = context.state.listData.concat(Data.listData);
      context.commit("changeProData",newData)
    }
  }
})

















