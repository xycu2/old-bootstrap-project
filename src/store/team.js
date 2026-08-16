import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTeamStore = defineStore('team', () => {
  const members = ref([
    {
    id: 0,
    avatar: "/xycu2.jpg",
    title: "Xycu2",
    text: " Front-end developer. I transfer Figma mockups pixel-for-pixel using SCSS. I'm currently studying JavaScript in-depth, and my next big goal is mastering Vue.js.",
    link: "https://t.me/the_JavaScript",
    class: "btn-dark",
  },
  {
    id: 1,
    avatar: "/kosmo.jpg",
    title: "Kosmonavt001",
    text: "I'm a Developer, I love Programming apps on Flutter Favorite programming languages are Python, Dart, Java",
    link: "#",
    class: "btn-info",
  },
  {
    id: 2,
    avatar: "/korsan.jpg",
    title: "Korsany",
    text: "friend kosmonavt001",
    link: "#",
    class: "btn-success",
  }
  ])

  return { members }
})