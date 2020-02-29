<template>
  <a class="cs-c-SocialMediaIcon" :href="href" target="_blank">
    <span class="cs-c-SocialMediaIcon-icon">
      <svg-icon :name="iconname"></svg-icon>
    </span>
    <span v-if="label" class="cs-c-SocialMediaIcon-label">{{ label }}</span>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String
    },
    iconname: {
      type: String
    },
    label: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.cs-c-SocialMediaIcon {
  $-size: 32px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: $-size;
  height: $-size;
  padding: 0;
  font-family: inherit;
  color: $cs-color-black;
  text-align: center;
  text-decoration: none;
  white-space: normal;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  transition-timing-function: $cs-transition-timing-function;
  transition-duration: $cs-transition-duration;
  transition-property: color;

  &-label {
    @include cs-sr-only;
  }

  &-icon {
    display: block;
    width: $-size;
    min-width: $-size;
    max-width: $-size;
    height: $-size;
    min-height: $-size;
    max-height: $-size;
  }

  @include cs-hover {
    color: $cs-color-green;
  }

  @include cs-active {
    color: $cs-color-darkgreen;
  }

  @include cs-disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
}
</style>
