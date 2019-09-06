<template>
  <div class="base-book-rewiew">
    <button :class="['base-book-rewiew__button', upvoted && 'base-book-rewiew__button--upvoted']">
      <span v-if="!upvoted">▲ {{ upvotes }}</span>
      <span v-if="upvoted">▲ {{ upvotes }}</span>
    </button>
    <p class="base-book-rewiew__rating">
      <span
        v-for="index in parseInt(rating)"
        :key="index"
        class="base-book-rewiew__stars"
      >
        ★
      </span><br>
      {{ rating }} / 10
    </p>
  </div>
</template>

<script>
export default {
  name: 'BaseBookReview',
  props: {
    rating: {
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
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.base-book-rewiew {
  &__button {
    background-color: #fff; /* Green */
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border: 1px solid $medium-light-color;
    border-radius: 3px;
    width: 100%;
    cursor: pointer;

    &:hover {
      background-color: $very-light-color;
    }

    &--upvoted {
      border: 1px solid $secondary-color;
      color: $secondary-color;
      box-shadow: 0 4px 12px rgba(32,43,54,0.1);
    }
  }

  &__rating {
    font-size: $font-xs;
    text-align: center;
  }

  &__stars {
    color: $secondary-color;
  }
}
</style>
