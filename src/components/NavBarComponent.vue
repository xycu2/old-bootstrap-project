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
            <li class="nav-item">
              <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/team" class="nav-link">Our Team</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" >RuStore</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>