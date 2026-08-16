<template>
  <div class="container my-5">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
      <TeamCard v-for="card in cards" :key="card.id" :cardData="card" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TeamCard from "@/components/TeamCard.vue";

const cards = ref([
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
  },
]);
</script>

<style lang="scss">
.card {
  border-radius: 1em;
  text-align: center;
  padding: 1em;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  img {
    border-radius: 50%;
    width: 60%;
    margin: auto;
  }
}
</style>
