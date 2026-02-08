<script setup>
import { onMounted, ref } from 'vue'
let wordpress = ref([])

let loaded = ref(false)

let fetchData = async () => {
  try {
    const response = await fetch(
      'https://polina35.582mi.com/web-portfolio/wp-json/wp/v2/homepage/65/?acf_format=standard',
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
    <img :src="wordpress.image?.url" alt="" />
    <div class="text">
      <h1>{{ wordpress.title }}</h1>
      <p>{{ wordpress.description }}</p>
    </div>
  </section>
</template>
<style scoped>
section {
  color: white;
  height: 100vh;
  position: relative;
}
.text {
  position: absolute;
  bottom: 3rem;
  left: 2.5rem;
}
h1{
  font-family: 'audiowide';
  font-size: clamp(48px,64px,72px);
  color: #a9c03e;
  margin-bottom: 1rem;
}
p{
  font-family: 'red hat mono';
  font-size: clamp(24px,32px,36px);
  color: #a9c03e;
}
img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  z-index: -1;
}
</style>
