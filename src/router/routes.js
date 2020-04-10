import Components from '../components'

// import { routePropResolver } from './util'

export const routes = [
    {
      path: '/foo',
      component: Components.BaseComponent
    }, {
      path: '/',
      redirect: 'foo'
    }, {
      path: "*",
      component: Components.PageNotFound
    }
]
