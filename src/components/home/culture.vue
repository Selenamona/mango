
<!---------商品分类（静态页面）------------->


<template>
  <div class="culture">
    <img src="../../images/title-whg.png" alt="">
    <ul>
      <li><img src="../../images/xprz.jpg" alt=""></li>
      <li><img src="../../images/feiyiwenhua.jpg" alt=""></li>
      <li><img src="../../images/chengming.jpg" alt=""></li>
      <li><img src="../../images/yangsheng.jpg" alt=""></li>
    </ul>
    <img src="../../images/shenghuoguan.png" alt="">
      <div>
          <ul id="culture-shenhuo">
            <li class="borderleft">
              <p>服装城</p>
              <span>装出时尚</span>
              <img src="../../images/fz-tt.jpg" alt=""></li>
            <li>
              <p>电器城</p>
              <span>构建品质生活</span>
              <img src="../../images/dq-tt.jpg" alt="">
            </li>
            <li>
              <p>家居城</p>
              <span>舒适的生活</span>
              <img src= "../../images/jj-tt.jpg" alt="">
            </li>
            <li class="borderleft">
              <p>珠宝区</p>
              <span>让你珠光宝气</span>
              <img src="../../images/zb-tt.jpg" alt="">
            </li>
            <li>
              <p>办公区</p>
              <span>享受办公生活</span>
              <img src="../../images/bg-tt.jpg" alt="">
            </li>
            <li>
              <p>运动区</p>
              <span>有氧运动</span>
              <img src="../../images/yd-tt.jpg" alt="">
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
  export default{
      name:"my-culture"
  }
</script>

<style scoped="" lang="scss">
  .culture{overflow: hidden;
    &>img{width: 100%;}
    ul{ border-top: 1px solid #eee; overflow: hidden ;
      li{float: left; width: 50%; padding: 5px; box-sizing: border-box;
        img{ width: 100%;border-radius: 5px;}
      }
    }
    #culture-shenhuo{width: 100%; overflow: hidden; font-size: 0; border-top: none;
        li{ width: 33.3%; float: left; border-left:1px solid #eee; border-top: 1px solid #eee;
          p{ font-size: 16px;}
          span{ font-size: 12px;}
          img{ width: .66rem; height: .76rem; padding: 0 19px}
        }
      .borderleft{ border-left: none;}
    }
  }
</style>
