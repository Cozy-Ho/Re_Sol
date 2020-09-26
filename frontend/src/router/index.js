import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/ManMain',
    name: 'ManMain',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ManMain.vue')
<<<<<<< HEAD
=======
  },
  {
    path: '/ManGoods',
    name: 'ManGoods',
    component: () => import(/* webpackChunkName: "about" */ '../views/ManGoods.vue')
  },
  {
    path: '/ManQR',
    name: 'ManQR',
    component: () => import(/* webpackChunkName: "about" */ '../views/ManQR.vue')
>>>>>>> b69faf4c... [Fix] .setcategory.js
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/Pos',
    name: 'Pos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
