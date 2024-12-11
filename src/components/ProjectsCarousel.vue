<script setup lang="ts">
import { ref } from "vue";

import i18next from "i18next";
import Carousel from "primevue/carousel";

const props = withDefaults(
  defineProps<{
    frProjects?: any[];
    enProjects?: any[];
  }>(),
  {
    frProjects: () => [],
    enProjects: () => [],
  }
);

const projects = ref(
  i18next.language === "fr" ? props.frProjects : props.enProjects
);
</script>

<template>
  <div class="card">
    <Carousel :value="projects" :numVisible="2" :numScroll="1">
      <template #item="project">
        <div
          class="bg-white/50 dark:bg-surface-900 backdrop-blur-md border border-surface-200 dark:border-surface-700 rounded-xl m-2 p-4"
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
  </div>
</template>
