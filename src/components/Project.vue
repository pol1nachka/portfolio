<script setup>
defineOptions({
  name: 'ProjectPage',
})
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

let project = ref([])

let loaded = ref(false)

let fetchData = async () => {
  try {
    const response = await fetch(
      `https://p-api.hrbr.ca/wp-json/wp/v2/project?slug=${route.params.slug}&acf_format=standard`,
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    project.value = Array.isArray(data) && data[0].acf

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
  <section class="project">
    <div class="hero-bg" :style="{ '--bg-image': `url(${project.project?.url})` }"></div>
    <section class="content">
      <section class="header">
        <p class="title">{{ project.title }}</p>
        <p class="date">{{ project.date }}</p>
      </section>
      <section class="main-desc">
        <figure class="synopsis">
          <p>Project</p>
          <p class="synopsis-desc">{{ project.synopsis }}</p>
          <p class="tools">Tools: {{ project.tools }}</p>
          <a :href="project.link">PROJECT LINK</a>
        </figure>
      </section>
      <section class="desc">
        <figure>
          <p class="desc-title">Challenge</p>
          <p>{{ project.challenge }}</p>
        </figure>
        <figure>
          <p class="desc-title">Solution</p>
          <p>{{ project.solution }}</p>
        </figure>
      </section>
    </section>
  </section>
</template>

<style scoped>
.project {
  padding-top: 40vh;
  position: relative;
  width: 100%;
  min-height: 100vh;
}
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 35vh;
  z-index: -1;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(66, 81, 0, 0.7), rgba(0, 0, 0, 0.7)), var(--bg-image);
}
.header {
  width: 100%;
  background-color: transparent;
  padding-bottom: 1em;
  min-height: 7.5em;
  animation: slide 1s;
}
img {
  width: 100%;
  object-fit: cover;
  z-index: -1;
}

@keyframes slide {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.title {
  color: #a9c03e;
  font-family: 'audiowide';
  font-size: clamp(24px, 48px, 64px);
  padding-left: 3rem;
  animation: appear 1.5s;
  animation-delay: 0.1s;
  opacity: 0;
  animation-fill-mode: forwards;
}
@keyframes appear {
  0% {
    transform: translateX(-50%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.content {
  position: relative;
  z-index: 1;
}
.date {
  font-family: 'red hat mono';
  font-weight: 100;
  font-size: clamp(16px, 24px, 32px);
  padding-left: 3rem;
  animation: appear 1.5s;
  animation-delay: 0.3s;
  opacity: 0;
  animation-fill-mode: forwards;
  color: #a9c03e;
}
.main-desc {
  width: 100%;
  font-family: 'red hat mono';
  color: #a9c03e;
  padding: 2em;
  place-items: center;
  margin-top: 2em;
}
.synopsis {
  max-width: 45em;
  padding: 2em;
}
.synopsis-desc {
  font-size: clamp(20px, 24px, 28px);
  font-weight: 500;
}
.tools {
  font-size: clamp(14px, 18px, 20px);
  font-weight: 300;
  margin-top: 2em;
}
.desc {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  place-items: center;
  gap: 2em;
  font-family: 'red hat mono';
  color: black;
  font-size: clamp(14px, 24px, 32px);
}
.desc figure {
  padding: 2em;
  margin: 2em;
  background-color: #a9c03e;
  border-radius: 10px;
  max-width: 45em;
}
.desc-title {
  font-weight: 900;
  font-size: clamp(24px, 32px, 36px);
  padding-bottom: 1rem;
}
a {
  display: inline-block;
  color: black;
  font-weight: 800;
  font-size: clamp(20px, 24px, 28px);
  margin-top: 2rem;
}
@media screen and (max-width: 600px) {
  .main-desc {
    grid-template-columns: 1fr;
  }
}
</style>
