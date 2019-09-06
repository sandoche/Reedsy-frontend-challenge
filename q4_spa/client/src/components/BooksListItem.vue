<template>
  <article class="books-list-item">
    <router-link :to="{ name: 'book', params: { slug }}">
      <img :src="cover" :alt="`${title} ${$t('books.cover_alt')}`" class="books-list-item__image"/>
    </router-link>
    <div class="books-list-item__text">
      <router-link :to="{ name: 'book', params: { slug }}">
        <h2 class="books-list-item__title">{{ title }}</h2>
      </router-link>
      <p class="books-list-item__author">{{ author }}</p>
      <p class="books-list-item__synopsis">{{ synopsis }}</p>
      <router-link :to="{ name: 'book', params: { slug }}">
        Read More >
      </router-link>
    </div>
    <base-book-review
      :rating="rating"
      :upvoted="upvoted"
      :upvotes="upvotes"
    >
    </base-book-review>
  </article>
</template>

<script>
import BaseBookReview from './BaseBookReview.vue'

export default {
  name: 'BooksListItem',
  props: {
    author: {
      type: String,
      required: true
    },
    cover: {
      validator: function (value) {
        return value.match(/\.(jpeg|jpg|gif|png)$/) !== null
      }
    },
    rating: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    synopsis: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    upvoted: {
      type: Boolean,
      required: true
    },
    upvotes: {
      type: Number,
      default: 0
    }
  },
  components: {
    BaseBookReview
  }
}
</script>

<style lang="scss" scoped>
</style>
