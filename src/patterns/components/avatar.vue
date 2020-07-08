<template>
  <div class="c-Avatar">
    <img class="c-Avatar-image" src="/assets/images/christoph-stockinger.jpg" alt="Christoph Stockinger">
  </div>
</template>

<script>
import '@src/shared/images/christoph-stockinger.jpg'

export default {
  setup() {
    //
  }
}
</script>

<style lang="scss">
.c-Avatar {
  position: relative;
  width: 100%;
  padding-top: 100%;

  &-image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>