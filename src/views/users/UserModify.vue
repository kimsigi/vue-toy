<template>
    <UserBaseForm
        :id="userId"
        v-model:name="userName"
        v-model:password="userPassword"
        @submit="handleSubmit"
        @goList="goList"
        @cancel="cancelEdit"
        cuType="E"
        ref="baseForm"
    />

</template>

<script setup>
  import {useUserStore} from "@/store/user.js";
  import {onMounted, ref} from "vue";
  import axios from "axios";
  import {useRouter} from "vue-router";
  import UserBaseForm from "@/components/forms/UserBaseForm.vue";

  const router = useRouter();

  const userStore = useUserStore();

  const userId = ref(null);
  const userName = ref(null);
  const userPassword = ref(null);
  const baseForm = ref(null);


  const goList = () => {
    router.push('/user');
  }

  const cancelEdit = () => {
    router.push('/userDetail');
  }

  const handleSubmit = async () => {
    const formData = baseForm.value.formData;
    const payload = {
      name: formData.name.value,
      password: formData.password.value,
    }
    try {
      const response = await axios.put(`http://localhost:8888/users/modify/${userStore.id}`, payload);
      userStore.setUser(response.data);
      userStore.setId(response.data._id);

      if ( response.status === 200 ) {
        router.push('/userDetail')
      }
      console.log(response);
    } catch(error) {
      console.log(error.message);
    }
  }

  const fnGetUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8888/users/detail/${userStore.id}`);
      userId.value = response.data._id;
      userName.value = response.data.name;
      userPassword.value = response.data.password;
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