import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView'
import About from '../views/AboutView'
import Portfolio from '../views/PortfolioView'
import Partner from '../views/PartnerView'
import Career from '../views/CareerView'
import Contact from '../views/ContactView'
import Tim from '../views/TimView'
import detailcareer1 from '../views/detailcareer1'
import formcareer from '../views/formcareer'
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
  },
  {
    path: '/tim',
    name: 'Tim',
    component: Tim
  },
  {
    path: '/detailcareer1',
    name: 'detailcareer1',
    component: detailcareer1
  },
  {
    path: '/formcareer',
    name: 'formcareer',
    component: formcareer
  }
]

const router = createRouter({
  history: createWebHistory(), // (process.env.BASE_URL),
  routes
})

export default router
