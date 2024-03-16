import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SkillsView from '../views/SkillsView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import EducationView from '../views/EducationView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import(/* webpackChunkName: "about" */ '../views/SkillsView.vue')
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExperienceView.vue')
  },
  {
    path: '/education',
    name: 'education',
    component: () => import(/* webpackChunkName: "about" */ '../views/EducationView.vue')
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
