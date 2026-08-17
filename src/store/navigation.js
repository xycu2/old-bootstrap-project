import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    navLinks: [
      {
        id: 1,
        path: '/',
        name: 'Home',
      },
      {
        id: 2,
        path: '/team',
        name: 'Our Team',
      },
      {
        id: 3,
        path: '/',
        name: 'RuStore',
      }
    ]
  })
})