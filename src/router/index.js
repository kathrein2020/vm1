import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import MovieDetail from '../views/MovieDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/movie/:id',
      name: 'Movie Detail',
      component: MovieDetail
    }
   
  ]
})

export default router
