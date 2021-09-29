<template>
  <div class="bg-white min-h-screen h-full pb-40">
    <Header />
    <transition name="fade-up">
      <Nuxt />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
  .fade-up-enter-active {
    transition: all .5s ease;
  }
  .fade-up-leave-active {
    transition: all .3s ease;
  }
  .fade-up-enter, .fade-up-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
</style>
