import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'array',
    component: () => import('../components/Array.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
