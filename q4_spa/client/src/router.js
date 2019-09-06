import Vue from 'vue'
import Router from 'vue-router'
import Books from './views/Books.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'books',
      component: Books
    },
    {
      path: '/book/:slug',
      name: 'book',
      component: () => import(/* webpackChunkName: "about" */ './views/Book.vue')
    },
    { 
      path: '*', 
      component: NotFound 
    }
  ]
})
