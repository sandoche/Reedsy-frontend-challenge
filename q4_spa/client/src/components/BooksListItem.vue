<template>
  <article class="books-list-item">
    <router-link :to="{ name: 'book', params: { slug }}">
      <img :src="cover" :alt="`${title} ${$t('books.cover_alt')}`" class="books-list-item__image"/>
    </router-link>
    <div class="books-list-item__text">
      <div>
        <router-link :to="{ name: 'book', params: { slug }}">
          <h2 class="books-list-item__title">{{ title }}</h2>
        </router-link>
        <p class="books-list-item__author">{{ author }}</p>
        <p class="books-list-item__synopsis">{{ synopsis | truncate(200) }}</p>
      </div>
      <router-link :to="{ name: 'book', params: { slug }}" class="books-list-item__more">
        Read More →
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
  },
  filters: {
    truncate: function (value, limit) {
      if (value.length > limit) {
        return value.substring(0, limit) + '...'
      } else {
        return value
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.books-list-item {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-gap: 32px;
  padding-bottom: 42px;
  margin-bottom: 42px;
  border-bottom: 1px solid $very-light-color;

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__image {
    width: 100%;
    transition: all 0.4s ease;
    box-shadow: 0 4px 12px rgba(32,43,54,0.3);

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 8px 24px rgba(32,43,54,0.4);
    }
  }

  &__title {
    font-size: $font-md;
    margin-top: 0;
    margin-bottom: 0;
  }

  &__author {
    margin-top: 0;
    color: $light-color;
    font-size: $font-sm;
    margin-bottom: 16px;
  }

  &__more {
    font-size: $font-sm;
    font-weight: 700;
    transition: all 0.4s ease;
    display: block;

    &:hover {
      transform: translateX(10px) translateY(0) translateZ(0);
    }
  }
}
</style>
