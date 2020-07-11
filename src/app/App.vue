<template>
  <component :is="state.layout"></component>
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
    const state = reactive({ layout: computed(() => route.meta.layout ? `l-${route.meta.layout}` : `l-default`) })

    onMounted(() => {
      console.log('mounted app')
    })

    onUpdated(() => {
      console.log('update app')
    })
    onUnmounted(() => {
      console.log('unmounted app')
    })

    watch(route, (route, prevRoute) => {
      console.log('new route: ', route)
      console.log('prev route: ', prevRoute)
    })

    return {
      route,
      state
    }
  }
}
</script>

