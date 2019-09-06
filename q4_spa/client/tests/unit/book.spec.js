import { mount } from '@vue/test-utils'
import Book from '../../src/views/Book.vue'
import store from '../../src/store/index'
import fetchBook from './mock/fetchBook'

const goodBook =     {
  author: "Marcel Proust",
  cover: "01.jpg",
  rating: "9.9",
  slug: "in-search-of-lost-time",
  synopsis: "In Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.\nIn Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.",
  title: "In Search of Lost Time",
  upvoted: false,
  upvotes: 1111
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

  it('Renders book\'s author', () => {   
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

    expect(wrapper.html()).toContain(goodBook.author)
  })

  it('Renders book\'s synopsis', () => {   
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

    expect(wrapper.html()).toContain(goodBook.synopsis)
  })

  it('Renders book\'s rating', () => {   
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

    expect(wrapper.html()).toContain(goodBook.rating)
  })

  it('Renders book\'s upvotes', () => {   
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

    expect(wrapper.html()).toContain(goodBook.upvotes)
  })

  it('Renders book\'s cover', () => {   
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

    expect(wrapper.html()).toContain(goodBook.cover)
  })

})

const bookRoute = (slug) => ({
 name: 'book',
 params: { slug }
})
