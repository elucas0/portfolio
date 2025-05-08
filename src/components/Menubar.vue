<script setup lang="ts">
import Badge from "primevue/badge";
import Menubar from "primevue/menubar";
import { ref } from "vue";
import "primeicons/primeicons.css";
import ThemeToggle from "./ThemeToggle.vue";
import i18next from "i18next";

const scrollToSection = (element?: HTMLElement) => {
  element?.scrollIntoView();
};

const items = ref([
  {
    label: i18next.t("menu.home"),
    command: () => {
      scrollToSection(document.getElementById("header") ?? undefined);
    },
  },
  {
    label: i18next.t("menu.projects"),
    items: [
      {
        label: i18next.t("menu.gis"),
        icon: "pi pi-globe",
        command: () => {
          scrollToSection(document.getElementById("gis-projects") ?? undefined);
        },
      },
      {
        label: i18next.t("menu.web"),
        icon: "pi pi-desktop",
        command: () => {
          scrollToSection(document.getElementById("web-projects") ?? undefined);
        },
      },
    ],
  },
  {
    label: i18next.t("menu.timeline"),
    command: () => {
      scrollToSection(document.getElementById("timeline") ?? undefined);
    },
  },
  {
    label: i18next.t("menu.skills"),
    command: () => {
      scrollToSection(document.getElementById("skills") ?? undefined);
    },
  },
]);
</script>

<template>
  <Menubar
    :model="items"
    class="sticky top-5 z-20 w-full bg-white/50 dark:bg-surface-900/50 shadow-sm backdrop-blur-md border-surface-200 dark:border-surface-700"
  >
    <template #start>
      <img width="35" height="40" src="/assets/logo/earth-global.svg"
      class="cursor-pointer rotating-globe" href="../pages/Home.vue"
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
      <a v-ripple class="flex items-center" v-bind="props.action">
        <span>{{ item.label }}</span>
        <Badge
          v-if="item.badge"
          :class="{ 'ml-auto': !root, 'ml-2': root }"
          :value="item.badge"
        />
        <span
          v-if="item.shortcut"
          class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
          >{{ item.shortcut }}</span
        >
        <i
          v-if="hasSubmenu"
          :class="[
            'pi pi-angle-down ml-auto',
            { 'pi-angle-down': root, 'pi-angle-right': !root },
          ]"
        ></i>
      </a>
    </template>
    <template #end>
      <div class="flex items-center">
        <ThemeToggle />
      </div>
    </template>
  </Menubar>
</template>

<style lang="css" scoped>
.rotating-globe {
  animation: rotate 45s linear infinite;
  transform-origin: center;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
