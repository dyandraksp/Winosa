import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView'
import About from '../views/AboutView'
import Portfolio from '../views/PortfolioView'
import Partner from '../views/PartnerView'
import Career from '../views/CareerView'
import Contact from '../views/ContactView'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/partner',
    name: 'Partner',
    component: Partner
  },
  {
    path: '/career',
    name: 'Career',
    component: Career
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(), // (process.env.BASE_URL),
  routes
})

export default router
