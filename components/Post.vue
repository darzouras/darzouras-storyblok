<template>
  <div
    v-editable="blok"
    class="w-layout">
    <h1 class="headline-title">{{ blok.title }}</h1>
    <p>{{ blok.intro }}</p>
    <div class="prose mx-auto">
      <rich-text-renderer
        :document="blok.long_text"
      />
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
  }
}
</script>
