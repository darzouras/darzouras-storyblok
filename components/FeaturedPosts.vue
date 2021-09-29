<template>
  <div v-editable="blok" class="mb-8">
    <Headline :blok="blok.headline[0]" />

    <ul class="flex flex-wrap mb-4 items-stretch">
      <li
        v-for="post in sortedPosts"
        :key="post._uid"
        class="w-full md:w-2/4 lg:w-1/3 mb-2"
      >
        <BlogCard
          v-if="post.content"
          :post-link="post.full_slug"
          :post-content="post.content" />
      </li>
    </ul>

    <div class="text-right w-full">
      <nuxt-link to="/blog" class="bg-blue text-white underline p-2 font-width-50">
        See all posts
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    sortedPosts() {
      const featuredPosts = this.$store.state.posts.posts.filter((post) => {
        return this.blok.posts.includes(post.uuid)
      })

      featuredPosts.sort((a, b) => {
        return this.blok.posts.indexOf(a.uuid) - this.blok.posts.indexOf(b.uuid)
      })

      return featuredPosts
    }
  }
}
</script>
