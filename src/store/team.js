import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTeamStore = defineStore('team',{
  state: () => ({
    selectedRole: 'all',
    members: [
      {
    id: 0,
    avatar: "/xycu2.jpg",
    title: "Xycu2",
    text: " Front-end developer. I transfer Figma mockups pixel-for-pixel using SCSS. I'm currently studying JavaScript in-depth, and my next big goal is mastering Vue.js.",
    link: "https://t.me/the_JavaScript",
    class: "btn-dark",
    role: 'frontend'
  },
  {
    id: 1,
    avatar: "/kosmo.jpg",
    title: "Kosmonavt001",
    text: "I'm a Developer, I love Programming apps on Flutter Favorite programming languages are Python, Dart, Java",
    link: "#",
    class: "btn-info",
    role: 'backend'
  },
  {
    id: 2,
    avatar: "/djifffb.png",
    title: "djifffb",
    text: "I'm a backend developer and love my job. I work on a lot of cool and awesome projects.",
    link: "#",
    class: "btn-success",
    role: 'backend'
  },
  {
    id: 3,
    avatar: "/korsan.jpg",
    title: "Korsany",
    text: "friend kosmonavt001",
    link: "#",
    class: "btn-success",
    role: 'backend'
  },
    ]
  }),
  getters: {

    filteredDevs: (state) => {

      if (state.selectedRole === 'all') {
        return state.members
      }

      return state.members.filter(dev => dev.role === state.selectedRole)
    }
  },

  actions: {
    setRole(role) {
      this.selectedRole = role
    }
  }

})