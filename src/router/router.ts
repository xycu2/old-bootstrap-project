// import type { Component } from 'vue'
import { createMemoryHistory, createRouter, type RouteRecordRaw } from 'vue-router'

// export interface RoutesLink {
//   path: string,
//   name?: string,
//   component: Component | (() => Promise<any>)
// }

const routes: RouteRecordRaw[] = [
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