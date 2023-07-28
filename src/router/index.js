import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    // route level code-splitting
    // this generates a separate chunk (contactUs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contactUs" */ '../views/ContactUs.vue')
  },
  {
    path: '/intro',
    name: 'intro',
    component: () => import('../views/IntroPage.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../views/ServicePage.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
