<template>
  <div class="mb-3">
    <label v-if="label" class="form-label">{{ label }}</label>
    <input
        class="form-control"
        :placeholder="placeholder"
        :type="type"
        v-model="internalValue"
    />
  </div>
</template>

<script setup>
  import {computed} from "vue";

  const props = defineProps({
    modelValue: String,
    label: String,
    type: { type: String, default: 'text' },
    placeholder: String
  });

  const emits = defineEmits(['update:modelValue']);

  const internalValue = computed({
    get: () => props.modelValue,
    set: (newValue) => emits('update:modelValue', newValue)
  })

</script>

<style lang="scss" scoped>

</style>