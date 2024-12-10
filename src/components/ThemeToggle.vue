<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

const darkOn = ref<boolean>(false);
const theme = ref(localStorage.getItem("theme") || "dark");

onMounted(() => {
  if (!localStorage.getItem("theme")) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme.value = "dark";
      darkOn.value = true;
    } else {
      theme.value = "light";
      darkOn.value = false;
    }
  } else {
    darkOn.value = theme.value === "dark";
  }
  applyTheme(theme.value);
});

function applyTheme(newTheme: string) {
  const root = document.documentElement;
  if (newTheme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  localStorage.setItem("theme", newTheme);
}

watch(darkOn, (toggle) => {
  theme.value = toggle ? "dark" : "light";
  applyTheme(theme.value);
});
</script>

<template>
  <ToggleSwitch v-model="darkOn">
    <template #handle>
      <i :class="['!text-xs pi', { 'pi-moon': darkOn, 'pi-sun': !darkOn }]" />
    </template>
  </ToggleSwitch>
</template>
