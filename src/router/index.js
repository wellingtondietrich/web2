import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../components/Layout'
import Login from '../pages/Login'
import Menu from '../pages/Menu'
import Cadastro from '../pages/Cadastro'

Vue.use(Router)


const router = new Router({
    routes: [
      {
        path: '/',
        component: Login
      },
      {
        path: '/',
        component: Layout,
        children:[
          {
            path: '/menu',
            component: Menu
          },
          {
            path: '/cadastro',
            component: Cadastro
          },
          {
            path: '/relatorio',
          },
          {
            path: '/credito',
          },
          {
            path: '/debito',
          }
        ]
      },
      {
        path: '/*',
        redirect: '/'
      }
    ]
});

export default router