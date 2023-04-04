import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/expand-cards',
      name: 'ExpandCardsView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ExpandCardsView.vue')
    },
    {
      path: '/progress-steps',
      name: 'ProgressStepsView',
      component: () => import('../views/ProgressStepsView.vue'),
    },
    {
      path: '/rotating-navigation',
      name: 'RotatingNavigationView',
      component: () => import('../views/RotatingNavigationView.vue'),
    }
  ]
})

export default router
