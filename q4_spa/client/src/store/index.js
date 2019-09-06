import Vue from 'vue'
import Vuex from 'vuex'
import books from './modules/books'
import book from './modules/book'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    books,
    book
  }
})
