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
    },
    {
      path: '/search-widget',
      name: 'SearchWidgetView',
      component: () => import('../views/SearchWidgetView.vue'),
    },
    {
      path: '/blur-image',
      name: 'BlurImageView',
      component: () => import('../views/BlurImageView.vue'),
    },
    {
      path: '/scroll-animation',
      name: 'ScrollAnimationView',
      component: () => import('../views/ScrollAnimationView.vue'),
    },
    {
      path: '/split-page',
      name: 'SplitPageView',
      component: () => import('../views/SplitPageView.vue'),
    },
    {
      path: '/wave-form',
      name: 'WaveFormView',
      component: () => import('../views/WaveFormView.vue'),
    },
    {
      path: '/sound-board',
      name: 'SoundBoardView',
      component: () => import('../views/SoundBoardView.vue'),
    },
    {
      path: '/dad-joke',
      name: 'DadJokeView',
      component: () => import('../views/DadJokeView.vue'),
    }
  ]
})

export default router
