<template>
  <div>
    <div class="base-loading-placeholder" v-for="index in [0,1,2]" :key="index">
      <base-loading-placeholder height="250px" width="100%" border-radius="0"></base-loading-placeholder>
      <div>
        <base-loading-placeholder height="20px" width="50%" border-radius="10px"></base-loading-placeholder>
        <br>
        <base-loading-placeholder height="10px" width="20%" border-radius="10px"></base-loading-placeholder>
        <br><br>
        <base-loading-placeholder height="10px" width="90%" border-radius="10px"></base-loading-placeholder>
        <br><base-loading-placeholder height="10px" width="95%" border-radius="10px"></base-loading-placeholder>
        <br><base-loading-placeholder height="10px" width="85%" border-radius="10px"></base-loading-placeholder>
      </div>
    </div>
  </div>
</template>

<script>
import BaseLoadingPlaceholder from './BaseLoadingPlaceholder.vue'

export default {
  name: 'BooksLoader',
  components: {
    BaseLoadingPlaceholder
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.base-loading-placeholder {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 32px;
  padding-bottom: 42px;
  margin-bottom: 42px;
  border-bottom: 1px solid $very-light-color;
  width: 100%;
}
</style>
