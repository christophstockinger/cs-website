<template>
  <section class="cs-m-About">
    <div class="cs-m-About-wrapper">
      <div class="cs-m-About-container">
        <h3 v-if="headline" class="cs-m-About-headline">{{ headline }}</h3>
        <c-rte
          v-if="description"
          class="cs-m-About-description"
          :content="description"
        ></c-rte>
      </div>
    </div>
  </section>
</template>

<script>
import cRte from '~/components/rte.vue'

export default {
  components: {
    'c-rte': cRte
  },
  props: {
    headline: {
      type: String
    },
    description: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.cs-m-About {
  position: relative;
  width: 100%;
  height: auto;

  &-wrapper {
    @include cs-grid-wrapper;
  }

  &-container {
    @include cs-grid-container;
  }

  &-headline {
    @include cs-grid-cell(12);
    @include cs-typography-h3;

    margin-bottom: $cs-spacing-l;

    @include cs-respond-to(s) {
      @include cs-grid-cell(12);
    }

    @include cs-respond-to(m) {
      @include cs-grid-cell(10);
      @include cs-grid-post(2);

      margin-bottom: $cs-spacing-xl;
    }

    @include cs-respond-to(l) {
      @include cs-grid-cell(9);
      @include cs-grid-post(3);
    }
  }

  &-description {
    @include cs-grid-cell(12);

    @include cs-respond-to(s) {
      @include cs-grid-cell(12);
    }

    @include cs-respond-to(m) {
      @include cs-grid-cell(9);
      @include cs-grid-post(3);
    }

    @include cs-respond-to(l) {
      @include cs-grid-cell(8);
      @include cs-grid-post(4);
    }
  }
}
</style>
