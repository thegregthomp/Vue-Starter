import Vue from 'vue'
import Router from 'vue-router'

import {
  routes
} from './routes'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'is-active',
  mode: 'history',
  routes,
  base: ''
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // if (localStorage.getItem('jwt') == null) {
    //   //isn't valid
    //   next({
    //     path: '/login',
    //     params: {
    //       nextUrl: to.fullPath
    //     }
    //   })
    // } else {
      // let user = JSON.parse(localStorage.getItem('user'))
      // if (to.matched.some(record => record.meta.is_admin)) {
      //   if (user.is_admin == 1) {
      //     next()
      //   } else {
      //     next({
      //       name: 'userboard'
      //     })
      //   }
      // } else {
      //   next()
      // }
      next()
    // }
  } else {
    next()
  }
})

export default router
