import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tracks from '../views/Tracks.vue'
import Music from '../views/Music.vue'
import Album from '../views/Album.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/artists',
    name: 'artists',
    component: Home
  },
  {
    path: '/music/:artist',
    name: 'music',
    component: Music
  },
  {
    path: '/music/:artist/:album',
    name: 'album',
    component: Album,
    // meta: {
    //   breadcrumbs: [
    //     {name: 'music', link: "/music"},
    //     {name: 'Ремонт спецтехники'},
    //   ]
    // }
  },
  {
    path: '/tracks',
    name: 'tracks',
    component: Tracks
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
