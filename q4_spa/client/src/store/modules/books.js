import fetchBooks from '../../services/fetchBooks'
import {
  BOOKS_LIST_SUCCESS,
  BOOKS_LIST_ERROR,
  BOOKS_LIST_LOADING
} from '../../store/mutation-types'

const state = {
  books: [],
  error: '',
  loading: false
}

function success (books) {
  return { type: BOOKS_LIST_SUCCESS, books }
}

function error (error) {
  return { type: BOOKS_LIST_ERROR, error }
}

function loading (loading) {
  return { type: BOOKS_LIST_LOADING, loading }
}

const getters = {
  error: state => state.error,
  loading: state => state.loading,
  books: state => state.books
}

const actions = {
  retrieve ({ commit }, data) {
  }
}

const mutations = {
  [BOOKS_LIST_SUCCESS] (state, payload) {
    state.books = payload.books
  },
  [BOOKS_LIST_ERROR] (state, payload) {
    state.error = payload.error
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
