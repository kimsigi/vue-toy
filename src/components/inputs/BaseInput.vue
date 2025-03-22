<template>
    <label v-if="label" class="form-label">{{ label }}</label>
    <input
        class="form-control"
        :class="class"
        :placeholder="placeholder"
        :type="type"
        v-model="internalValue"
        ref="inputRef"
    />
</template>

<script setup>
import {computed, ref} from "vue";

  const props = defineProps({
    modelValue: String,
    label: String,
    type: { type: String, default: 'text' },
    placeholder: String,
    class: { type: String }
  });

  const emits = defineEmits(['update:modelValue']);

  const internalValue = computed({
    get: () => props.modelValue,
    set: (newValue) => emits('update:modelValue', newValue)
  })

  const inputRef = ref(null);
  defineExpose({
    focus: () => inputRef.value?.focus(),
    //clear: () => internalValue.value = ''
    clear: () => emits('update:modelValue', '')
  })

</script>

<style lang="scss" scoped>

</style>