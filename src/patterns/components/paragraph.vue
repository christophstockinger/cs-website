<template>
  <p class="c-Paragraph"><slot></slot></p>
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
.c-Paragraph {
  @include cs-typography-paragraph;

  a {
    @include cs-typography-paragraph-bold;

    color: var(--primary-link-color);
    text-decoration: none;
    transition-timing-function: $cs-transition-timing-function;
    transition-duration: $cs-transition-duration;
    transition-property: color;

    @include cs-hover {
      color: var(--primary-link-hover-color);
    }

    @include cs-active {
      color: var(--primary-link-active-color);
    }
  }

  &--small {
    @include cs-typography-paragraph-small;
  }
}
</style>
