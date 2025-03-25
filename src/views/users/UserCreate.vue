<template>
    <UserBaseForm
        v-model:name="userName"
        v-model:password="userPassword"
        @submit="handleSubmit"
        @cancel="cancelEdit"
        cuType="C"
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

  const userName = ref(null);
  const userPassword = ref(null);
  const baseForm = ref(null);

  const cancelEdit = () => {
    router.push('/user');
  }

  const handleSubmit = async () => {
    const formData = baseForm.value.formData;
    const payload = {
      name: formData.name.value,
      password: formData.password.value,
    }
    try {
      const response = await axios.post(`http://localhost:8888/users/create`, payload);
      userStore.setUser(response.data);
      userStore.setId(response.data._id);

      if ( response.status === 201 ) {
        router.push('/userDetail')
      }
      console.log(response);
    } catch(error) {
      console.log(error.message);
    }
  }
</script>

<style lang="scss" scoped>

</style>