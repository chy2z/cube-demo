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
	    path: '/',
	    name:"Order",
      component: Order,
	    meta: {
	         keepAlive: true,
	         index:0
	    }
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage,
      meta: {
         keepAlive: true,
         index:0
      }
    },   
    {
      path: '/My',
      name: 'My',
      component: My,
      meta: {
         keepAlive: true,
         index:0
      }
    }, 
    {
      path: '/Order',
      name: 'Order',
      component: Order,
      meta: {
         keepAlive: true,
         index:0
      }
    },
    {
      path: '/Kind',
      name: 'Kind',
      component: Kind,
      meta: {
         keepAlive: true,
         index:0
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
         keepAlive: false,
         index:1
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
       meta: {
         keepAlive: false,
         index:1
      }
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting,
      meta: {
         keepAlive: false,
         index:1
      }
    }
  ]
})
