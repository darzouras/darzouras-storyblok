<template>
  <div v-editable="blok" class="wysiwyg mb-6">
    <rich-text-renderer :document="blok.content" />
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
