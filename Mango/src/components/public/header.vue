<template>
  <div class="header" ref="header">
    <ul>
      <li class="header-btn"><img src="../../images/mobile_logo.png" alt=""></li>
      <li class="header-txt">
        <img src="../../images/shous.png" alt="">
          <router-link to="/search">
            <input type="text" placeholder="插线盘">
          </router-link>
      </li>
      <li class="header-btn"><img src="../../images/message_ws.png" alt=""></li>
    </ul>
  </div>
</template>

<script>
  export default{
      name:"my-header",
      methods:{
        menu(){
          this.scroll = document.body.scrollTop;
          if(this.scroll>"44"&&this.scroll<"256"){
              this.$refs.header.style.background ="rgba(172, 32, 35, 0)"
          }else if(this.scroll>"256"){
            this.$refs.header.style.background ="rgba(172, 32, 35, 0.8)"
          }else{
            this.$refs.header.style.background ="rgba(172, 32, 35, 1)"
          }
        }
      },
      mounted(){
        window.addEventListener('scroll', this.menu)
      },
    beforeDestroy(){
      console.log("beforeDestroy26")
      window.removeEventListener('scroll', this.menu)
    }
  }
</script>

<style lang="scss" scoped>
  *{ margin: 0; padding: 0}
  li{ list-style: none}
  .header{width: 100%; height: 44px; box-sizing: border-box; position: fixed; top: 0; left: 0; z-index: 100; background: rgba(172, 32, 35, 1);
      &>ul{ display: flex;
        &>.header-btn{width: 40px; height: 44px;
          img{ width:25px; height: 25px; margin-top:9px; float: left; padding: 0 9px}
        }
        &>.header-txt{ flex: 1; width: 100%; height: 34px; background: #fff; border-radius: 20px; margin-top: 5px;
          img{ width: 30px; height: 30px;  float: left; padding: 2px 10px; text-align: center}
          input{float: left; margin:10px 0; border: none; }
        }
      }
  }
</style>
