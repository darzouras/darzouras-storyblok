<template>
  <div class="blog-card bg-purple-light text-white p-4 relative flex flex-col h-full justify-between m-2">
    <div>
      <img v-if="postContent.image" :src="postContent.image" class="w-full h-32 object-cover object-center mb-4">
      <div class="font-width-100 text-xl">
        {{ postContent.title }}
      </div>
      <p v-if="postContent.intro">
        {{ postContent.intro }}
      </p>
    </div>
    <div class="p-2 bg-white text-purple-light text-center mt-4">
      <nuxt-link :to="postLink" class="blog-link underline font-width-50 hover:text-green">Go to post</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postLink: {
      type: String,
      required: true
    },
    postContent: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-link {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
</style>
