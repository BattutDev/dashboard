<template>
    <li @click="openMenu(menu)" class="group cursor-pointer p-2 rounded list-none hover:bg-gray-200 dark:hover:bg-gray-900">
        <div class="relative flex items-center">
            <div class="h-6 w-6 text-gray-900 dark:text-white group-hover:text-flashblue ease ">
                <DashboardNavigationIcon :name="icon"/>
            </div>
            <div class="hidden  md:group-hover:block">
                <div class="absolute z-20 translate-x-6 bg-black rounded py-1 px-3 -translate-y-1/2 w-max text-white">{{name}}</div>
            </div>
        </div>
    </li>
</template>

<script setup lang="ts">

import {ref} from 'vue'
import {DashboardNavigationIconName} from "~/components/dashboard/navigation/icon.vue";
import {MenuType, useMenuStore} from "~/stores/menu";

type Props = {
    icon: DashboardNavigationIconName,
    name: string,
    menu: MenuType
    redirect?: string
}
const props = defineProps<Props>()

const openMenu = ref((menu: MenuType) => {

    if (props.redirect) {
        window.location.href = props.redirect
    } else if (props.menu) {
        const store = useMenuStore()
        const {change} = store
        change(menu);
        localStorage.setItem('menu', menu)
    }
})
</script>
