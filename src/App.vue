<script setup>
import Dialog from "primevue/dialog";
import Menubar from "./components/Menubar.vue";
import Home from "./pages/Home.vue";
import { ref } from "vue";

const visible = ref(false);
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen pt-6 md:pt-10 gap-8 md:gap-16 mx-auto px-4 sm:px-6 md:max-w-5xl"
  >
    <Menubar />
    <Home />
  </div>
</template>
