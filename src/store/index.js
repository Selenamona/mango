import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)


const state = {
      listData:[],
      loginData:[],
      cartList:[],
      allSelected:false,
  /*******分类***********/
      classes:[],
      classRight:[],
      brands:[],
  /*********列表************/
      goodsList:[],
      brandID:[],
      keyword:"",
  /**********详情页*************/
      goodsMsg:[],
      comments:[],
      detail:[]
};


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
