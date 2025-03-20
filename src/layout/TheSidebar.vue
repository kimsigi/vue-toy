<template>
  <!-- 좌측 사이드바 (중메뉴) -->
  <div class="col-md-2 bg-light min-vh-100 p-0 border-end">
    <div class="list-group list-group-flush">
      <div class="p-3 bg-primary text-white">
        <i class="bi bi-list-nested me-2"></i>
        {{ menuStore.activeMainMenuName }} 메뉴
      </div>
      <router-link
          v-for="submenu in menuStore.filteredSubmenus"
          :key="submenu.id"
          :to="submenu.topath"
          class="list-group-item list-group-item-action"
          :class="{ 'active': isActiveMenu(submenu.id) }"
      >
        <i :class="submenu.icon + ' me-2'"></i>
        {{ submenu.name }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {useMenuStore} from "@/store/menu.js";
const menuStore = useMenuStore();

const isActiveMenu = (menuId) => menuStore.activeSubMenu === menuId
</script>