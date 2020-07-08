import { createRouter, createWebHistory } from 'vue-router'

const IndexPage = () => import('@cs/pages/index.vue')
const ImprintPage = () => import('@cs/pages/imprint.vue')
const ErrorPage = () => import('@cs/pages/error.vue')

const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexPage,
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/imprint',
    name: 'Imprint',
    component: ImprintPage,
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/error',
    name: 'Error',
    component: ErrorPage,
    meta: {
      layout: 'default'
    }
  }
]

const router = createRouter({
  base: '/',
  history: createWebHistory(),
  routes: routes
})

export default router
