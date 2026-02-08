<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref, onMounted,onUnmounted} from 'vue'
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav :class="{ scrolled: scrolled }">
    <figure>
      <RouterLink class="link" to="/">
      <svg
    class="logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 241.55 275.42">
    <polygon fill="currentColor" points="115.36 0 115.36 66.68 148.7 100.02 148.7 0 115.36 0"/>
    <polygon fill="currentColor" points="208.21 0 208.21 275.42 241.55 241.11 241.55 0 208.21 0"/>
    <polygon fill="currentColor" points="148.7 143.99 111.26 181.44 111.26 275.42 149.07 237.61 148.7 143.99"/>
    <polygon fill="currentColor" points="47.78 196.18 120.83 123.12 0 2.3 0 275.42 33.52 241.9 33.52 209.71 47.78 196.18"/>
  </svg>
  </RouterLink>
    </figure>
    <figure class="links">
      <RouterLink class="link" to="/projects">Projects</RouterLink>
      <a href="../public/ff0659777e4682893297b87e18624a42.jpg" download>Portfolio</a>
    </figure>
  </nav>
  <RouterView />
</template>

<style>
body {
  background-color: black;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Mono:ital,wght@0,300..700;1,300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
nav {
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 50;
 background: transparent;
  transition: background-color 0.3s ease;
}
.logo {
  max-width: 3rem;
  color: #a9c03e;
  margin-left: 1rem;
  place-self: center;
}
nav.scrolled {
  background: #a9c03e;
  a, .logo{
    color: black;
  }
 
}
.links{
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
}

nav a {
  margin-right: 2rem ;
  font-family: 'red hat mono';
  text-decoration: none;
  color: #a9c03e;
  font-size: clamp(12px, 20px, 32px);
}

.link:hover {
  text-decoration: underline;
}
</style>
