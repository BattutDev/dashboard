<template>
    <div>
        <Home v-if="name === 'home'" />
        <ListTodo v-if="name === 'list-todo'" />
        <FileBarChart2 v-if="name === 'file-bar-chart-2'" />
        <Github v-if="name === 'github'" />
        <Settings v-if="name === 'settings'" />
        <UserCircle v-if="name === 'account'" />
    </div>
</template>

<script setup lang="ts">
import {
    Home,
    ListTodo,
    FileBarChart2,
    Github,
    Settings,
    UserCircle
} from "lucide-vue-next";

export type DashboardNavigationIconName =
    | "home"
    | "list-todo"
    | "file-bar-chart-2"
    | "github"
    | "settings"
    | "account"

type Props = {
    name: DashboardNavigationIconName;
};

defineProps<Props>();
</script>