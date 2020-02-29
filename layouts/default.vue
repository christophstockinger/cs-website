<template>
  <div class="cs-l-Page">
    <div class="cs-l-Main">
      <nuxt />
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import mFooter from '~/modules/footer.vue'

export default {
  components: {
    'm-footer': mFooter
  }
}
</script>

<style lang="scss">
//
</style>
