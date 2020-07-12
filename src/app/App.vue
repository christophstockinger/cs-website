<template>
  <component :is="layout"></component>
</template>

<script>
import { ref, watch, reactive, onMounted, onUpdated, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'

import lDefault from '@cs/layouts/default.vue'

export default {
  components: {
    'l-default': lDefault
  },
  setup() {
    const route = useRoute()
    const layout = computed(() => route.meta.layout ? `l-${route.meta.layout}` : `l-default`)

    return {
      route,
      layout
    }
  }
}
</script>
