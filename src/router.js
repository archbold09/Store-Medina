import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/aseo',
      name: 'aseo',
      component: () => import('./views/Aseo.vue')
    },
    {
      path: '/listproductos',
      name: 'listproductos',
      component: () => import('./views/ListProductos.vue')
    },
    {
      path: '/alimentos',
      name: 'alimentos',
      component: () => import('./views/Alimentos.vue')
    },
  ]
})

