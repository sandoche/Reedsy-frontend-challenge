<template>
  <main>
    {{ book }}
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Book',
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

</style>
