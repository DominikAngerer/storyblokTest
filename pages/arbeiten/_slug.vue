<template>
  <section class="util__container">
    <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component>
  </section>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'

export default {
  data () {
    return { story: { content: {} } }
  },
  mixins: [storyblokLivePreview],
  asyncData (context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    
    // Using Nuxt context.params.slug to access "slug" and append it to the folder you're working in
    // you can also use the full path to have a more generic setup. You can also access the full path
    // not only the "slug" by using: console.log(context.route.path)
    return context.app.$storyapi.get('cdn/stories/arbeiten/' + context.params.slug, {
      version: version,
      cv: context.store.state.cacheVersion
    }).then((res) => {
      return res.data
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
</script>
<style lang="stylus" scoped>

</style>
