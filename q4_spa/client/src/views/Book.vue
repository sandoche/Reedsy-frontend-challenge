<template>
  <main class="book">
    <nav class="book__nav">
      <div class="container">
        <router-link :to="{ name: 'books'}">← Back</router-link>
      </div>
    </nav>
    <section class="book__section container" v-if="book.title || (error !== '' && loading)">
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
      <div class="book__synopsis">
        <h2>{{ $t('book.synopsis') }}</h2>
        <p>
          {{ book.synopsis }}
        </p>
      </div>
    </section>
    <section v-else-if="error !== ''">
      <not-found/>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BaseBookReview from '../components/BaseBookReview.vue'
import NotFound from './NotFound.vue'

export default {
  name: 'Book',
  components: {
    BaseBookReview,
    NotFound
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

.book {
  &__nav {
    height: 30vh;
    background: $primary-color;
    padding-top: 32px;

    a {
      color: #fff;
      font-size: $font-md;
      font-weight: 700;
      transition: all 0.4s ease;
      display: block;

      &:hover {
        transform: translateX(-10px) translateY(0) translateZ(0);
      }
    }
  }

  &__section {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-gap: 32px;
    margin-top: -15vh;
    justify-content: flex-end;
    align-items: flex-end;
  }

  &__image {
    width: 100%;
    box-shadow: 0 4px 12px rgba(32,43,54,0.3);
  }

  &__synopsis {
    grid-column-start: 2;
    grid-column-end: 4;
  }
}
</style>
