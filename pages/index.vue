<template>
  <div class="cs-l-Content">
    <m-about
      v-if="content"
      :headline="content.cvHeadline"
      :description="content.cvDescription"
    ></m-about>
    <m-social-media
      v-if="general.social"
      :data="general.social"
    ></m-social-media>
  </div>
</template>

<script>
import mAbout from '~/modules/about.vue'
import mSocialMedia from '~/modules/social-media.vue'

export default {
  components: {
    'm-about': mAbout,
    'm-social-media': mSocialMedia
  },
  asyncData(context) {
    return context.app.$axios
      .get(`${process.env.API_URL}/content/4/cs-cv`)
      .then(response => {
        return {
          content: response.data.content,
          general: response.data.general,
          meta: response.data.meta
        }
      })
      .catch(error => {
        error({
          statusCode: 404,
          message: 'Not Found'
        })
      })
  },
  computed: {
    keywordsAsString() {
      let result = ''
      if (this.meta.keywords) {
        const keywordsLength = this.meta.keywords.length - 1
        this.meta.keywords.forEach((keyword, index) => {
          if (index === 0) {
            result = `${result}${keyword}`
          } else if (index === keywordsLength) {
            result = `${result}, ${keyword}`
          } else {
            result = `${result}${keyword}`
          }
        })
      }
      return result
    }
  },
  methods: {},
  head() {
    return {
      title: this.meta.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description
        }
      ]
    }
  }
}
</script>

<style lang="scss">
//
</style>
