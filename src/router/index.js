import { createRouter, createWebHistory } from 'vue-router';

import Main from "@/views/Main.vue";
import Login from "@/views/Login.vue";
import UserList from "@/views/users/UserList.vue";
import NotFound from "@/components/NotFound.vue";
import UserDetail from "@/views/users/UserDetail.vue";
import UserModify from "@/views/users/UserModify.vue";

const routes = [
    {path: '/', component: Login},
    {path: '/main', name: 'Main', component: Main, meta: {requiresAuth: true},
        children: [
            {path: '/user', name: 'UserList', component: UserList, meta: {title: '사용자 목록'}},
            {path: '/userDetail', name: 'userDetail', component: UserDetail, meta: {title: '사용자 상세'}},
            {path: '/userModify', name: 'userModify', component: UserModify, meta: {title: '사용자 수정'}},
            { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
        ]
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

// 네비게이션 가드
router.beforeEach((to, from, next) => {
    const isAuth = sessionStorage.getItem('accessToken');
    if ( to.meta.requiresAuth && !isAuth ) {
        next('/');
    } else {
        next();
    }
});

export default router;
