import {defineStore} from "pinia";
import {useRouter} from "vue-router";
import axios from "axios";

export const useAuthStore = defineStore('auth', {
    state: () => ({
       user: null,
       token: sessionStorage.getItem('accessToken') || null,
    }),
    actions: {
        async login(credentials) {
            try {
                const response = await axios.post('http://localhost:8888/users/login', credentials);
                if ( response.status === 200 ) {
                    this.user = response.data.user;
                    this.token = response.data.token;
                    sessionStorage.setItem('accessToken', this.token);
                }
            } catch(error) {
                throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
            }
        },
        logout(router) {
            this.user = null;
            this.token = null;
            sessionStorage.removeItem('accessToken');
            router.push('/')
        }
    },
    persist: {
        storage: sessionStorage, // ✅ `sessionStorage`로 저장
    }
});