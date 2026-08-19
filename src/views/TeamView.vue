<template>
  <div class="container my-5">
    <div class="buttons">
      <button @click="store.setRole('all')">ВСЕ</button>
      <button @click="store.setRole('frontend')">Frontend</button>
      <button @click="store.setRole('backend')">Backend</button>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
      <TeamCard v-for="member in store.filteredDevs" :key="member.id" :member="member" />
    </div>
  </div>
</template>

<script setup>
import TeamCard from "@/components/TeamCard.vue";

import { useTeamStore } from "@/store/team";

const store = useTeamStore()

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
