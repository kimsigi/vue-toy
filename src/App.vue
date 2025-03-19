<!-- Login.vue -->
<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="title">환영합니다</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="username">사용자 이름</label>
          <InputEl
              id="username"
              v-model="username"
              type="text"
              placeholder="사용자 이름을 입력하세요"
              required
          />
        </div>
        <div class="input-group">
          <label for="password">비밀번호</label>
          <input
              id="password"
              v-model="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              required
          />
        </div>
        <button type="submit" class="login-btn">로그인</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from "axios";
import {useRouter} from "vue-router";
import InputEl from "@/components/common/InputEl.vue";


// 반응형 변수
const username = ref('');
const password = ref('');
const router = useRouter();
const stype = ref('text');
// 로그인 처리 함수
const handleLogin = async () => {
  // 여기서 로그인 로직 추가 (예: API 호출)
  console.log('로그인 시도:', {
    username: username.value,
    password: password.value,
  });
  // 입력 필드 초기화 (선택 사항)
  // username.value = '';
  // password.value = '';
  try {
    const response = await axios.post("http://localhost:8888/users/login", {
      name: username.value,
      password: password.value,
    });

    console.log("### 로그인 정보: ", response.data);
    console.log("### router: ", router);
    await router.push("/index");
    console.log("### 왜 푸시가 안되지?")
  } catch(error) {
    console.log("### 로그인 오류: ", error.message);
  }

};

</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 98vh;
  background: linear-gradient(135deg, #e0e7ff, #c3d7ff);
}

.login-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
}

.input-group {
  margin-bottom: 1.25rem;
}

label {
  display: block;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
}

input {
  width: 93%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #6b7280;
}

.login-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: #4338ca;
}

.forgot-password {
  text-align: center;
  margin-top: 1rem;
}

.forgot-password a {
  color: #4f46e5;
  text-decoration: none;
  font-size: 0.9rem;
}

.forgot-password a:hover {
  text-decoration: underline;
}
</style>
