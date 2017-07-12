import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import fetchJSONP from 'fetch-jsonp'

export default {
  getProductData({commit},listData){
    commit("changeProductData",listData)
  },
  loginData({commit},loginData){
    commit("changLogin",loginData)
  },
  cartListData({commit}){
    var params = qs.stringify({"act":"member_cart","op":"cart_list","key":"4b85b8806496bbd71ef2ad32f2eebe7b"});
    axios.post("/php",params,{
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }).then(res=>{
      var list = res.data.datas
      commit("cartListData",list)
    })
  },
  cartPast({commit},{index,num,id}){
      //console.log(index+"------"+num+"-------"+id)
    if(num<=1) num = 1;

    var params = qs.stringify({"act":"member_cart","op":"cart_edit_quantity","key":"4b85b8806496bbd71ef2ad32f2eebe7b","cart_id":id,"quantity":num});
    axios.post("/php",params,{
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }).then(res=>{
       //console.log(res.data.datas)
        var number = res.data.datas.quantity;

        commit("cartPast",{number,id})
    })

    fetchJSONP("http://datainfo.duapp.com/shopdata/getCar.php?userID=tom666")
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      })

  },
  getDeletes({commit},id){
    var params = qs.stringify({"act":"member_cart","op":"cart_del","key":"4b85b8806496bbd71ef2ad32f2eebe7b","cart_id":id});
      axios.post("/php",params,{
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      }).then(res=>{
        window.location.reload()
      })

  },

  /**********购物车复选框***********/

  changeSelected({commit},{type,index}){
      commit("changeSelected",{type,index})
  },

  /***********分类*************/
  getClasses({commit}){
    axios.get("/php?act=goods_class")
      .then(res=>{
        commit("getClasses",res.data.datas.class_list)
      });
  },
  getClassesData({commit},id){
    axios.get("/php?act=goods_class&op=get_child_all&gc_id="+id)
      .then(res=>{
        commit("getClassesRight",res.data.datas.class_list);
        commit("getBrands",[])
      })
  },
  getBrands({commit}){
    axios.get("/php?act=brand&op=recommend_list")
      .then(res=>{
        commit("getBrands",res.data.datas.brand_list);
        commit("getClassesRight",[]);
      });
  },

  /*********列表************/
  getGoodsList({commit},{order,id}){
    if(Number(id)){
      console.log("商品"+id)
      axios.get("/php?act=goods&op=goods_list&gc_id="+id+"&page=10&curpage=1&gc_id="+id+order)
        .then(res=>{
          commit("goodsList",res.data.datas.goods_list)
        })
    }else{
      console.log("关键字"+id)
      axios.get("/php?act=goods&op=goods_list&keyword="+id+"&page=10&curpage=1&keyword="+id+order)
        .then(res=>{
          commit("goodsList",res.data.datas.goods_list)
        })
    }

  },
  getBrandList({commit},id){
    axios.get("php?act=goods&op=goods_list&b_id="+id+"&page=10&curpage=1&b_id="+id)
      .then(res=>{
        console.log(res.data.datas.goods_list)
        commit("brandID",res.data.datas.goods_list)
      })
  },
  searchList({commit},{params,goods}){   /*搜索页面*/
    axios.get("/php?"+params)
      .then(res=>{
        commit("searchList",{searchList:res.data.datas.goods_list,keyword:goods})
      })
  },

  /**********详情页*************/
  /*通过id请求详情页面信息*/
  getDetailMsg({commit},id){
    axios.get("/php?act=goods&op=goods_detail&goods_id="+id+"&key=")
      .then(res=>{
        commit("getDetailMsg",res.data.datas)
      });
  },
  /*请求详情页商品详情信息*/
  getDetail({commit},id){
    axios.get("/php?act=goods&op=goods_body&goods_id=" + id)
      .then(res => {
        commit("getDetail",res.data)
      })
  },
  /*获取商品评论信息*/
  getComments({commit},goodsID){
    axios.get("php?act=goods&op=goods_evaluate&goods_id="+goodsID+"&curpage=1&page=10")
      .then(res=>{
        commit("getComments",res.data.datas.goods_eval_list)
      })
  }

}
