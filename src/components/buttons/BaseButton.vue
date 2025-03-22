<template>
  <button class="btn btn-primary" :class="class" :type="type">
    <slot />
  </button>
</template>

<script setup>
  defineProps({
    type: {type: String, default: 'button'},
    class: {type: String}
  });
</script>

<style lang="scss" scoped>

</style>