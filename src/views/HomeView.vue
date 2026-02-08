<script setup>
import AboutMe from '@/components/AboutMe.vue'
import LandingPage from '@/components/LandingPage.vue'
</script>

<template>
  <div class="list">
    <LandingPage />
    <AboutMe />
  </div>
</template>

<style>
.list {
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
}
</style>
