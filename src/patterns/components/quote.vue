<template>
  <blockquote class="c-Quote" cite="Steve Jobs">
    Stay hungry. Stay foolish.
  </blockquote>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.c-Quote {
  @include cs-headline('h3');

  width: 100%;
  height: auto;
  color: var(--quote-color);
  cursor: none;
  user-select: none;
  transition-timing-function: $cs-transition-timing-function;
  transition-duration: $cs-transition-duration;
  transition-property: color;
}
</style>