export default {
  listData: state=>state.listData,
  loginData: state=>state.loginData,
  cartList: state=>state.cartList,
  allSelected:state=>state.allSelected,
  /******分类********/
  classes:state=>state.classes,
  classRight:state=>state.classRight,
  brands:state=>state.brands,
  /*********列表************/
  goodsList:state=>state.goodsList,
  brandID:state=>state.brandID,
  keyword:state=>{
    var key = state.keyword?state.keyword:"茶叶";
    return key;
  },
  /**********详情页*************/
  goodsMsg:state=>{
    var goodsArr = [];
    state.goodsMsg.goods_info?goodsArr.push(state.goodsMsg):goodsArr;
    return goodsArr;
  },
  comments:state=>state.comments,
  detail:state=>state.detail,
  goodsImg:state=>{
    var imgs = state.goodsMsg.goods_image?state.goodsMsg.goods_image.split(","):[];
    return imgs;
  }
}
