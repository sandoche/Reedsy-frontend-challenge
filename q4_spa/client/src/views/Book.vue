<template>
  <main class="book container">
    <nav>
      <router-link :to="{ name: 'books'}">< Back</router-link>
    </nav>
    <header>
      <img :src="book.cover" :alt="`${book.title} ${$t('books.cover_alt')}`" class="book__image"/>
      <div>
        <h1 class="book__title">{{ book.title }}</h1>
        <p class="book__author">{{ book.author }}</p>
      </div>
      <base-book-review
        :rating="book.rating"
        :upvoted="book.upvoted"
        :upvotes="book.upvotes"
      >
      </base-book-review>
    </header>
    <section>
      <h2>{{ $t('book.synopsis') }}</h2>
      <p>
        {{ book.synopsis }}
      </p>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BaseBookReview from '../components/BaseBookReview.vue'

export default {
  name: 'Book',
  components: {
    BaseBookReview
  },
  created () {
    this.reset()
    this.retrieve(this.$route.params.slug)
  },
  methods: {
    ...mapActions({
      retrieve: 'book/retrieve',
      reset: 'book/reset'
    })
  },
  computed: {
    ...mapGetters({
      book: 'book/book',
      error: 'book/error',
      loading: 'book/loading'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/shared.scss';
</style>
