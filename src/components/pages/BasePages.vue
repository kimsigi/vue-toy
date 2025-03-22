<template>
  <nav class="mt-3" aria-label="사용자 목록 페이지네이션">
    <ul class="pagination justify-content-center">
      <li
          class="page-item"
          :class="{ disabled: currentPage === 1 }"
          @click="goPage(currentPage - 1)"
      >
        <a class="page-link" href="#">이전</a>
      </li>

      <li
          class="page-item"
          v-for="page in totalPages"
          :key="page"
          :class="{ active: page === currentPage }"
          @click="goPage(page)"
      >
        <a class="page-link" href="#">{{ page }}</a>
      </li>

      <li
          class="page-item"
          :class="{ disabled: currentPage === totalPages }"
          @click="goPage(currentPage + 1)"
      >
        <a class="page-link" href="#">다음</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  const props = defineProps({
    currentPage: {
      type: Number,
      default: 1,
      required: true
    },
    totalPages: {
      type: Number,
      default: 1,
      required: true
    }
  });

  const emits = defineEmits(['change']);

  const goPage = (page) => {
    if (page >= 1 && page <= props.totalPages) {
      emits('change', page);
    }
  };

</script>

<style lang="scss" scoped>

</style>