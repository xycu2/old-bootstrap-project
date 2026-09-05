<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand p-0">
          <img src="/invTEAM.png" alt="icon" width="60" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li v-for="link in navStore.navLinks"
                :key="link.id"
                class="nav-item"
                >
                <router-link
                :to='link.path',
                class="nav-link"
                >{{ link.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>


<script setup lang="ts">
import { useNavigationStore } from '@/store/navigation';

const navStore = useNavigationStore()
</script>