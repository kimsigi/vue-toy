import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useMenuStore = defineStore('menu', () => {
    const mainMenus = ref([
        { id: 'menu1', name: '관리', icon: 'bi bi-gear' },
        { id: 'menu2', name: '운영', icon: 'bi bi-bar-chart' },
        { id: 'menu3', name: '통계', icon: 'bi bi-graph-up' },
        { id: 'menu4', name: '설정', icon: 'bi bi-sliders' }
    ]);

    const subMenus = ref([
        { id: 'submenu1', mainMenuId: 'menu1', name: '사용자 관리', topath: '/users', icon: 'bi bi-people' },
        { id: 'submenu2', mainMenuId: 'menu1', name: '권한 관리', icon: 'bi bi-shield-lock' },
        { id: 'submenu3', mainMenuId: 'menu1', name: '부서 관리', icon: 'bi bi-diagram-3' },
        { id: 'submenu4', mainMenuId: 'menu2', name: '업무 관리', icon: 'bi bi-briefcase' },
        { id: 'submenu5', mainMenuId: 'menu2', name: '일정 관리', icon: 'bi bi-calendar3' },
        { id: 'submenu6', mainMenuId: 'menu3', name: '사용 통계', icon: 'bi bi-pie-chart' },
        { id: 'submenu7', mainMenuId: 'menu3', name: '접속 현황', icon: 'bi bi-activity' },
        { id: 'submenu8', mainMenuId: 'menu4', name: '시스템 설정', icon: 'bi bi-gear-wide' },
        { id: 'submenu9', mainMenuId: 'menu4', name: '알림 설정', icon: 'bi bi-bell' }
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
                storage: sessionStorage, // ✅ `sessionStorage`로 저장
            }
});

