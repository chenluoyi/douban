import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import movie from '@/page/movie'
import book from '@/page/book'
import mine from '@/page/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/movie',
      component: movie
    },
    {
      path: '/book',
      component: book
    },
    {
      path: '/mine',
      component: mine
    }
  ]
})
