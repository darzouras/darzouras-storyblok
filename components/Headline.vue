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

<style lang="scss" scoped>
.headline-title {
  font-size: 3rem;
}

.headline-subtitle {
  font-size: 2rem;
}

.headline-kicker {
  font-size: 1.15rem;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
