import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useMenuStore = defineStore('menu', () => {
    const mainMenus = ref([
        { id: 'menu1', name: '개발', icon: 'bi bi-gear' },
        { id: 'menu2', name: 'showcase', icon: 'bi bi-bar-chart' },
    ]);

    const subMenus = ref([
        { id: 'submenu1', mainMenuId: 'menu1', name: '사용자 관리', topath: '/user', icon: 'bi bi-people' },
        // { id: 'submenu2', mainMenuId: 'menu1', name: '권한 관리', topath: '/a', icon: 'bi bi-shield-lock' },
        // { id: 'submenu3', mainMenuId: 'menu1', name: '부서 관리', topath: '/b', icon: 'bi bi-diagram-3' },
        { id: 'submenu4', mainMenuId: 'menu2', name: '샘플', topath: '/c', icon: 'bi bi-briefcase' },
        // { id: 'submenu5', mainMenuId: 'menu2', name: '일정 관리', topath: '/d', icon: 'bi bi-calendar3' },
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

