import { createRouter, createWebHashHistory } from 'vue-router'
import SignView from '../views/SignView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: SignView
  },
  {
    path: '/verify',
    name: 'verify',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VerifyView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
