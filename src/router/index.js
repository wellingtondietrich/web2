import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../components/Layout'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Credito from '../pages/Credito'
import Debito from '../pages/Debito'

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
            path: '/cadastro',
            component: Cadastro
          },
          {
            path: '/relatorio',
          },
          {
            path: '/credito',
            component: Credito
          },
          {
            path: '/debito',
            component: Debito
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