<template>
  <div class="col">
          <div class="card">
            <img :src="member.avatar" class="card-img-top" :alt="member.avatar" />
            <div class="card-body">
              <h5 class="card-title">{{ member.title }}</h5>
              <p class="card-text">
                {{ member.text }}
              </p>
              <a :href="member.link" :class="['btn', member.class]"
                >Telegram channel</a
              >
            </div>
          </div>
        </div>
</template>

<script setup lang="ts">
import { TeamMember } from '@/store/team';

defineProps<{
  member: TeamMember
}>()
</script>