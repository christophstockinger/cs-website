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
          <router-link class="m-Footer-link" to="/imprint"
            >Legal Notice</router-link
          >
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
import cLogo from '@cs/components/logo.vue'
import cModeSwitchter from '@cs/components/mode-switcher.vue'

export default {
  components: {
    'c-logo': cLogo,
    'c-mode-switcher': cModeSwitchter
  }
}
</script>

<style lang="scss">
.m-Footer {
  position: relative;
  width: 100%;
  height: auto;
  margin-top: $cs-spacing-l;

  &-wrapper {
    @include cs-grid-wrapper;
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

  &-link {
    @include cs-typography-paragraph-small;

    display: block;
    color: var(--primary-paragraph-color);
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
}
</style>
