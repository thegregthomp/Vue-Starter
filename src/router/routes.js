import Components from '../components'

// import { routePropResolver } from './util'

export const routes = [
    {
      path: '/',
      redirect: 'dashboard'
    }, {
      path: '/login',
      component: Components.LoginComponent,
      meta: {
        guest: true
      }
    }, {
      path: '/dashboard',
      component: Components.DashboardComponent,
      meta: {
        requiresAuth: true
      }
    }, {
      path: "*",
      component: Components.PageNotFound
    }
]
