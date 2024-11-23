import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/n',
      name: 'nword',
      component: () => import('../views/nword.vue'),
    },
    {
      path: '/j',
      name: 'jword',
      component: () => import('../views/jword.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next('/n/')
  } else {
    next() 
  }
})

export default router
