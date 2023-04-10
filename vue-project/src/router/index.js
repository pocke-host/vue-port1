import { createRouter, createWebHistory } from 'vue-router'
import Nav from '../views/Nav.vue'
import Contact from '../views/Contact.vue';
import Home from '../views/Home.vue';
import Socials from '../views/Socials.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'nav',
      component: Nav
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/social',
      name: 'socials',
      component: Socials
    },
  ]
})

export default router