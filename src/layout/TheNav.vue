<template>
  <!-- 상단 네비게이션 바 (대메뉴) -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <i class="bi bi-building me-2"></i>
        관리 시스템
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item" v-for="menu in menuStore.mainMenus" :key="menu.id">
            <a
                class="nav-link"
                :class="{ 'active': isActiveMenu(menu.id)}"
                href="#"
                @click.prevent="menuStore.setActiveMainMenu(menu.id)"
            >
              <i :class="menu.icon + ' me-1'"></i>
              {{ menu.name }}
            </a>
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <span class="text-light me-3">{{ user?.name }}</span>
          <button class="btn btn-outline-light btn-sm" @click="logout">
            <i class="bi bi-box-arrow-right me-1"></i>로그아웃
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {useRouter} from "vue-router";
import {useMenuStore} from "@/store/menu.js";
import {useAuthStore} from "@/store/auth.js";
import {storeToRefs} from "pinia";
import {toRef} from "vue";
const menuStore = useMenuStore();
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const router = useRouter(); // ✅ `setup()`에서 `router` 선언

// 로그아웃
const logout = () => {
  authStore.logout(router);
}

// 대메뉴 액티브 표시
const isActiveMenu = (menuId) => menuStore.activeMainMenu === menuId;
</script>