import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/home', name: 'Home', component: () => import('../views/Home.vue')},
    {path: '/contacto', name: 'Contacto', component: () => import('../views/Contacto.vue')},
    {path: '/floraFauna', name: 'FloraFauna', component: () => import('../views/FloraFauna.vue')},
    {path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue')},
  ],
})

export default router
