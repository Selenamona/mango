

export default {
  changeProductData(state,listData){
    console.log(state);
    state.listData.push(listData);
    state.listData = state.listData
  },
  changLogin(state,loginData){
    state.loginData = loginData
  },
  cartListData(state,list){
    state.cartList = list
  },
  /***********************/
  cartPast(state,{number,id}){
    //console.log(number+"------"+id)
    var str = state.cartList.cart_list;
    for(var i=0; i<str.length; i++){
          for(var j=0; j<str[i].goods.length; j++){
              if(id==str[i].goods[j].cart_id){
                  str[i].goods[j].goods_num = number
                  window.location.reload()
              }
          }
    }
  },
  /************分类***************/
  getClasses(state,classes){
    state.classes = classes
  },
  getClassesRight(state,classRight){
    state.classRight = classRight
  },
  getBrands(state,brands){
    state.brands = brands
  },
  /*********列表************/
  goodsList(state,goodsList){
    state.goodsList = goodsList;
  },
  brandID(state,brandID){
    state.brandID = brandID;
  },
  searchList(state,data){
    state.goodsList = data.searchList;
    state.keyword = data.keyword;
  },
  /**********详情页*************/
  getDetailMsg(state,goodsMsg){
    state.goodsMsg = goodsMsg;
  },
  getComments(state,comments){
    state.comments = comments;
  },
  getDetail(state,detail){
    state.detail = detail;
  },
  /***********购物车复选框************/
  changeSelected(state,{type,index}){
    var str = state.cartList.cart_list;
     if(type==="all"){
       state.allSelected = !state.allSelected;
        str.forEach((ele,index)=>{
              //ele.allbtn = state.allSelected;
            //str.$set(index,{allbtn:state.allSelected})
            //console.log(ele.allbtn);
            ele.goods.forEach(data=>{
               // console.log(data)
                data.selected = state.allSelected
                //console.log(data.selected)
            })
        })
     }else if(type==="arr"){
        str[index].goods.forEach(ele=>{
              ele.selected = str[index].allbtn
        })
     }
  }
}
