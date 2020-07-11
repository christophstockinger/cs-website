import { createRouter, createWebHistory } from 'vue-router'

const IndexPage = () =>
  import(/* webpackChunkName: "cs-index" */ '@cs/pages/index.vue')
const ErrorPage = () =>
  import(/* webpackChunkName: "cs-error" */ '@cs/pages/error.vue')

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
