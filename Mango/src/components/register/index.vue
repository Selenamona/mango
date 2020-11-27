<!------注册-------->
<template>
  <div class="register">
      <login-header title="会员注册">
        <a href="javascript:;" slot="his"><img src="../../images/shouy.png" alt=""></a>
        <router-link to="/denglu" slot="right">登录</router-link>
      </login-header>
      <my-footer></my-footer>
      <my-content>
        <mt-navbar v-model="selected">
          <mt-tab-item id="l1"><a href="javascript:;" @click="show=true">普通注册</a></mt-tab-item>
          <mt-tab-item id="l2"><a href="javascript:;" @click="show=false">手机注册</a></mt-tab-item>
        </mt-navbar>
        <div class="alert" v-if="show">
          <p>
            <a href="#">
              不想注册?QQ一键登录或微博一键登录
            </a>
          </p>
        </div>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="l1">
            <mt-cell :title="'用户名'" >
                <input type="text" v-model="name" class="selected-input" placeholder="请输入6-20个字符">
            </mt-cell>
            <mt-cell :title="'设置密码'" >
                <input type="text" v-model="pass" class="selected-input" placeholder="请输入6-20位密码">
            </mt-cell>
            <mt-cell :title="'确认密码'" >
                <input type="text" v-model="pass2" class="selected-input" placeholder="请再次输入密码">
            </mt-cell>
            <mt-cell :title="'邮箱'" >
              <input type="text" v-model="em" class="selected-input" placeholder="请输入常用邮箱地址">
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="l2">
            <mt-cell :title="'手机号'">
              <input type="text" class="selected-input" placeholder="请输入手机号">
            </mt-cell>
            <mt-cell :title="'验证码'">
              <input type="text" class="selected-input-h" placeholder="输入4位验证码">
              <img ref="img" @click="images" class="register-img" src="http://m.mango918.com/mobile/index.php?act=seccode&op=makecode&k=&t=0.7788576333133326" alt="">
            </mt-cell>
          </mt-tab-container-item>
        </mt-tab-container>

        <mt-button type="primary"  @click="login" ref="btn">注册</mt-button>
      </my-content>
  </div>
</template>

<script>
  import axios from "axios"
  import { Toast } from 'mint-ui';
  export default{
      name:"my-register",
    data(){
          return{
            selected:"l1",
            name:"",
            pass:"",
            pass2:"",
            em:"",
            show:true
          }
    },
    methods:{
        login(){
          /****邮箱验证不了******/
          var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
          if(this.pass!=this.pass2){
              Toast('密码不一，请确认密码');
              return;
            }else if(re.test(this.em)){
                Toast('邮箱格式错误');
                return;
            }else{
            axios.get("http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userID="+this.name+"&password="+this.pass)
              .then(res=>{
                  console.log(res.data)
                  if(res.data==0){
                    Toast('用户名重名');
                  }else if(res.data==2){
                      Toast("数据库报错")
                  }else{
                    Toast('注册成功');
                  }
              })
          }
        },
      images(){
       this.$refs['img'].setAttribute("src","http://m.mango918.com/mobile/index.php?act=seccode&op=makecode&k=&t=0.7788576333133326")
      }
    },
    mounted(){
    }
  }
</script>

<style lang="scss" scoped="">
    .register{  background: #eff2f5; height: 100vh;}
    a{text-decoration: none; color: black; font-size: .13rem}

    .mint-cell-text{float: right !important; }
    .register-img{ width: .88rem; height: .3rem;}
    .selected-input-h{width: 1.9rem;outline: medium; border: none;}
  .selected-input{ width:2.8rem; border: none; outline: medium}
    .alert{ background: #FCF8E3; padding: 15px 0; border: 1px solid #FBEED5; margin: 10px 0;
      p{ text-align: center;
        a{color:#927036; font-size: 13px;}
      }
    }
    .mint-button--primary{ width: 90%; margin:.3rem .19rem; background: #ED5564;}
</style>
