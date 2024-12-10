<script setup lang="ts">
import Badge from "primevue/badge";
import Menubar from "primevue/menubar";
import { ref } from "vue";
import "primeicons/primeicons.css";
import ThemeToggle from "./ThemeToggle.vue";
import i18next from "i18next";

const items = ref([
  {
    label: i18next.t("menu.home"),
  },
  {
    label: i18next.t("menu.projects"),
    items: [
      {
        label: "Core",
        icon: "pi pi-bolt",
      },
      {
        label: "Blocks",
        icon: "pi pi-server",
      },
      {
        separator: true,
      },
      {
        label: "UI Kit",
        icon: "pi pi-pencil",
      },
    ],
  },
  {
    label: i18next.t("menu.skills")
  }
]);
</script>

<template>
  <Menubar :model="items">
    <template #start>
      <img width="35" height="40" src="../assets/logo/earth-global.svg"
      class="cursor-pointer hover:rotate-1" href="../pages/Home.vue"
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
      <div class="card flex justify-center">
        <ThemeToggle />
      </div>
    </template>
  </Menubar>
</template>
