<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow-lg w-25">
      <h3 class="text-center">로그인</h3>
      <form @submit.prevent="handleLogin">
        <BaseInput v-model="username" label="이름" placeholder="이름을 입력하세요." required/>
        <BaseInput v-model="password" label="비밀번호" type="password" placeholder="비밀번호를 입력하세요." required/>
        <BaseButton type="submit" class="w-100 mt-3">로그인</BaseButton>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useAuthStore} from '@/store/auth';
import BaseInput from '@/components/inputs/BaseInput.vue';
import BaseButton from '@/components/buttons/BaseButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();

const username = ref('');
const password = ref('');

const handleLogin = async () => {
  try {
    await authStore.login({ name: username.value, password: password.value });
    router.push('Main');
  } catch (error) {
    alert(error.message);
  }
};
</script>