import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import List from "@/components/list/index"
import Cart from '@/components/cart/index'
import Mine from "@/components/mine"
import Login from "@/components/login"
import Register from "@/components/register"
import Loadmore from "@/components/loadmore"
import Mint from "@/components/mintUi"
import LoadmoreVuex from "@/components/loadmoreVuex"

Vue.use(Router);

/*设置路由*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/loadmore',
      name: 'loadmore',
      component: Loadmore
    },
    {
      path: '/loadmoreVuex',
      name: 'loadmoreVuex',
      component: LoadmoreVuex
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/mint',     /*mint-ui组件练习*/
      name: 'mint',
      component: Mint
    }
  ]
})
