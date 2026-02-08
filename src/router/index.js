import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/projects',
      name: 'project-list',
      component: () => import('../views/ProjectListView.vue'),
    },
    {
      path: '/projects/:slug',
      name: 'ProjectView',
      component: () => import('../views/ProjectView.vue'),
    },
  ],
})

export default router
