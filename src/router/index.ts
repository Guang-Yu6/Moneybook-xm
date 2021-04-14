import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Money.vue'
import Label from '@/views/Label.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/components/NotFound.vue';
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/label',
    name: 'Label',
    component: Label
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics
  },
  {
    path:'*',
    component:NotFound
  }
]
const router = new VueRouter({
  routes
})

export default router
