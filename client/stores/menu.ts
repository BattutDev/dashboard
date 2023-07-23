export type MenuType = 'home' | 'todo-list' | 'stats' | 'settings' | 'account';

import { defineStore } from 'pinia'




export const useMenuStore = defineStore('menu', {
    state: () => ({
        value: 'home',
    }),
    actions: {
        change(menu: MenuType) {
            this.value = menu;
        },
    },
})