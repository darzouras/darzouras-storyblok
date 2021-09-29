<template>
  <div class="w-layout">
    <h1 class="headline-title mb-2">Blog</h1>
    <ul class="flex flex-wrap mb-4 items-stretch">
      <li
        v-for="post in stories"
        :key="post._uid"
        class="w-full md:w-2/4 lg:w-1/3 mb-2">
        <BlogCard
          :post-link="post.full_slug"
          :post-content="post.content" />
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
