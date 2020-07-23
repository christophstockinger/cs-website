<template>
  <component :is="tag" class="c-Headline" :class="[variants]"
    ><slot></slot
  ></component>
</template>

<script>
import { computed } from 'vue'

import '@src/shared/images/christoph-stockinger.jpg'

export default {
  props: {
    tag: {
      type: String,
      required: true
    },
    h1: {
      type: Boolean,
      default: false
    },
    h2: {
      type: Boolean,
      default: false
    },
    h3: {
      type: Boolean,
      default: false
    },
    h4: {
      type: Boolean,
      default: false
    },
    h5: {
      type: Boolean,
      default: false
    },
    h6: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const variants = computed(() => {
      return {
        ['c-Headline--h1']: props.h1,
        ['c-Headline--h2']: props.h2,
        ['c-Headline--h3']: props.h3,
        ['c-Headline--h4']: props.h4,
        ['c-Headline--h5']: props.h5,
        ['c-Headline--h6']: props.h6
      }
    })

    return {
      variants
    }
  }
}
</script>

<style lang="scss">
.c-Headline {
  @each $-variant in h1, h2, h3, h4, h5, h6 {
    &--#{$-variant} {
      @if ($-variant == 'h1') {
        @include cs-typography-h1;
      }

      @if ($-variant == 'h2') {
        @include cs-typography-h2;
      }

      @if ($-variant == 'h3') {
        @include cs-typography-h3;
      }

      @if ($-variant == 'h4') {
        @include cs-typography-h4;
      }

      @if ($-variant == 'h5') {
        @include cs-typography-h5;
      }

      @if ($-variant == 'h6') {
        @include cs-typography-h6;
      }
    }
  }
}
</style>
