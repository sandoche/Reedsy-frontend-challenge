<template>
  <main>
    <h1>{{ $t("books.title") }}</h1>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Books',
  created () {
    this.retrieve()
  },
  methods: {
    ...mapActions({
      retrieve: 'books/retrieve'
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

</style>
