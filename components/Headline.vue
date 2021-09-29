<template>
  <div v-editable="blok" class="mb-2">
    <component :is="blok.Level" :class="`headline-${blok.Style}`">
      {{ blok.Text }}
    </component>
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
