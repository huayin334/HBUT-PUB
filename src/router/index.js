import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import User from '@/pages/User'
import Recommend from '@/pages/Home/Recommend'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'router-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'recommend',
          name: 'Recommend',
          component: Recommend
        }
      ]
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
