import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { 
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('@/views/TeamView.vue')
  }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})