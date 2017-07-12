
<!---------登录注册头部------------>

<template>
  <div class="login-header">
    <ul>
      <li class="header-btn">
        <slot name="his"></slot>
      </li>
      <li class="header-txt">{{title}}</li>
      <li class="header-btn">
        <slot name="right"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
      name:"login-header",
      data(){
          return{

          }
      },
    props:{
        title:{
            type:String,
            default:""
        }
    }
  }
</script>

<style lang="scss" scoped="">
    li{list-style: none}
    a{text-decoration: none;}
    .login-header{ width: 100%; height: 44px; box-sizing: border-box; background: #F8F8F8;
      ul{display: flex;
        li{font-size: 16px; line-height: 44px;}
        .header-btn{ width: 60px; text-align: center;
          img{width: 25px; height: 25px;padding: 9px 17px;}
          a{ color: red;}
        }
        .header-txt{ flex: 1; text-align: center; font-size: 20px}
      }
    }
</style>
