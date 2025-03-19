<template>
  <input v-model="modelvalue" />
</template>

<script setup>
const props = defineProps({
    type: {type: String, required: true},
    value: {}
  });

console.log("### props.type: ", props.type);
console.log("### props.value: ", props.value);

</script>

<style lang="scss" scoped>

</style>