import {defineStore} from "pinia";
import axios from "axios";

export const useAuthStore = defineStore('auth', {
    state: () => ({
       user: null,
       token: localStorage.getItem('accessToken') || null,
    }),
    actions: {
        async login(credentials) {
            try {
                const response = await axios.post('http://localhost:8888/users/login', credentials);
                if ( response.status === 200 ) {
                    this.user = response.data.user;
                    this.token = response.data.token;
                    localStorage.setItem('accessToken', this.token);
                }
            } catch(error) {
                throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
            }
        },
        logout(router) {
            this.user = null;
            this.token = null;
            localStorage.removeItem('accessToken');
            router.push('/')
        }
    },
    persist: {
        storage: localStorage, // ✅ `localStorage`로 저장
    }
});