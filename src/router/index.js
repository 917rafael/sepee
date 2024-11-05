import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/teste',
      name: 'testte',
      component: () => import('../views/Teste.vue'),
    },
  ],
})

export default router
