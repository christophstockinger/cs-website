<template>
  <h2 ref="root" class="c-Welcome">
    Hi, nice to see you here! ✌🏻
  </h2>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  setup() {
    const root = ref(null)

    onMounted(() => {
      console.log(root.value)
      if (root.value) {
        load()
      }
    })

    const load = () => {
      root.value.classList.add('is-loading')
    }

    return {
      root
    }
  }
}
</script>

<style lang="scss">
.c-Welcome {
  @include cs-headline('h1');

  position: relative;
  width: 100%;
  height: auto;
  padding-top: $cs-spacing-s;
  color: var(--primary-headline-color);
  text-transform: uppercase;
  transition-timing-function: $cs-transition-timing-function;
  transition-duration: $cs-transition-duration;
  transition-property: color;

  &::before {
    position: absolute;
    top: 0;
    width: 80px;
    height: 8px;
    content: '';
    background-color: var(--primary-headline-color);
    transition-timing-function: $cs-transition-timing-function;
    transition-duration: $cs-transition-duration;
    transition-property: background-color;

    @include cs-respond-to(m) {
      width: 160px;
      height: 16px;
    }
  }

  &.is-loading {
    &::before {
      animation-name: line-width-mobile;
      animation-duration: $cs-transition-duration * 10;
      animation-timing-function: $cs-transition-timing-function;
      animation-delay: $cs-transition-duration * 2;
      animation-iteration-count: normal;

      @include cs-respond-to(m) {
        animation-name: line-width-desktop;
      }
    }
  }
}

@keyframes line-width-mobile {
  0% {
    width: 0;
  }
  100% {
    width: 80px;
  }
}

@keyframes line-width-desktop {
  0% {
    width: 0;
  }
  100% {
    width: 160px;
  }
}
</style>
