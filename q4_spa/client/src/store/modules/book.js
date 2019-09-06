import fetchBook from '../../services/fetchBook'
import {
  BOOK_SHOW_SUCCESS,
  BOOK_SHOW_ERROR,
  BOOK_SHOW_LOADING,
  BOOK_SHOW_RESET,
  BOOK_PRELOAD_SUCCESS
} from '../../store/mutation-types'

const state = {
  book: {},
  error: '',
  loading: false
}

function success (book) {
  return { type: BOOK_SHOW_SUCCESS, book }
}

function preload (book) {
  return { type: BOOK_PRELOAD_SUCCESS, book }
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
  retrieve ({ commit }, slug) {
    commit(loading(true))
    fetchBook(slug)
      .then(response => response.json())
      .then(response => {
        commit(loading(false))
        if (response.statusCode !== 404) {
          commit(success(response))
        } else {
          commit(error(response.message))
        }
      })
      .catch(e => {
        commit(error(e))
        commit(loading(false))
      })
  },
  preload ({ commit }, book) {
    commit(preload(book))
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
  [BOOK_PRELOAD_SUCCESS] (state, payload) {
    state.book = payload.book
  },
  [BOOK_SHOW_RESET] (state, payload) {
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
