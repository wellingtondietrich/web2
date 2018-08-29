import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../components/Layout'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Credito from '../pages/Credito'
import Debito from '../pages/Debito'
import Dashboard from '../pages/Dashboard'
import Perfil from '../pages/Perfil'
import Relatorio from '../pages/Relatorio'

Vue.use(Router)


const router = new Router({
    routes: [
      {
        path: '/',
        component: Login
      },
      {
        path: '/cadastro',
        component: Cadastro
      },
      {
        path: '/',
        component: Layout,
        children:[
          {
            path: '/credito',
            component: Credito
          },
          {
            path: '/dashboard',
            component: Dashboard
          },
          {
            path: '/debito',
            component: Debito
          },
          {
            path: '/perfil',
            component: Perfil
          },
          {
            path: '/relatorio',
            component: Relatorio
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