<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
let wordpress = ref([])

let loaded = ref(false)

let fetchData = async () => {
  try {
    const response = await fetch('https://p-api.hrbr.ca/wp-json/wp/v2/project')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    wordpress.value = data.map(item => ({
  ...item,
  height: Math.floor(Math.random() * 600) + 300
}))

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
  <section>
    <h1>My work</h1>
    <ul v-if="loaded" class="masonry">
      <li
        v-for="(item, index) in wordpress"
        :key="item.id"
        :data-index="index"
        :style="{ 'animation-delay': index * 100 + 'ms' }"
        class="project"
      >
        <RouterLink :to="{ name: 'ProjectView', params: { slug: item.slug } }"
        :style="{ height: `${item.height}px` }">
          <figure class="info">
            <p>{{ item.acf.title }}</p>
            <p>{{ item.acf.date }}</p>
          </figure>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>


<style scoped>
section {
  place-items: center;
  padding-top:10rem;
}
h1{
  color: #a9c03e;
  font-family: 'audiowide';
  padding-bottom: 2rem;
}
ul {
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  font-family: 'red hat mono';
  columns: 5;
  column-gap: 1rem;
  width: 80%;
}
.project {
  list-style: none;
  break-inside: avoid;
  display: inline-block;
  width: 100%;
  animation:
    appear 1.5s ease-in,
    float 3s ease-in-out infinite;
  opacity: 0;
  animation-fill-mode: forwards;
  margin-bottom: 1rem;
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
  background-color: #a9c03e;
  border-radius: 10px;
  padding: 40% 1rem 1rem 1rem;
}
a {
  text-decoration: none;
  font-weight: 500;
  font-size: 1.25em;
  color: black;
}
p {
  color: black;
}
@media screen and (max-width:1024px) {
  ul{
    columns: 3;
  }
}
@media screen and (max-width:600px) {
  ul{
    columns: 2;
  }
}
</style>
