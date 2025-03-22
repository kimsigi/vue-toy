<template>
    <form @submit.prevent="submitEdit">
      <table class="table table-bordered">
        <tbody>
        <tr>
          <th style="width: 20%;">아이디</th>
          <td>
            {{user}}
          </td>
        </tr>
        <tr>
          <th>이름</th>
          <td>
<!--            <input type="text" class="form-control" v-model="form.name" />-->
          </td>
        </tr>
        <tr>
          <th>비밀번호</th>
          <td>
<!--            <input type="password" class="form-control" v-model="form.password" />-->
          </td>
        </tr>
        </tbody>
      </table>

      <hr />

      <!-- ✅ 버튼 영역 -->
      <div class="d-flex justify-content-between">
        <!-- 좌측: 목록 -->
        <div>
          <BaseButton @click="goList">목록</BaseButton>
        </div>

        <!-- 우측: 수정 + 취소 -->
        <div>
          <BaseButton type="submit" class="mr-2">수정</BaseButton>
          <BaseButton @click="cancelEdit">취소</BaseButton>
        </div>
      </div>
    </form>
</template>

<script setup>
  import {useUserStore} from "@/store/user.js";
  import {onMounted, ref} from "vue";
  import axios from "axios";
  import {useRouter} from "vue-router";

  const router = useRouter();

  const userStore = useUserStore();

  const user = ref(null);


  const goList = () => {
    router.push('/user');
  }

  const cancelEdit = () => {
    router.push('/userDetail');
  }

  const submitEdit = () => {

  }

  const fnGetUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8888/users/detail/${userStore.id}`);
    console.log("### reponse: ", response.data);
      user.value = response.data;
    } catch(error) {
      console.log(error.message);
    }

  }

  onMounted(() => {
    fnGetUser();
  });

</script>

<style lang="scss" scoped>

</style>