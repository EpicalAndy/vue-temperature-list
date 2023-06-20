import { createRouter, createWebHistory } from 'vue-router'
import TemperatureList from '@/views/TemperatureList.vue'
import AddCard from "@/views/AddCard.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TemperatureList
    },
    {
      path: '/add',
      name: 'add',
      component: AddCard
    }
  ]
})

export default router
