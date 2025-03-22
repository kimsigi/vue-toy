<template>
  <div class="container mt-4">

    <!-- 🔍 검색 조건 -->
    <div class="card mb-4">
      <div class="card-body">
        <form class="d-flex justify-content-between align-items-center flex-wrap" @submit.prevent="() => fnSearch(1)">
          <!-- 왼쪽 영역: 콤보 + 검색어 -->
          <div class="d-flex align-items-center flex-grow-1">
            <BaseSelect2 v-model="searchCondition" :options="searchConditionOptions" @update:modelValue="onChangeBaseSelect"/>

            <BaseInput v-model="searchKeyword" ref="refSearchKeyword" class="form-control mr-1 m-lg-1" placeholder="검색어를 입력하세요."></BaseInput>
          </div>
          <!-- 오른쪽 영역: 검색 버튼 -->
          <BaseButton type="submit">검색</BaseButton>
        </form>
      </div>
    </div>

    <!-- 👥 사용자 목록 -->
    <div class="card">
      <div class="card-header bg-primary text-white">
        사용자 목록
      </div>
      <div class="card-body p-0">
        <table class="table table-bordered table-hover mb-0">
          <thead class="thead-light">
          <tr>
            <th style="width: 20%;">아이디</th>
            <th style="width: 25%;">이름</th>
            <th style="width: 35%;">비밀번호</th>
            <th style="width: 20%;">등록일시</th>
          </tr>
          </thead>
          <tbody>
            <template v-if="userList.length > 0">
              <tr ref="trRef" v-for="(user, index) in userList" :key="index">
                <td>
                  <RouterLink
                      to="/UserDetail"
                      class="text-primary font-weight-bold"
                      style="cursor: pointer; text-decoration: underline;"
                      @mousedown="userStore.setId(user._id);"
                      @keydown.enter="userStore.setUser(user);"
                  >
                    {{ user._id }}
                  </RouterLink>
                </td>
                <td>{{user.name}}</td>
                <td>{{user.password}}</td>
                <td>{{user.createdAt}}</td>
              </tr>
            </template>
            <!-- 데이터 없을 경우 예시 -->
            <template v-else>
              <tr>
                <td colspan="4" class="text-center text-muted">검색 결과가 없습니다.</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- ✅ 페이지네이션 -->
  <BasePages
      :currentPage="currentPage"
      :totalPages="totalPages"
      @change="fnSearch"
  />

</template>

<script setup>
import {onMounted, ref} from 'vue';
import BaseInput from "@/components/inputs/BaseInput.vue";
import BaseButton from "@/components/buttons/BaseButton.vue";
import BaseSelect2 from "@/components/selects/BaseSelect2.vue";
import axios from "axios";
import {useUserStore} from "@/store/user.js";

const userStore = useUserStore();

const searchCondition = ref('');
const searchConditionOptions = [
  {label: '전체', value: ''},
  {label: 'ID', value: '_id'},
  {label: '이름', value: 'name'},
];
const searchKeyword = ref(null);
const refSearchKeyword = ref(null);

const onChangeBaseSelect = (optionName) => {
  //refSearchKeyword.value?.clear();
  refSearchKeyword.value?.focus();
}

const trRef = ref(null);
const userList = ref([]);

const currentPage = ref(1);
const totalPages = ref(1);
const totalCount = ref(0);
const pagePerCount = ref(5);

const fnSearch = async (nextPage = 1) => {

  const payload = {
    searchCondition: searchCondition.value,
    searchKeyword: searchKeyword.value,
    page: nextPage,
    limit: pagePerCount.value
  };

  const response = await axios.post('http://localhost:8888/users', payload);

  userList.value = response.data.users;
  currentPage.value = nextPage;
  totalPages.value = response.data.totalPage;
  totalCount.value = response.data.totalCount;
}

onMounted(() => fnSearch(1));

</script>

<style scoped>
select.form-control {
  appearance: auto;
  -webkit-appearance: auto;
  -moz-appearance: auto;
}
</style>