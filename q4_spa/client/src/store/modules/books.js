import fetchBooks from '../../services/fetchBooks'
import {
  BOOKS_LIST_SUCCESS,
  BOOKS_LIST_ERROR,
  BOOKS_LIST_LOADING,
  BOOKS_FILTER_RESULTS
} from '../../store/mutation-types'

const state = {
  books: [],
  originalBooks: [],
  error: '',
  loading: false
}

function success (books) {
  return { type: BOOKS_LIST_SUCCESS, books }
}

function error (error) {
  return { type: BOOKS_LIST_ERROR, error }
}

function filterResults (filter) {
  return { type: BOOKS_FILTER_RESULTS, filter }
}

function loading (loading) {
  return { type: BOOKS_LIST_LOADING, loading }
}

const getters = {
  books: state => state.books,
  error: state => state.error,
  loading: state => state.loading
}

const actions = {
  retrieve ({ commit }, data) {
    commit(loading(true))
    fetchBooks()
      .then(response => response.json())
      .then(response => {
        commit(success(response.books))
        commit(loading(false))
      })
      .catch(e => {
        commit(error(e))
        commit(loading(false))
      })
  },
  filterResults ({ commit }, filter) {
    commit(filterResults(filter))
  }
}

const mutations = {
  [BOOKS_LIST_SUCCESS] (state, payload) {
    state.books = payload.books
    state.originalBooks = payload.books
  },
  [BOOKS_LIST_ERROR] (state, payload) {
    state.error = payload.error
  },
  [BOOKS_FILTER_RESULTS] (state, payload) {
    const allbooks = state.originalBooks
    state.books = allbooks.filter(item => {
      return (item.title.toLowerCase().includes(payload.filter.toLowerCase()) || item.synopsis.toLowerCase().includes(payload.filter.toLowerCase()))
    })
  },
  [BOOKS_LIST_LOADING] (state, payload) {
    state.loading = payload.loading
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
