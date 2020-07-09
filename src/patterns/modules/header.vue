<template>
  <header class="m-Header">
    <h1 class="m-Header-title">Christoph Stockinger</h1>
    <div class="m-Header-wrapper">
      <div class="m-Header-container">
        <div class="m-Header-content">
          <c-quote class="m-Header-quote"></c-quote>
          <c-welcome class="m-Header-welcome"></c-welcome>
        </div>
        <div class="m-Header-avatarContainer">
          <c-avatar class="m-Header-avatar"></c-avatar>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import cQuote from '@cs/components/quote.vue'
import cAvatar from '@cs/components/avatar.vue'
import cWelcome from '@cs/components/welcome.vue'

export default {
  components: {
    'c-avatar': cAvatar,
    'c-quote': cQuote,
    'c-welcome': cWelcome
  }
}
</script>

<style lang="scss">
.m-Header {
  position: relative;
  width: 100%;
  height: auto;

  @include cs-respond-to(s) {
    margin-top: $cs-spacing-xxl;
  }

  &-title {
    display: none;
  }

  &-wrapper {
    @include cs-respond-to(m) {
      @include cs-grid-wrapper;
    }
  }

  &-container {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: flex-start;

    @include cs-respond-to(m) {
      @include cs-grid-container;
    }
  }

  &-content {
    @include cs-grid-cell(12);

    position: static;
    order: 2;

    @include cs-respond-to(s) {
      @include cs-grid-cell(8);

      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: flex-start;
      order: 1;
    }

    @include cs-respond-to(m) {
      @include cs-grid-cell(9);
    }
  }

  &-quote {
    position: absolute;
    top: $cs-spacing-xs;
    right: $cs-grid-gutters / 2;
    left: $cs-grid-gutters / 2;
    z-index: 500;
    width: auto;

    @include cs-respond-to(m) {
      position: relative;
      top: auto;
      right: auto;
      left: auto;
      width: 100%;
      text-align: center;
    }
  }

  &-welcome {
    margin-top: $cs-spacing-xl;

    @include cs-respond-to(s) {
      margin-top: $cs-spacing-xxxl + $cs-spacing-s;
    }

    @include cs-respond-to(m) {
      margin-top: $cs-spacing-xxxl + $cs-spacing-s;
    }
  }

  &-avatarContainer {
    @include cs-grid-cell(12);

    z-index: 300;
    order: 1;
    padding-right: 0;
    padding-left: 0;

    @include cs-respond-to(s) {
      @include cs-grid-cell(4);

      order: 2;
    }

    @include cs-respond-to(m) {
      @include cs-grid-cell(3);
    }
  }

  &-avatar {
    @include cs-respond-to(m) {
      cursor: progress;
      box-shadow: 0 0 24px var(--shadow-color);
      transition-timing-function: $cs-transition-timing-function;
      transition-duration: $cs-transition-duration;
      transition-property: transform;
      transform: rotate(0);

      @include cs-hover {
        transform: rotate(-3deg);
      }
    }
  }
}
</style>
