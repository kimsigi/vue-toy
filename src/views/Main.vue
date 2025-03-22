<template>
  <div class="d-flex flex-column min-vh-100">
    <TheNav />
    <div class="d-flex flex-grow-1">
      <TheSidebar />
      <div class="flex-grow-1 p-4 bg-light">
        <!-- 메뉴명 -->
        <h3 class="mb-4">{{route.meta.title}}</h3>
        <!-- 실제 콘텐츠 영역 -->
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";

const route = useRoute();

// 로그아웃
const logout = () => {
  // 로그아웃 로직 구현
  console.log('로그아웃');
  // 로그인 페이지로 리다이렉트할 수 있음
};
</script>