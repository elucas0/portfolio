<script setup lang="ts">

defineProps<{ logoSrc: string, altText: string }>()
</script>

<template>
    <a href="https://vitejs.dev" target="_blank">
        <img :src=logoSrc width="40" :alt=altText />
    </a>
</template>