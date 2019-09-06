<template>
  <main class="container not-found">
    <h1 class="not-found__title">404<span class="accent">.</span></h1>
    <h2 class="not-found__subtitle">Not Found</h2>
    <p class="not-found__text">Sorry we couldn't find this page 📖</p>
  </main>
</template>

<style lang="scss" scoped>
@import '../styles/shared.scss';
@import '../styles/variables.scss';

.not-found {
  &__title {
    font-size: 72px;
    margin-bottom: 0;
  }

  &__subtitle {
    margin-top: 0;
  }
}
</style>
