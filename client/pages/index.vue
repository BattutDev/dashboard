<template>
  <div class="h-full w-full flex flex-col-reverse md:flex-row gap-5 p-5">
      <div class="h-auto md:h-full w-full md:w-auto shadow bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-row md:flex-col justify-between gap-3">
          <ul class="flex p-2 gap-2 flex-row md:flex-col overflow-x-scroll md:overflow-x-visible w-full justify-start items-center">
              <DashboardNavigationButton icon="home" name="Menu principal" menu="home"/>
              <DashboardNavigationButton icon="list-todo" name="Todo List" menu="todo-list"/>
              <DashboardNavigationButton icon="file-bar-chart-2" name="Statistiques" menu="stats"/>
              <DashboardNavigationButton icon="github" name="Github" menu="home" redirect="https://github.com/battutdev/dashboard"/>
          </ul>
          <ul class="flex p-2 items-center">
              <DashboardNavigationButton icon="settings" name="Paramètres" menu="settings"/>
          </ul>
      </div>
      <div class="h-full w-full shadow bg-gray-100 dark:bg-gray-800 rounded-lg overflow-y-scroll">
          <!--{{menu}}-->
          <DashboardTodo v-if="menu === 'todo-list'"/>
          <DashboardStats v-if="menu === 'stats'"/>
      </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from 'vue';
import {useMenuStore} from "~/stores/menu";

const store = useMenuStore();

const menu = ref(computed(() => store.value))








//const menu = ref(computed(() => store.value))



</script>