import { createRouter, createWebHistory } from 'vue-router';

import Main from "@/views/Main.vue";
import Login from "@/views/Login.vue";

const routes = [
    {path: '/', component: Login},
    {path: '/main', name: 'Main', component: Main, meta: {requiresAuth: true}},
    // {path: '/users', name: 'UserList', component: UserList, meta: {requiresAuth: true}},
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
