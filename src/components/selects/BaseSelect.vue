<template>
  <select class="form-control mr-2" :class="class" style="width: 150px;" v-model="internalValue">
    <option v-for="(option, index) in options"
            :key="index"
            :value="option.value"
    >
      {{option.label}}
    </option>
  </select>
</template>

<script setup>
  import {computed} from "vue";

  const props = defineProps({
    modelValue: {type: String},
    class: {type: String},
    options: {type: Array, default: [{label: '전체', value: ''}]}
  });

  const emits = defineEmits(['update:modelValue']);

  const internalValue = computed({
    get: () => props.modelValue,
    set: (newValue) => emits('update:modelValue', newValue)
  })

</script>

<style lang="scss" scoped>

</style>