<template>
  <div class="col">
          <div class="card">
            <img :src="cardData.avatar" class="card-img-top" :alt="cardData.avatar" />
            <div class="card-body">
              <h5 class="card-title">{{ cardData.title }}</h5>
              <p class="card-text">
                {{ cardData.text }}
              </p>
              <a :href="cardData.link" :class="['btn', cardData.class]"
                >Telegram channel</a
              >
            </div>
          </div>
        </div>
</template>

<script setup>
defineProps({
  cardData: Object
})
</script>