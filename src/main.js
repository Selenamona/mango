// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import MinUI from "mint-ui"
import 'mint-ui/lib/style.css'
import './components/mine/iconfont.css'
import "@/iconfont/iconfont.css"
import Footer from "./components/public/footer.vue"
import Header from "./components/public/header.vue"
import Content from "./components/public/content.vue"
import LoginHeader from "./components/public/login-header.vue"

import HeaderClass from "./components/public/header-class.vue"
import ContentClass from "./components/public/content-class.vue"

Vue.component(ContentClass.name,ContentClass);
Vue.component(HeaderClass.name,HeaderClass);
Vue.component(Footer.name,Footer);
Vue.component(Header.name,Header);
Vue.component(Content.name,Content);
Vue.component(LoginHeader.name,LoginHeader);

Vue.config.productionTip = false
Vue.use(MinUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
