<script setup lang="ts">
import Timeline from "primevue/timeline";
import { ref } from "vue";

const events = ref([
  {
    status: "Bachelor in Computer Science",
    date: "IUT de Vannes 2021-2024",
    icon: "pi pi-desktop",
    color: "#9C27B0",
    image: "IUT_VANNES_LOGO.png",
    link: "https://www.iutvannes.fr/welcome-to-iut-vannes/",
  },
  {
    status: "Copernicus Master in Digital Earth",
    date: "Paris Lodron Universität Salzburg 2024-",
    icon: "pi pi-globe",
    color: "#006D00",
    image: "Universität_Salzburg_Plus_Logo.png",
    link: "https://www.master-cde.eu",
  },
]);
</script>

<template>
  <div class="card">
    <Timeline :value="events" align="alternate" class="flex flex-col">
      <template #marker="event">
        <span
          class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm"
          :style="{ backgroundColor: event.item.color }"
        >
          <i :class="event.item.icon"></i>
        </span>
      </template>
      <template #content="event">
        <Card class="mt-4">
          <template #title>
            {{ event.item.status }}
          </template>
          <template #subtitle>
            {{ event.item.date }}
          </template>
          <template #content>
            <img
              v-if="event.item.image"
              :src="`src/assets/logo/${event.item.image}`"
              :alt="event.item.name"
              width="200"
            />
            <img
              v-if="event.index === 1"
              :src="`src/assets/logo/EN Co-funded by the EU_POS.jpg`"
              width="200"
            />
            <Button
              as="a"
              label="Go to website"
              :href="`${event.item.link}`"
              target="_blank"
              rel="noopener"
              class="mt-5"
            ></Button>
          </template>
        </Card>
      </template>
    </Timeline>
  </div>
</template>
