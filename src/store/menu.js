import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useMenuStore = defineStore('menu', () => {
    const mainMenus = ref([
        { id: 'menu1', name: '개발', icon: 'bi bi-gear' },
        { id: 'menu2', name: 'showcase', icon: 'bi bi-bar-chart' },
    ]);

    const subMenus = ref([
        { id: 'submenu1', mainMenuId: 'menu1', name: '사용자 관리', topath: '/user', icon: 'bi bi-people' },
        { id: 'submenu2', mainMenuId: 'menu2', name: 'computed', topath: '/showcase1', icon: 'bi bi-briefcase' },
        { id: 'submenu3', mainMenuId: 'menu2', name: 'watch', topath: '/showcase2', icon: 'bi bi-briefcase' },
        { id: 'submenu4', mainMenuId: 'menu2', name: 'watchEffect', topath: '/showcase3', icon: 'bi bi-briefcase' },
        { id: 'submenu5', mainMenuId: 'menu2', name: '양방향바인딩(v-model)', topath: '/showcase4', icon: 'bi bi-briefcase' },
        { id: 'submenu6', mainMenuId: 'menu2', name: 'props', topath: '/showcase5', icon: 'bi bi-briefcase' },
        { id: 'submenu7', mainMenuId: 'menu2', name: 'emits', topath: '/showcase6', icon: 'bi bi-briefcase' },
        { id: 'submenu8', mainMenuId: 'menu2', name: '텔레포트', topath: '/showcase7', icon: 'bi bi-briefcase' },
        { id: 'submenu9', mainMenuId: 'menu2', name: '커스텀디렉티브', topath: '/showcase8', icon: 'bi bi-briefcase' },
        { id: 'submenu10', mainMenuId: 'menu2', name: '플러그인', topath: '/showcase9', icon: 'bi bi-briefcase' },
        { id: 'submenu11', mainMenuId: 'menu2', name: '컴포저블', topath: '/showcase10', icon: 'bi bi-briefcase' },
        { id: 'submenu12', mainMenuId: 'menu2', name: '네비게이션가드', topath: '/showcase11', icon: 'bi bi-briefcase' },
        { id: 'submenu13', mainMenuId: 'menu2', name: '트랜지션(+그룹)', topath: '/showcase12', icon: 'bi bi-briefcase' },
        { id: 'submenu14', mainMenuId: 'menu2', name: 'Vuex', topath: '/showcase13', icon: 'bi bi-briefcase' },
        { id: 'submenu15', mainMenuId: 'menu2', name: 'Pinia', topath: '/showcase14', icon: 'bi bi-briefcase' },
    ]);

    const activeMainMenu = ref('');
    const activeMainMenuName = ref('');
    const activeSubMenu = ref('');
    const filteredSubmenus = ref('');

    // 대메뉴 액티브 메뉴 설정
    const setActiveMainMenu = (menuId) => {
        activeMainMenu.value = menuId;
        activeMainMenuName.value = mainMenus.value.find(menu => menu.id === menuId)?.name;
        filteredSubmenus.value = subMenus.value.filter(submenu => submenu.mainMenuId === activeMainMenu.value);
    }

    const setActiveSubMenu = (menuId) => {
        activeSubMenu.value = menuId;
    }

    return {
        mainMenus,
        subMenus,
        activeMainMenu,
        activeMainMenuName,
        activeSubMenu,
        filteredSubmenus,
        setActiveMainMenu,
        setActiveSubMenu,
    };
},
{ persist: {
                storage: localStorage, // ✅ `localStorage`로 저장
            }
});

