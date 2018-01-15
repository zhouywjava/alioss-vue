import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import SecondComponent from '@/components/SecondComponent'

Vue.use(Router)

const First = {template:'<div><h2>我是第1个子页面</h2></div>'}


export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/first',
      name: 'first',
      component: First
    },
    {
      path: '/second',
      name: 'second',
      component: SecondComponent
    },
  ]
})
