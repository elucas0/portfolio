<script setup lang="ts">
import { ref } from "vue";

import i18next from "i18next";
import Carousel from "primevue/carousel";

const projects = {
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
  gamed: {
    title: "Gamed",
    description: "Game for the 2023 Gama Platform competition",
    status: "Finished",
  },
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
        <template #item="project">
          <div
            class="bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-xl m-2 p-4"
          >
            <div class="mb-4">
              <div class="relative mx-auto">
                <img
                  :src="project.data.image"
                  :alt="project.data.title"
                  class="w-full rounded"
                />
                <Tag
                  :value="project.data.status"
                  class="absolute"
                  style="left: 5px; top: 5px"
                />
              </div>
            </div>
            <div class="font-medium dark:text-white">
              {{ project.data.title }}
            </div>
            <div class="mb-4 font-light dark:text-white">
              {{ project.data.description }}
            </div>
            <div class="flex justify-between items-center">
              <span>
                <Button
                  as="a"
                  :href="`${project.data.link}`"
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
