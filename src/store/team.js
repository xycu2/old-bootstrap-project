import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTeamStore = defineStore('team', () => {
  const selectedRole = ref('all')
  const members = ref([
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
    ])

  const filteredDevs = computed(() => {

    if (selectedRole.value === 'all') {
      return members.value
    }

    return members.value.filter(dev => dev.role === selectedRole.value)
  } )

  const setRole = (role) => {
    selectedRole.value = role
  }

  return {
    selectedRole,
    members,
    filteredDevs,
    setRole
  }
}) 