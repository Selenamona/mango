<!------登录-------->
<template>
  <div class="login">
    <!--------头部--------->
    <login-header title="登录">
      <a href="javascript:;" slot="his"><img src="../../images/shouy.png" alt=""></a>
      <router-link to="/zhuche" slot="right">注册</router-link>
    </login-header>
    <!--------头部结束--------->
    <my-footer></my-footer>
    <my-content>
        <div class="alert">
            <p>
              <a href="#">
                无需注册 点我QQ一键登录 即可【0元抽奖】
              </a>
            </p>
        </div>
        <div class="login-content">
            <ul>
              <li class="login-li1">
                <p>账  号</p>
                <input @keyup="doSomethingElse" type="text" v-model="name" placeholder="用户名/已验证手机/QQ请点底部图标">
              </li>
              <li>
                <p>密  码</p>
                <input @keyup="doSomethingElse" type="text" v-model="pass" placeholder="请输入登录密码">
              </li>
            </ul>
        </div>
      <div class="remember-form">
          <label>
            <input type="checkbox">
            七天自动登录
          </label>
          <a href="#" class="remember-wang"> 忘记密码？</a>
        <a href="#" class="remember-to"> 去商家后台？</a>
      </div>

          <mt-button type="primary" disabled  @click="login" ref="btn">登录</mt-button>
    </my-content>
  </div>
</template>

<script>
  import axios from "axios"
  import { Toast,Indicator } from 'mint-ui';
  export default{
      name:"longin-index",
      data(){
          return{
            name:"",
            pass:"",
            disabled:false
          }
      },
    methods:{
        login(){
          Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
          });
          axios.get("http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+this.name+"&password="+this.pass)
            .then(res=>{
                console.log(res.data);
                this.$store.dispatch("loginData",res.data);
                if(res.data==0){
                  Indicator.close();
                  Toast('用户名不存在');
                }else if(res.data==2) {
                  Indicator.close();
                  Toast('用户名密码不符');
                }else{
                  Indicator.close();
                  Toast('登录成功');
                  location.href = "#/mine"
                }
            })
        },
      doSomethingElse(){
            if(this.name&&this.pass){
                this.$refs["btn"].disabled = this.disabled
            }else{
              this.$refs["btn"].disabled = !this.disabled
            }
        }
    },
    mounted(){

    }
  }
</script>

<style lang="scss" scoped="">
  .login{  background: #eff2f5; height: 100vh;}
  a{ text-decoration: none; }
  .alert{ background: #FCF8E3; padding: 15px 0; border: 1px solid #FBEED5;
    p{ text-align: center;
      a{color:#927036; font-size: 13px;}
    }
  }
  .login-content{ margin-top: 10px; background: #fff; padding-left: .2rem;
      li{ width: 100%; height: .43rem; line-height: .43rem;
        p{float: left; padding:0 .1rem 0 .3rem; font-size: 13px;}
        input{ float: left; width:2.76rem; margin: .12rem 0; border:none; outline: medium}
      }
      li.login-li1{ border-bottom: 1px solid #eee;}
  }

  .remember-form{ margin-top: .2rem; position:relative; padding: 0 .3rem; font-size: 13px; overflow: hidden;
    label{}
    .remember-wang{ float: right}
    .remember-to{ float: right; padding-right: .1rem;}
  }

  .mint-button--primary{ width: 90%; margin:.3rem .19rem; background: #ED5564;}
</style>
