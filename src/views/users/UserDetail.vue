<template>
  <div class="container mt-4">

    <!-- 👤 사용자 정보 -->
    <table class="table table-bordered">
      <tbody>
      <tr>
        <th style="width: 20%;">아이디</th>
        <td>{{ user._id }}</td>
      </tr>
      <tr>
        <th>이름</th>
        <td>{{ user.name }}</td>
      </tr>
      <tr>
        <th>비밀번호</th>
        <td>{{ user.password }}</td>
      </tr>
      </tbody>
    </table>

    <!-- 구분선 -->
    <hr />

    <!-- ✅ 버튼 영역: 목록 / 수정 / 삭제 -->
    <div class="d-flex justify-content-between">
      <!-- 좌측: 목록 -->
      <div>
        <BaseButton @click="goList">목록</BaseButton>
      </div>

      <!-- 우측: 수정 + 삭제 -->
      <div>
        <BaseButton class="mr-2" @click="editUser">수정</BaseButton>
        <BaseButton @click="deleteUser">삭제</BaseButton>
      </div>
    </div>

  </div>
</template>


<script setup>
  import {useUserStore} from "@/store/user.js";
  import {isRef, onMounted, ref} from "vue";
  import axios from "axios";
  import {useRouter} from "vue-router";

  const router = useRouter();
  const userStore = useUserStore();
  const user = ref([]);
  const fnGetUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8888/users/detail/${userStore.id}`);

      user.value = response.data;
    } catch(error) {
      console.log(error.message);
    }

  }

  const goList = () => {
    router.push('/user');
  }
  const editUser = () => {
    router.push('/userModify');
  }
  const deleteUser = async () => {
    try {
      await axios.delete(`http://localhost:8888/users/delete/${userStore.id}`);
      alert('삭제되었습니다.');
      router.push('/user');
    } catch(error) {
      console.log(error.message);
    }
  }

  onMounted(() => {
    fnGetUser();
  })
</script>

<style lang="scss" scoped>

</style>