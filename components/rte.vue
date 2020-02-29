<template>
  <div v-if="content" class="cs-c-Rte" v-html="content"></div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.cs-c-Rte {
  width: 100%;
  height: auto;

  p {
    @include cs-typography-paragraph;

    margin-bottom: $cs-spacing-m;

    strong,
    b {
      font-weight: $cs-font-weight-bold;
    }

    em,
    i {
      font-style: italic;
    }

    a {
      font-weight: $cs-font-weight-bold;
      color: $cs-color-green;
      text-decoration: none;
    }
  }
}
</style>
