<template>
  <div v-editable="blok">
    <component :is="blok.component"
      v-for="blok in blok.body"
      :key="blok.uid"
      :blok="blok" />
    <!-- div class="text-xs">{{ blok }}</div -->
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
