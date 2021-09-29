<template>
  <div class="w-layout">
    <component
      :is="story.content.component"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content" />
  </div>
</template>

<script>
export default {
  asyncData (context) {
    // loads the JSON from the API - loading the home content (index page)
    return context.app.$storyapi.get('cdn/stories/home', {
      version: 'draft'
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content from api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  },
  data() {
    return {
      story: { content: {} }
    }
  },
  async fetch(context) {
    if(context.store.state.posts.loaded !== '1') {
      const postsRefRes = await context.app.$storyapi.get('cdn/stories/', {
        starts_with: 'blog/',
        version: 'draft'
      })
      context.store.commit('posts/setPosts', postsRefRes.data.stories)
      context.store.commit('posts/setLoaded', '1')
    }
  },
  mounted() {
    this.$storybridge(() => {
      // eslint-disable-next-line
      const storyblokInstance = new StoryblokBridge()

      storyblokInstance.on('input', (event) => {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      })

      storyblokInstance.on(['published', 'change'], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        })
      })
    })
  }
}
</script>
