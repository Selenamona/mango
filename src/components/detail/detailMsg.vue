<template>
  <div class="introduction">
    <!--透明头部-->
    <header>
      <a class="iconfont" href="javascript:history.go(-1)"><i>&#xe643;</i></a>
      <a class="iconfont"><i>&#xe623;</i></a>
    </header>
    <!--详细介绍区域-->
    <div class="introDetail" v-for="(ele,index) in goodsMsg" :key="index">
      <dl>
        <dt>{{ele.goods_info.goods_name}}</dt>
        <dd class="price">￥{{ele.goods_info.goods_price}}</dd>
        <dd class="salesNum">
          <div>{{ele.goods_hair_info.content}}</div>
          <div>月销量<span>{{ele.goods_info.goods_salenum}}</span>件</div>
          <div>{{ele.goods_hair_info.area_name}}</div>
        </dd>
      </dl>
      <!--配送 送达时间-->
      <div class="send">
        <div class="sendChild">
          <span class="square">￥{{ele.redpacket[0].rpacket_t_price}}元</span>
          <span>{{ele.redpacket[0].rpacket_t_title}}</span>
          <button>领取</button>
        </div>
        <div class="sendChild">
          <span class="square">送积分</span>
          <span class="exchange">购买获赠250积分，可兑换礼品</span>
        </div>
        <div class="sendChild sendTime">
          <div class="iconfont"><i>&#xe67c;</i></div>
          <p>至 <span>{{ele.goods_hair_info.if_store_cn}}</span>  <strong>{{ele.goods_hair_info.area_name}}</strong>
            16:00前付款，预计{{ele.receive_time.content}}送达
          </p>
        </div>
      </div>
      <!--品牌热度-->
      <div class="brandHot">
        <div class="hotness">
          <span  class="hotnessF">品牌热度</span>
          <p>已有1920人支持</p>
          <div class="iconY">
            （去围观）
            <span class="iconfont">
                      <i>&#xe69b;</i>
                    </span>
          </div>
        </div>
        <p class="hotChildren">正品保障 · 民族品牌 · 极速退款 </p>
      </div>
      <div class="choose">
        <span>已选</span>
        <p><span>默认</span></p>
        <div class="iconfont">
          <i>&#xe69b;</i>
        </div>
      </div>
      <!--商品评价区域-->
      <!--店铺-->
      <div class="shopName">
        <div class="shop">
          <img :src="ele.store_info.store_avatar" alt="">
          <p>{{ele.store_info.store_name}}</p>
          <div class="iconfont">
            <i>&#xe69b;</i>
          </div>
        </div>
        <div class="server">
                  <span>
                    描述相符
                    <strong>{{ele.store_info.store_credit.store_desccredit.credit}}</strong>
                    <i>{{ele.store_info.store_credit.store_desccredit.percent_text}}</i>
                  </span>
          <span>
                    服务态度
                    <strong>{{ele.store_info.store_credit.store_servicecredit.credit}}</strong>
                    <i>{{ele.store_info.store_credit.store_servicecredit.percent_text}}</i>
                  </span>
          <span>
                    发货速度
                    <strong>{{ele.store_info.store_credit.store_deliverycredit.credit}}</strong>
                    <i>{{ele.store_info.store_credit.store_deliverycredit.percent_text}}</i>
                  </span>
        </div>
        <div class="gointo">
          <button>全部商品</button>
          <button>进入店铺</button>
        </div>
      </div>
      <!--店铺推荐-->
      <div class="recmShop">
        <p class="title">店铺推荐</p>
        <ul>
          <li v-for="(data,n) in ele.goods_commend_list" :key="n">
            <img :src="data.goods_image_url" alt="">
            <p>{{data.goods_name}}</p>
            <span>￥{{data.goods_promotion_price}}</span>
          </li>
        </ul>
      </div>
      <!--向上拉加载更多-->
      <div class="load" ref="load">
        <span class="iconfont"><i>&#xe732;</i></span>
        <span>向上滑动加载更多</span>
      </div>
      <!--商品详情-->
      <div v-if="showLoading" class="loadingImg"><img src="../../imgs/loading.gif" alt=""></div>
      <div class="loadDetail" v-html="detail" v-if="show"></div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  export default {
    name:"Msg",
    props:["show","show-loading"],
    computed:{
      ...mapGetters([
        "goodsMsg",
        "detail"
      ])
    }
  }
</script>

<style lang="scss">
@import "detailMsg";

</style>
