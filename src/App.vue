<script setup>
import Dialog from "primevue/dialog";
import Menubar from "./components/Menubar.vue";
import Home from "./pages/Home.vue";
import { ref } from "vue";

const visible = ref(true);
</script>

<template>
  <Menubar class="sticky top-5 z-20" />
  <Home />
  <Dialog v-model:visible="visible" modal :style="{ width: '25rem' }">
    <template #header>
      <div class="inline-flex items-center justify-center gap-2">
        <span class="pi pi-exclamation-triangle"></span>
        <span class="font-bold whitespace-nowrap">Warning</span>
      </div>
    </template>
    <div class="flex items-center gap-4 mb-4">
      <label class="font-semibold"
        >This portfolio is a work in progress, the content may not be complete
        or some features may not work properly. Thank you for your patience
        !</label
      >
    </div>
    <template #footer>
      <Button label="Ok" @click="visible = false" autofocus />
    </template>
  </Dialog>
</template>
