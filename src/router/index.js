import { createRouter, createWebHistory } from 'vue-router';

import App from '@/App.vue';

const routes = [
    { path: '/', name: 'Login', component: App },
    { path: '/login', name: 'Login', component: App },
    /*
        { path: '/index', name: 'about', component: About },

        { path: '/posts', name: 'post-list', component: PostList },
        { path: '/posts/:id', name: 'post-detail', component: PostDetail },
        { path: '/posts/create', name: 'post-create', component: PostCreate },
        { path: '/posts/edit/:id', name: 'post-edit', component: PostEdit },

        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

        { path: '/nested',
            name: 'Nested',
            component: Nested,
            children: [
                { path: '', name: 'NestedHome', component: NestedHome },
                { path: 'one', name: 'NestedOne', component: NestedOne },
                { path: 'two', name: 'NestedTwo', component: NestedTwo },
            ]
        }
        */
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

export default router;
