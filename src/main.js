import App from '@/App.vue'
import router from '@/router';
import { createApp } from 'vue'
import { createPinia } from "pinia";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import focus from "@/directive/focus.js";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(pinia);

// 커스텀 디렉티브(v-focus) 전역 설정
app.directive('focus', focus);


app.mount('#app');
