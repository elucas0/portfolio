<script setup lang="ts">
import i18next from "i18next";
import Carousel from "primevue/carousel";

import { computed } from "vue";

const projectsData = {
  lpv: {
    title: "La Palme Verte",
    description: "Blog for UBS students association",
    status: "Finished",
    image: "/assets/projects/web/opengraph-image.jpg",
    link: "https://github.com/HeineZo/la-palme-verte",
  },
  pnr: {
    title: "Projet PNR",
    description: "ERP desktop application for volunteer biologists",
    status: "Finished",
    image: "/assets/projects/web/PNR.jpg",
    link: "https://github.com/elucas0/SAE-PNR",
  },
  weatherApp: {
    title: "Weather App",
    description: "Weather app in Vue using OpenWeather API",
    status: "Finished",
    image: "/assets/projects/web/weather-app.png",
    link: "https://github.com/HeineZo/meteo-app-vue",
  },
  punto: {
    title: "Punto",
    description:
      "Punto web version to play with up to 4 players. Made during a database course.",
    status: "Finished",
    image: "/assets/projects/web/punto.png",
    link: "https://github.com/elucas0/punto",
  },
};

const baseUrl = import.meta.env.BASE_URL || "/portfolio/";

const projects = computed(() => Object.values(projectsData));

const getImagePath = (path: string) => {
  const formatPath = `${baseUrl}${path}`;

  return formatPath;
};
</script>

<template>
  <Card class="bg-transparent shadow-none">
    <template #title>
      {{ i18next.t("projects.webTitle") }}
    </template>
    <template #subtitle>
      {{ i18next.t("projects.webSubtitle") }}
    </template>
    <template #content>
      <Carousel :value="projects" :numVisible="2" :numScroll="1">
        <template #item="slotProps">
          <div
            class="bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-xl m-2 p-4"
          >
            <div v-if="slotProps.data.image" class="mb-4">
              <div class="relative mx-auto">
                <img
                  :src="getImagePath(slotProps.data.image)"
                  :alt="slotProps.data.title"
                  class="w-full rounded"
                />
                <Tag
                  :value="slotProps.data.status"
                  class="absolute"
                  style="left: 5px; top: 5px"
                />
              </div>
            </div>
            <div class="font-medium dark:text-white">
              {{ slotProps.data.title }}
            </div>
            <div class="mb-4 font-light dark:text-white">
              {{ slotProps.data.description }}
            </div>
            <div class="flex justify-between items-center">
              <span v-if="slotProps.data.link">
                <Button
                  as="a"
                  :href="slotProps.data.link"
                  icon="pi pi-github"
                  target="_blank"
                  rel="noopener"
                  v-tooltip.bottom="i18next.t('projects.open')"
                />
              </span>
            </div>
          </div>
        </template>
      </Carousel>
    </template>
  </Card>
</template>
