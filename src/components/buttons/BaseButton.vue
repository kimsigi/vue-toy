<template>
  <button class="btn btn-primary w-100" :type="type">
    <slot />
  </button>
</template>

<script setup>
  defineProps({
    type: {type: String, default: 'button'}
  });
</script>

<style lang="scss" scoped>

</style>