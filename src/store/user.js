import {defineStore} from "pinia";

export const useUserStore = defineStore('user', {
   state: () => ({
      selectUser: null,
       id: null
   }),
    actions: {
       setUser(user) {
           this.selectUser = user;
       },
        clearuser() {
           this.selectUser = null;
            this.id = null;
        },
        setId(id) {
           this.id = id;
           console.log(this.id);
        }
    },
    persist: {
        storage: sessionStorage, // ✅ `sessionStorage`로 저장
    }
});