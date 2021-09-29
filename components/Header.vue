<template>
  <header class="bg-purple py-4 overflow-hidden mb-10">
    <h1 class="headline-website text-white w-10/12 mx-auto text-center">WEBSITE</h1>
    <ul class="flex justify-center w-10/12 mx-auto">
      <li v-for="link in links" :key="link.url" class="mx-1">
        <nuxt-link :to="link.url" class="text-green">{{ link.title }}</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          'title': 'Home',
          'url': '/'
        },
        {
          'title': 'Blog',
          'url': '/blog'
        }
      ]
    }
  }
}
</script>
