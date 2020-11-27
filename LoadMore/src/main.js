// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'



import store from "./store"
import VueResource from "vue-resource"
/*Vue.use=>使用插件*/
Vue.use(VueResource);

/*引入Mint-ui全部组件*/
import Mint from "mint-ui"
Vue.use(Mint);

/*按需引入Mint-ui部分组件*/
/*import {Button} from "mint-ui"
 Vue.component(Button.name,Button);*/

/*引入自定义组件*/
import Header from "./components/public/header"
import Footer from "./components/public/footer"
import Content from "./components/public/content"
/*全局注册自定义组件*/
Vue.component("v-header",Header);
Vue.component(Footer.name,Footer);
Vue.component(Content.name,Content);


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  /*把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件;
    子组件能通过 this.$store 访问*/
  template: '<App/>',
  components: { App }
});
