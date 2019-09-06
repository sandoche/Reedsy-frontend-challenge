<template>
  <main class="books container">
    <input type="text" v-model="filter" @keydown="filterResults(filter)" :placeholder="$t('books.filter')" class="books__filter">
    <h1 class="books__title">{{ $t("books.title") }}<span class="accent">.</span></h1>
    <books-loader v-if="loading"></books-loader>
    <div class="books__list" v-if="!loading">
      <books-list-item
        v-for="(book, index) in books"
        :key="index"
        :author="book.author"
        :cover="book.cover"
        :rating="book.rating"
        :slug="book.slug"
        :synopsis="book.synopsis"
        :title="book.title"
        :upvoted="book.upvoted"
        :upvotes="book.upvotes"
      >
      </books-list-item>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BooksListItem from '../components/BooksListItem.vue'
import BooksLoader from '../components/BooksLoader.vue'

export default {
  name: 'Books',
  components: {
    BooksListItem,
    BooksLoader
  },
  data () {
    return {
      filter: ''
    }
  },
  created () {
    this.retrieve()
  },
  methods: {
    ...mapActions({
      retrieve: 'books/retrieve',
      filterResults: 'books/filterResults'
    })
  },
  computed: {
    ...mapGetters({
      books: 'books/books',
      error: 'books/error',
      loading: 'books/loading'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/shared.scss';

.books {
  &__title {
    font-size: $font-lg;
    margin-top: 128px;
    margin-bottom: 96px;
    font-weight: 900;
  }

  &__filter {
    padding: 8px;
    float: right;
    margin-top: 16px;

    @media (max-width: $breakpoint-sm) {
      float: none;
      width: 100%;
    }
  }
}
</style>
