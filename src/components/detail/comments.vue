<template>
  <div class="comments">
    <ul class="badge" >
      <li><a href="javascript:;">全部评价</a></li>
      <li><a href="javascript:;">好评</a></li>
      <li><a href="javascript:;">中评</a></li>
      <li><a href="javascript:;">差评</a></li>
      <li><a href="javascript:;">订单晒图</a></li>
      <li><a href="javascript:;">追加评价</a></li>
    </ul>
    <div class="relative">
      <ul>
        <li v-for="(ele,index) in comments">
          <div class="title">
            <img :src="ele.member_avatar" alt="">
            <p>{{ele.geval_frommembername}}</p>
            <span>{{ele.geval_addtime_date}}</span>
          </div>
          <div class="score">{{ele.geval_scores}}</div>
          <p class="commentsTxt">{{ele.geval_content}}</p>
          <dl class="addComments">
            <dt>追加评价</dt>
            <dd>{{ele.geval_content_again}}</dd>
          </dl>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
  import {mapGetters} from "vuex"
  export default{
    name:"Comments",
    computed: {
      ...mapGetters([
        "comments"
      ])
    },
    updated(){
        console.log(this.comments)
    }
  }

</script>

<style lang="scss" scoped="">
  .comments{
    background: #F5F5F5;
    margin-top:45px;
    font-size: 0;
  }
.badge{
  padding:0 10px 10px;
  box-sizing: border-box;
  li{
    display: inline-block;
    margin: 10px 10px 0 0;
    a{
      color:#fff;
      background: #aaa;
      font-size: 13px;
      display: inline-block;
      padding:5px 10px;
      border-radius: 5px;
    }
  }
}
  .relative{
    ul{
      li{
        background: #fff;
        margin-bottom:5px;
        padding:0 0 10px 10px;
        box-sizing: border-box;
        font-size:12px;
        color:#2c3e50;
        .title{
          border-bottom:1px solid #F5F5F5;
          padding:5px 10px 5px 0;
          box-sizing: border-box;
          display: flex;
          font-size:12px;
          line-height:26px;
          img{
            width:24px;
            height:24px;
            margin-right:15px;
            border:1px solid #F5F5F5;
          }
          p{
            flex:1;
          }
          span{
            color:#BBB;
          }
        }
        .score{
          margin:10px 0;
        }
        .commentsTxt{
          margin-bottom:20px;
          font-size: 13px;
        }
        .addComments{
          dd{
            margin:10px;
          }
        }
      }
    }
  }
</style>

