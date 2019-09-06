import { mount } from '@vue/test-utils'
import Book from '../../src/views/Book.vue'
import store from '../../src/store/index'
import fetchBook from './mock/fetchBook'

const goodBook = {
  slug: 'in-search-of-lost-time',
  title: 'In Search of Lost Time'
}

describe('Book.vue', () => {

  it('Renders book\'s title', () => {
    const route = bookRoute(goodBook.slug)
    store.state.book.book = fetchBook(goodBook.slug)

    const wrapper = mount(Book, {
      store,
      mocks: {
        $route: route,
        $t: () => {}
      },
      stubs: ['router-link'],
    })

    expect(wrapper.html()).toContain(goodBook.title)
  })
})

const bookRoute = (slug) => ({
 name: 'book',
 params: { slug }
})
