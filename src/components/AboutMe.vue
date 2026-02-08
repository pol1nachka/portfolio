<script setup>
import { onMounted, ref } from 'vue'
let wordpress = ref([])

let loaded = ref(false)

let fetchData = async () => {
  try {
    const response = await fetch(
      'https://polina35.582mi.com/web-portfolio/wp-json/wp/v2/homepage/73/?acf_format=standard',
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    wordpress.value = data.acf

    loaded.value = true
  } catch (error) {
    console.error(error)
  }
}
onMounted(() => {
  fetchData()
})
</script>

<template>
  <section class="landing-page">
    <figure>
    <img :src="wordpress.image?.url" alt="" />
    </figure>
    <div class="text">
      <h1>{{ wordpress.title }}</h1>
      <p>{{ wordpress.description }}</p>
      <RouterLink to="/projects" class="link">Check out my work!</RouterLink>
    </div>
  </section>
</template>
<style scoped>
section {
  color: #a9c03e;
  font-family: 'red hat mono';
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
}
.text {
  padding: 3rem;
  background: #00000075;
  line-height: 1.5;
  max-width: 35rem;
}
p {
  margin: 1rem 0;
}
img {
  width: 100%;
  height: 100vh;
  pointer-events: none;
  object-fit: cover;
}
.link{
    background-color: #a9c03e;
    color: black;
    padding: 1em;
    display: inline-block;
}
</style>
