<template>
  <div class="w-10/12 md:w-8/12 lg:w-5/12 m-auto">
    <h1 class="headline-title mb-2">Blog</h1>
    <ul>
      <li v-for="post in stories" :key="post._uid">
        <nuxt-link :to="post.full_slug">{{ post.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      starts_with: 'blog/'
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.responts) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api'})
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  },
  data() {
    return {
      stories: []
    }
  }

}
</script>
