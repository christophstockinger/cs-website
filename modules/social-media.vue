<template>
  <section class="cs-m-SocialMedia">
    <div class="cs-m-SocialMedia-wrapper">
      <div class="cs-m-SocilaMedia-container">
        <div class="cs-m-SocialMedia-content">
          <ul class="cs-m-SocialMedia-list">
            <li
              v-for="(item, key) in data"
              :key="key"
              class="cs-m-SocialMedia-item"
            >
              <c-social-media-icon
                class="cs-m-SocialMedia-icon"
                :href="item"
                :iconname="`cs-${key}`"
                :label="label(key)"
              ></c-social-media-icon>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { upperFirst } from 'lodash'

import cSocialMediaIcon from '~/components/social-media-icon.vue'

export default {
  components: {
    'c-social-media-icon': cSocialMediaIcon
  },
  props: {
    data: {
      type: Object
    }
  },
  computed: {
    label() {
      return key => {
        if (!key) return ''
        const firstUppercaseKey = upperFirst(key)
        return `View my ${firstUppercaseKey} profile`
      }
    }
  }
}
</script>

<style lang="scss">
.cs-m-SocialMedia {
  position: relative;
  width: 100%;
  height: auto;

  @include cs-respond-to(m max) {
    margin-bottom: $cs-spacing-l;
  }

  &-wrapper {
    @include cs-respond-to(m max) {
      @include cs-grid-wrapper;
    }
  }

  &-container {
    @include cs-respond-to(m max) {
      @include cs-grid-container;
    }
  }

  &-content {
    @include cs-respond-to(m max) {
      @include cs-grid-cell(12);
    }

    @include cs-respond-to(m) {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  &-list {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    @include cs-respond-to(m) {
      flex-flow: column nowrap;
    }
  }

  &-item {
    width: 32px;
    height: 32px;
    margin-right: $cs-spacing-m;

    @include cs-respond-to(m) {
      margin-right: 0;
      margin-bottom: $cs-spacing-m;
    }

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }
}
</style>
