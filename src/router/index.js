import { createRouter, createWebHistory } from 'vue-router';

import Main from "@/views/Main.vue";
import Login from "@/views/Login.vue";
import UserList from "@/views/users/UserList.vue";
import NotFound from "@/components/NotFound.vue";
import UserDetail from "@/views/users/UserDetail.vue";
import UserModify from "@/views/users/UserModify.vue";
import UserCreate from "@/views/users/UserCreate.vue";
import ShowCase1 from "@/views/showcase/ShowCase1.vue";
import ShowCase2 from "@/views/showcase/ShowCase2.vue";
import ShowCase3 from "@/views/showcase/ShowCase3.vue";
import ShowCase4 from "@/views/showcase/ShowCase4.vue";
import ShowCase5 from "@/views/showcase/ShowCase5.vue";
import ShowCase6 from "@/views/showcase/ShowCase6.vue";
import ShowCase7 from "@/views/showcase/ShowCase7.vue";
import ShowCase8 from "@/views/showcase/ShowCase8.vue";
import ShowCase9 from "@/views/showcase/ShowCase9.vue";
import ShowCase10 from "@/views/showcase/ShowCase10.vue";
import ShowCase11 from "@/views/showcase/ShowCase11.vue";
import ShowCase12 from "@/views/showcase/ShowCase12.vue";
import ShowCase13 from "@/views/showcase/ShowCase13.vue";
import ShowCase14 from "@/views/showcase/ShowCase14.vue";

const routes = [
    {path: '/', component: Login},
    {path: '/main', name: 'Main', component: Main, meta: {requiresAuth: true},
        children: [
            {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
            {path: '/user', name: 'UserList', component: UserList, meta: {title: '사용자 목록'}},
            {path: '/userCreate', name: 'userCreate', component: UserCreate, meta: {title: '사용자 등록'}},
            {path: '/userDetail', name: 'userDetail', component: UserDetail, meta: {title: '사용자 상세'}},
            {path: '/userModify', name: 'userModify', component: UserModify, meta: {title: '사용자 수정'}},

            {path: '/showcase1', name: 'showcase1', component: ShowCase1, meta: {title: 'computed'}},
            {path: '/showcase2', name: 'showcase2', component: ShowCase2, meta: {title: 'watch'}},
            {path: '/showcase3', name: 'showcase3', component: ShowCase3, meta: {title: 'watchEffect'}},
            {path: '/showcase4', name: 'showcase4', component: ShowCase4, meta: {title: '양방향바인딩(v-model)'}},
            {path: '/showcase5', name: 'showcase5', component: ShowCase5, meta: {title: 'props'}},
            {path: '/showcase6', name: 'showcase6', component: ShowCase6, meta: {title: 'emits'}},
            {path: '/showcase7', name: 'showcase7', component: ShowCase7, meta: {title: '텔레포트'}},
            {path: '/showcase8', name: 'showcase8', component: ShowCase8, meta: {title: '커스텀디렉티브'}},
            {path: '/showcase9', name: 'showcase9', component: ShowCase9, meta: {title: '플러그인'}},
            {path: '/showcase10', name: 'showcase10', component: ShowCase10, meta: {title: '컴포저블'}},
            {path: '/showcase11', name: 'showcase11', component: ShowCase11, meta: {title: '네비게이션가드'}},
            {path: '/showcase12', name: 'showcase12', component: ShowCase12, meta: {title: '트랜지션(+그룹)'}},
            {path: '/showcase13', name: 'showcase13', component: ShowCase13, meta: {title: 'Vuex'}},
            {path: '/showcase14', name: 'showcase14', component: ShowCase14, meta: {title: 'Pinia'}},
        ]
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

// 네비게이션 가드
router.beforeEach((to, from, next) => {
    const isAuth = localStorage.getItem('accessToken');
    if ( to.meta.requiresAuth && !isAuth ) {
        next('/');
    } else {
        next();
    }
});

export default router;
