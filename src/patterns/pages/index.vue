<template>
  <div class="l-Content">
    <m-header></m-header>
    <m-about></m-about>
    <m-footer></m-footer>
  </div>
</template>

<script>
import mHeader from '@cs/modules/header.vue'
import mAbout from '@cs/modules/about.vue'
import mFooter from '@cs/modules/footer.vue'

export default {
  name: 'index',
  components: {
    'm-header': mHeader,
    'm-about': mAbout,
    'm-footer': mFooter
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss">
.l-Content {
  width: 100%;
  height: auto;
}
</style>
