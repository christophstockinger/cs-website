<template>
  <button class="cs-c-Button">
    <span v-if="label" class="cs-c-Button-label">
      {{ label }}
    </span>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.cs-c-Button {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  appearance: none;
  background-color: transparent;
  border: 0 none;
  border-radius: 0;

  &-label {
    @include cs-typography-button;

    color: $cs-color-black;
    transition-timing-function: $cs-transition-timing-function;
    transition-duration: $cs-transition-duration;
    transition-property: color;
  }

  @include cs-hover {
    .cs-c-Button-label {
      color: $cs-color-green;
    }
  }
}
</style>
