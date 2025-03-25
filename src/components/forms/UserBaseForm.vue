<template>
  <form @submit.prevent="handleSubmit">
    <table class="table table-bordered">
      <tbody>
      <tr v-if="cuType !== 'C'">
        <th style="width: 20%;">아이디</th>
        <td>
          {{id}}
        </td>
      </tr>
      <tr>
        <th>이름</th>
        <td>
          <input type="text" class="form-control" v-model="userName" v-focus />
        </td>
      </tr>
      <tr>
        <th>비밀번호</th>
        <td>
          <input type="password" class="form-control" v-model="userPassword" />
        </td>
      </tr>
      </tbody>
    </table>
    <hr />
    <!-- ✅ 버튼 영역 -->
    <div class="d-flex justify-content-between">
      <!-- 좌측: 목록 -->
      <div>
        <BaseButton v-if="cuType !== 'C'" @click="goList">목록</BaseButton>
      </div>

      <!-- 우측: 수정 + 취소 -->
      <div>
        <BaseButton type="submit" class="mr-2">{{ cuType === "C" ? '등록' : '수정' }}</BaseButton>
        <BaseButton @click="cancelEdit">취소</BaseButton>
      </div>
    </div>
  </form>
</template>

<script setup>
import {computed, ref} from "vue";

  const props = defineProps({
    id: {type: String},
    name: {type: String},
    password: {type: String},
    cuType: {type: String, default: 'C'}
  });

  const emits = defineEmits(
[
      'update:name'
    , 'update:password'
    , 'submit'
    , 'goList'
    , 'cancel']);

  const userName = computed({
    get: () => props.name,
    set: (newValue) => emits('update:name', newValue)
  });
  const userPassword = computed({
    get: () => props.password,
    set: (newValue) => emits('update:password', newValue)
  });

  const handleSubmit = () => {
    emits('submit')
  }

  const goList = () => {
    emits('goList');
  }

  const cancelEdit = () => {
    emits('cancel');
  }

  defineExpose({
    formData: {
      name: userName,
      password: userPassword,
    }
  });
</script>

<style lang="scss" scoped>

</style>