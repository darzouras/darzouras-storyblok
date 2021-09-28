<template>
  <div v-editable="blok" class="text-xs">
    {{ blok }}
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
