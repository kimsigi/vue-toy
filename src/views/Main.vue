<template>
  <div>
    <!-- GNB 영역 -->
    <TheNav></TheNav>

    <div class="container-fluid">
      <div class="row">
        <!-- LNB 영역 -->
        <TheSidebar></TheSidebar>
        <!-- 콘텐츠 영역 -->
<!--        <TheView></TheView>-->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import TheNav from "@/layout/TheNav.vue";
import TheSidebar from "@/layout/TheSidebar.vue";
// import TheView from "@/layout/TheView.vue";





// 탭 데이터
const tabs = ref([
  { id: 'tab1', name: '사용자 목록', closable: false },
  { id: 'tab2', name: '대시보드', closable: true },
  { id: 'tab3', name: '사용자 등록', closable: true }
]);

// 샘플 사용자 데이터
const sampleUsers = [
  { id: 'U001', name: '홍길동', department: '관리부', position: '과장', email: 'hong@example.com', status: '활성', statusColor: 'success' },
  { id: 'U002', name: '김영희', department: '영업부', position: '대리', email: 'kim@example.com', status: '활성', statusColor: 'success' },
  { id: 'U003', name: '이철수', department: '개발부', position: '차장', email: 'lee@example.com', status: '비활성', statusColor: 'secondary' },
  { id: 'U004', name: '박지민', department: '영업부', position: '사원', email: 'park@example.com', status: '활성', statusColor: 'success' },
  { id: 'U005', name: '최윤서', department: '개발부', position: '부장', email: 'choi@example.com', status: '휴가중', statusColor: 'warning' }
];



const activeTab = ref('tab1');
let tabCounter = ref(4); // 새 탭 생성 시 사용할 카운터

// 활성 대메뉴 이름 계산
const activeMainMenuName = computed(() => {
  const menu = mainMenus.find(menu => menu.id === activeMainMenu.value);
  return menu ? menu.name : '';
});

// 필터링된 중메뉴 계산
const filteredSubmenus = computed(() => {
  return submenus.filter(submenu => submenu.mainMenuId === activeMainMenu.value);
});

// 활성 중메뉴 이름 계산
const activeSubMenuName = computed(() => {
  const submenu = submenus.find(submenu => submenu.id === activeSubMenu.value);
  return submenu ? submenu.name : '';
});

// 활성 중메뉴 아이콘 계산
const activeSubMenuIcon = computed(() => {
  const submenu = submenus.find(submenu => submenu.id === activeSubMenu.value);
  return submenu ? submenu.icon : '';
});

// 활성 탭 이름 계산
const activeTabName = computed(() => {
  const tab = tabs.value.find(tab => tab.id === activeTab.value);
  return tab ? tab.name : '';
});



// 중메뉴 설정
const setActiveSubMenu = (submenuId) => {
  activeSubMenu.value = submenuId;
};

// 탭 설정
const setActiveTab = (tabId) => {
  activeTab.value = tabId;
};

// 탭 닫기
const closeTab = (tabId) => {
  const index = tabs.value.findIndex(tab => tab.id === tabId);
  if (index !== -1) {
    tabs.value.splice(index, 1);
    if (activeTab.value === tabId) {
      // 닫은 탭이 활성화 탭이었다면 첫 번째 탭으로 이동
      activeTab.value = tabs.value[0].id;
    }
  }
};

// 새 탭 추가
const addNewTab = () => {
  const newTabId = 'tab' + tabCounter.value;
  tabs.value.push({
    id: newTabId,
    name: '새 탭 ' + (tabCounter.value - 3),
    closable: true
  });
  activeTab.value = newTabId;
  tabCounter.value++;
};

// 로그아웃
const logout = () => {
  // 로그아웃 로직 구현
  console.log('로그아웃');
  // 로그인 페이지로 리다이렉트할 수 있음
};
</script>
