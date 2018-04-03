import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/view/HomePage'
import My from '@/view/My'
import Order from '@/view/Order'
import Kind from '@/view/Kind'
import Setting from '@/view/Setting'
import Login from '@/view/Login'
import Register from '@/view/Register'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
    path: '*',
    redirect: '/HomePage'
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },   
    {
      path: '/My',
      name: 'My',
      component: My
    }, 
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/Kind',
      name: 'Kind',
      component: Kind
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting
    }
  ]
})
