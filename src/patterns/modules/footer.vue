<template>
  <footer class="m-Footer">
    <div class="m-Footer-wrapper">
      <div class="m-Footer-container">
        <div class="m-Footer-darkModeSwitcher">
          <c-mode-switcher></c-mode-switcher>
        </div>
        <div class="m-Footer-logo">
          <c-logo></c-logo>
        </div>
        <nav class="m-Footer-navigation">
          <button class="m-Footer-button" @click="open()">Legal Notice</button>
        </nav>
      </div>
    </div>
    <c-legal-notice
      class="m-Footer-legalNotice"
      ref="legalNotice"
    ></c-legal-notice>
  </footer>
</template>

<script>
import { onMounted, ref } from 'vue'

import cLogo from '@cs/components/logo.vue'
import cModeSwitchter from '@cs/components/mode-switcher.vue'
import cLegalNotice from '@cs/components/legal-notice.vue'

export default {
  components: {
    'c-logo': cLogo,
    'c-mode-switcher': cModeSwitchter,
    'c-legal-notice': cLegalNotice
  },
  setup() {
    const legalNotice = ref(null)

    onMounted(() => {
      console.log(legalNotice.value)
    })

    const open = () => {
      if (legalNotice.value) {
        legalNotice.value.open()
      }
    }

    return {
      legalNotice,
      open
    }
  }
}
</script>

<style lang="scss">
.m-Footer {
  position: relative;
  width: 100%;
  height: auto;
  margin-top: $cs-spacing-l;
  margin-bottom: $cs-spacing-l;

  @include cs-respond-to(s) {
    margin-bottom: 0;
  }

  @include cs-respond-to(xl) {
    margin-top: $cs-spacing-xxl;
  }

  &-wrapper {
    @include cs-grid-wrapper;

    transition-timing-function: $cs-transition-timing-function;
    transition-duration: $cs-transition-duration;
    transition-property: opacity;
  }

  &-container {
    @include cs-grid-container;
  }

  &-darkModeSwitcher {
    @include cs-grid-cell(12);

    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: center;
    order: 3;
    margin-top: $cs-spacing-s;

    @include cs-respond-to(m) {
      @include cs-grid-cell(2);

      order: 1;
      margin-top: 0;
    }
  }

  &-logo {
    @include cs-grid-cell(12);

    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    justify-content: center;
    order: 1;

    @include cs-respond-to(m) {
      @include cs-grid-cell(8);

      order: 2;
    }
  }

  &-navigation {
    @include cs-grid-cell(12);

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    order: 2;
    margin-top: $cs-spacing-m;

    @include cs-respond-to(m) {
      @include cs-grid-cell(2);

      align-items: flex-end;
      justify-content: flex-end;
      order: 3;
      margin-top: 0;
    }
  }

  &-button {
    @include cs-typography-paragraph-small;

    display: block;
    padding: 0;
    margin: 0;
    color: var(--primary-paragraph-color);
    text-decoration: none;
    appearance: none;
    cursor: pointer;
    background-color: transparent;
    border: 0 none;
    border-radius: 0;
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

  @at-root {
    body.has-open-legal {
      .m-Footer-wrapper  {
        opacity: 0.3;
      }
    }

    .cs-dark-mode {
      body.has-open-legal {
        .m-Footer-wrapper  {
          opacity: 0.6;
        }
      }
    }
  }
}
</style>
