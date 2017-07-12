import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from "@/components/home"
import DengLu from "@/components/login"
import Zhuche from "@/components/register"
import History from "@/components/history"
import Mine from "@/components/mine"
import Cart from "@/components/cart"
/***分类*****/
import Classes from "@/components/classes"
/****列表*****/
import List from "@/components/list"
/***详情页***/
import Detail from "@/components/detail"
/****搜索***/
import Search from "@/components/search"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/denglu',
      name: 'DengLu',
      component: DengLu
    },
    {
      path: '/zhuche',
      name: 'Zhuche',
      component: Zhuche
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/class',
      name: 'Classes',
      component: Classes
    },
    {
      path: '/list/:cityid',
      component: List
    },
    {
      path: '/detail/:goodsid',
      /*      children: [
       { path: "/detail/:goodsid", component: Detail }
       ],*/
      name: 'Detail',
      component: Detail
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
  ]
})
