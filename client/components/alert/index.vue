<template>
    <div v-bind:class="`alert alert-${type}`">
        <AlertIcon :icon="type"/>
        <span>{{text}}</span>
    </div>
</template>

<script setup lang="ts">

export type AlertType = 'info' | 'success' | 'warning' | 'error'

type Props = {
    type: AlertType,
    text: string
}
defineProps<Props>();

</script>
