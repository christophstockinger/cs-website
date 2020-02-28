<template>
  <footer class="cs-m-Footer">
    <div class="cs-m-Footer-wrapper">
      <div class="cs-m-Footer-container">
        <div class="cs-m-Footer-logoContainer">
          <c-logo class="cs-m-Footer-logo"></c-logo>
        </div>
        <div class="cs-m-Footer-legalNavigation">
          <c-button
            class="cs-m-Footer-legalButton"
            label="Legal Notice"
            @click.native="openLegalNoticeLightbox()"
          ></c-button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import cLogo from '~/components/logo.vue'
import cButton from '~/components/button.vue'

export default {
  components: {
    'c-logo': cLogo,
    'c-button': cButton
  },
  methods: {
    openLegalNoticeLightbox() {
      console.log('hallo 👋🏻')
    }
  }
}
</script>

<style lang="scss">
.cs-m-Footer {
  width: 100%;
  height: auto;

  &-wrapper {
    @include cs-grid-wrapper;
  }

  &-container {
    @include cs-grid-container;

    align-items: baseline;
  }

  &-logoContainer {
    @include cs-grid-cell(12);

    @include cs-respond-to(s) {
      @include cs-grid-cell(10);
      @include cs-grid-pre(1);
      @include cs-grid-post(1);
    }

    @include cs-respond-to(m) {
      @include cs-grid-cell(8);
      @include cs-grid-pre(2);
      @include cs-grid-post(1);
    }

    @include cs-respond-to(l) {
      @include cs-grid-cell(6);
      @include cs-grid-pre(3);
      @include cs-grid-post(2);
    }
  }

  &-logo {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;

    @include cs-respond-to(m) {
      max-width: 400px;
    }

    @include cs-respond-to(m) {
      max-width: 500px;
    }

    @include cs-respond-to(l) {
      max-width: 500px;
    }
  }

  &-legalNavigation {
    @include cs-grid-cell(12);

    @include cs-respond-to(s) {
      @include cs-grid-cell(12);
    }

    @include cs-respond-to(m) {
      @include cs-grid-cell(1);
    }

    @include cs-respond-to(l) {
      @include cs-grid-cell(1);
    }
  }

  &-legal {
    //
  }
}
</style>
