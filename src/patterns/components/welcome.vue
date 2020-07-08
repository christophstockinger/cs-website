<template>
  <h2 class="c-Welcome">
    Hi, nice to see you here!
  </h2>
</template>

<script>
export default {}
</script>

<style lang="scss">
.c-Welcome {
  @include cs-headline('h1');

  position: relative;
  width: 100%;
  height: auto;
  padding-top: $cs-spacing-s;
  color: var(--primary-headline-color);
  transition-timing-function: $cs-transition-timing-function;
  transition-duration: $cs-transition-duration;
  transition-property: color;

  &::before {
    position: absolute;
    top: 0;
    width: 80px;
    height: 8px;
    content: '';
    background-color: currentColor;
    transition-timing-function: $cs-transition-timing-function;
    transition-duration: $cs-transition-duration;
    transition-property: background-color;

    @include cs-respond-to(m) {
      width: 160px;
      height: 16px;
    }
  }
}
</style>
