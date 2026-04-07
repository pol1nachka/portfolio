<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
let wordpress = ref([])

let loaded = ref(false)

let fetchData = async () => {
  try {
    const response = await fetch('https://p-api.hrbr.ca/wp-json/wp/v2/project?acf_format=standard')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    const formattedData = data.map((item) => ({
      ...item,
      height: Math.floor(Math.random() * 600) + 300,
      imageUrl: item.acf?.project?.url || '',
    }))
    wordpress.value = formattedData.sort(() => Math.random() - 0.5)

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
  <div v-if="!loaded" class="loading-state">
    <img src="../IMAGES/v2.gif" alt="Loading..." />
  </div>
  <section v-if="loaded">
    <h1>My work</h1>
    <ul class="masonry">
      <RouterLink
        v-for="(item, index) in wordpress"
        :key="item.id"
        class="project"
        :to="{ name: 'ProjectView', params: { slug: item.slug } }"
        :style="{
          animationDelay: `${index * 200}ms`,
          height: `${item.height}px`,
          backgroundImage: item.imageUrl ? `url(${item.imageUrl})` : 'none',
        }"
      >
        <figure class="info">
          <div>
            <p class="pj-title">{{ item.acf?.title }}</p>
            <p class="date">{{ item.acf?.date }}</p>
          </div>
        </figure>
      </RouterLink>
    </ul>
  </section>
</template>

<style scoped>
section {
  display: block;
  width: 100%;
  place-items: center;
  padding-top: 10rem;
}
.loading-state {
  width: 100%;
  display: grid;
  place-items: center;
}
img {
  height: 100vh;
  object-fit: cover;
}
h1 {
  color: #a9c03e;
  font-family: 'audiowide';
  padding-bottom: 2rem;
}
ul {
  display: block;
  font-family: 'red hat mono';
  columns: 3;
  column-gap: 2rem;
  width: 80%;
}
.project {
  position: relative;
  list-style: none;
  break-inside: avoid;
  display: block;
  width: 100%;
  animation:
    appear 1.5s ease-in,
    float 3s ease-in-out infinite;
  opacity: 0;
  animation-fill-mode: forwards;
  margin-bottom: 1rem;
  background-size: cover;
  background-position: CENTER;
  background-repeat: no-repeat;
  background-color: #a9c03e;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
}
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes appear {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.project-enter-from {
  opacity: 0;
  transform: translateY(-40px);
}

.info {
  display: grid;
  place-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  background-image: linear-gradient(rgba(66, 81, 0, 0.7), rgba(0, 0, 0, 0.7));
  width: 100%;
  height: 100%;
  color: #a9c03e;
  padding: 2rem;
  text-align: center;
}
.project:hover .info {
  opacity: 1;
}

a {
  text-decoration: none;
  font-weight: 500;
  font-weight: 900;
  font-size: 2em;
}
.pj-title {
  font-family: 'audiowide';
}
.date {
  font-weight: 400;
}
@media screen and (max-width: 1024px) {
  ul {
    columns: 2;
  }
  .project {
    max-height: 400px;
    background-position: center;
  }
}
@media screen and (max-width: 600px) {
  ul {
    columns: 1;
  }
  .project {
    max-height: 200px;
    background-position: center;
  }
}
</style>
