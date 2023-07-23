<template>

  <Info v-if="icon === 'info'" class="stroke-current shrink-0 h-6 w-6"/>
  <CheckCircle2 v-else-if="icon === 'success'" class="stroke-current shrink-0 h-6 w-6"/>
  <AlertCircle v-else-if="icon === 'warning'" class="stroke-current shrink-0 h-6 w-6"/>
  <XCircle v-else-if="icon === 'error'" class="stroke-current shrink-0 h-6 w-6"/>

</template>

<script setup lang="ts">

import {Info, CheckCircle2, AlertCircle, XCircle} from 'lucide-vue-next'
import {AlertType} from "~/components/alert/index.vue";

type Props = {
    icon: AlertType
}

defineProps<Props>()
</script>