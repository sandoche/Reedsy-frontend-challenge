<template>
  <div class="base-book-rewiew">
    <button :class="['base-book-rewiew__button', upvoted && 'base-book-rewiew__button--upvoted']">
      <span v-if="!upvoted">{{ $t('reviews.upvote') }} - {{ upvotes }}</span>
      <span v-if="upvoted">{{ $t('reviews.upvoted') }} - {{ upvotes }}</span>
    </button>
    <p class="base-book-rewiew__rating">
      <span 
        v-for="index in parseInt(rating)"
        :key="index"
        class="base-book-rewiew__stars"
      >
        ★
      </span>
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
