<template>
  <div class="loading-placeholder" v-bind:style="{ 'height': height, 'width': width, 'border-radius': borderRadius }">
  </div>
</template>

<script>
export default {
  name: 'BaseLoadingPlaceholder',
  props: {
    height: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    borderRadius: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-placeholder {
  display: inline-block;
  background-color: #dad9eb;
  border-radius: 100px;
  animation-name: placeholderShimmer;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes placeholderShimmer {
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}
</style>
