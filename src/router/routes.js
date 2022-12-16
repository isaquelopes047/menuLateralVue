import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    titulo: 'Home',
    component: HomeView,
    icone: 'home',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    titulo: 'Dashboard',
    icone: 'dashboard',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/DashboardView.vue')
  },
  {
    path: '/registro',
    name: 'Registros',
    titulo: 'Registros',
    icone: 'registered',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/RegistrosView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    icone: 'fa',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router