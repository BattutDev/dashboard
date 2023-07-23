<template>
  <div class="h-screen w-screen bg-white dark:bg-gray-900">
      <div class="z-30 absolute bottom-0 right-0 overflow-y-hidden flex flex-col p-5 gap-5">
          <Alert v-for="alert in alerts" :type="alert.type" :text="alert.text"/>
      </div>
    <slot />
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {useAlertsStore} from "~/stores/alerts";

const store = useAlertsStore();

const alerts = ref(computed(() =>Array.from(store.value.values())))


</script>
