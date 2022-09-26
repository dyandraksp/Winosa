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
import detailcareer2 from '../views/detailcareer2'
import detailcareer3 from '../views/detailcareer3'
import XdemiaView from '../views/XdemiaView'
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
  },
  {
    path: '/detailcareer2',
    name: 'detailcareer2',
    component: detailcareer2
  },
  {
    path: '/detailcareer3',
    name: 'detailcareer3',
    component: detailcareer3
  },
  {
    path: '/XdemiaView',
    name: 'XdemiaView',
    component: XdemiaView
  }
]

const router = createRouter({
  history: createWebHistory(), // (process.env.BASE_URL),
  routes
})

export default router
