<template>
  <div
    v-editable="blok"
    class="prose my-24 mx-auto">
    <h1>{{ blok.title }}</h1>
    <p>{{ blok.intro }}</p>
    <rich-text-renderer
      :document="blok.long_text"
    />
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
