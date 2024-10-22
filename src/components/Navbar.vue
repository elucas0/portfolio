<script setup lang="ts">
import DownloadCVButton from './DownloadCVButton.vue';


// defineProps<{ msg: string }>()

</script>

<template>
  <div class="flex gap-5 bg-slate-400">
    <button type="button" @click="">About</button>
    <button type="button" @click="">My Projects</button>
    <button type="button" @click="">Contact Me</button>
    <DownloadCVButton />
  </div>
</template>