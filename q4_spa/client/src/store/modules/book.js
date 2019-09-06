import {
  BOOK_SHOW_SUCCESS,
  BOOK_SHOW_ERROR,
  BOOK_SHOW_LOADING,
  BOOK_SHOW_RESET
} from '@/store/mutation-types'

const state = {
  book: {},
  error: '',
  loading: false
}

function success (book) {
  return { type: BOOK_SHOW_SUCCESS, book }
}

function error (error) {
  return { type: BOOK_SHOW_ERROR, error }
}

function loading (loading) {
  return { type: BOOK_SHOW_LOADING, loading }
}

function reset () {
  return { type: BOOK_SHOW_RESET }
}

const getters = {
  error: state => state.error,
  loading: state => state.loading,
  book: state => state.book
}

const actions = {
  retrieve ({ commit }, data) {
  },
  reset ({ commit }) {
    commit(reset())
  }
}

const mutations = {
  [BOOK_SHOW_SUCCESS] (state, payload) {
    state.book = payload.book
  },
  [BOOK_SHOW_ERROR] (state, payload) {
    state.error = payload.error
  },
  [BOOK_SHOW_LOADING] (state, payload) {
    state.loading = payload.loading
  },
  [BOOK_SHOW_RESET] (state, payload) {
    state.book = {}
    state.error = ''
    state.loading = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
