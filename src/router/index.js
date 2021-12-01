import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/home',
    component: () => import ('@/views/Home.vue')
  },
  {
    path: '/about',
    component: () => import ('@/views/About.vue')
  },
  {
    path: '/test',
    component: () => import ('@/views/Test.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import ('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router