<script setup lang="ts">
import i18next from "i18next";
import Carousel from "primevue/carousel";
import { computed } from "vue";

const projectsData = {
  geosim: {
    title: "Spatial Simulations",
    description: "Diverse spatial simulations using Gama Platform",
    status: "Ongoing",
    image: "/assets/projects/other/matsimlyon.png",
    link: "https://github.com/elucas0/land-use-simulation",
  },
  gee: {
    title: "Google Earth Engine",
    description: "EO scripts using Google Earth Engine",
    status: "Ongoing",
  },
  arcgis: {
    title: "ArcGIS Pro",
    description: "EO scripts using ArcGIS Pro",
    status: "Ongoing",
  },
  qgis: {
    title: "QGIS",
    description: "EO scripts using QGIS",
    status: "Ongoing",
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
      {{ i18next.t("projects.gisTitle") }}
    </template>
    <template #subtitle>
      {{ i18next.t("projects.gisSubtitle") }}
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
              <span>
                <Button
                  as="a"
                  :href="`${slotProps.data.link}`"
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
