<script setup lang="ts">
import i18next from "i18next";
import { DynamicDialog, useDialog } from "primevue";
import Carousel from "primevue/carousel";
import ProjectDialog from "./ProjectDialog.vue";

import { computed, ref } from "vue";

export interface Project {
  title: string;
  description: string;
  status: string;
  image?: string;
  link?: string;
  demo?: string;
}

const props = defineProps<{
  title: string;
  subtitle: string;
  icon: string;
  projects: {
    [key: string]: Project;
  };
}>();

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const baseUrl = import.meta.env.BASE_URL || "/portfolio/";

const getImagePath = (path: string) => {
  const formatPath = `${baseUrl}${path}`;

  return formatPath;
};

const showNavigators = computed(() => {
  return !(window.innerWidth < 768);
});

const getProjectStatus = (projectStatus: string) => {
  const status = projectStatus.toLowerCase();
  if (status === "completed" || status === "terminé") return "primary";
  if (status === "on-going" || status === "en cours") return "warn";
  return "info";
};

const dialog = useDialog();

const openDialog = (project: Project) => {
  dialog.open(ProjectDialog, {
    props: {
      header: project.title,
      closeOnEscape: true,
      maximizable: true,
      dismissableMask: true,
      modal: true,
      draggable: false,
      style: {
        width: "50vw",
      },
      breakpoints: {
        "960px": "75vw",
        "640px": "90vw",
      },
    },
    data: {
      project,
    },
  });
};
</script>

<template>
  <Card
    class="bg-transparent backdrop-blur-none bg-none shadow-none p-0 border-none"
  >
    <template #title>
      {{ props.title }}
    </template>
    <template #subtitle>
      {{ props.subtitle }}
    </template>
    <template #content>
      <Carousel
        :value="projects"
        :numVisible="2"
        :numScroll="1"
        :circular="true"
        :responsiveOptions="responsiveOptions"
        :showNavigators="showNavigators"
        class="mt-4"
      >
        <template #item="project">
          <div
            class="bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-xl sm:mx-2 p-4"
          >
            <div v-if="project.data.image" class="mb-4">
              <div class="relative mx-auto">
                <div class="w-full h-48 overflow-hidden">
                  <img
                    :src="getImagePath(project.data.image)"
                    :alt="project.data.title"
                    class="w-full h-full object-cover rounded"
                  />
                </div>
                <Tag
                  :value="project.data.status"
                  :severity="getProjectStatus(project.data.status)"
                  class="absolute dark:bg-primary-500 dark:text-primary-100"
                  style="left: 5px; top: 5px"
                />
              </div>
            </div>
            <div class="font-bold dark:text-white">
              {{ project.data.title }}
            </div>
            <div class="mb-4 font dark:text-white">
              {{ project.data.description }}
            </div>
            <div class="flex gap-4 items-center">
              <span v-if="project.data.link">
                <Button
                  as="a"
                  :href="project.data.link"
                  icon="pi pi-external-link"
                  target="_blank"
                  rel="noopener"
                  v-tooltip.bottom="i18next.t('projects.open')"
                />
              </span>
              <span v-if="project.data.demo">
                <Button
                  icon="pi pi-bolt"
                  v-tooltip.bottom="i18next.t('projects.demo')"
                  @click="openDialog(project.data)"
                />
              </span>
            </div>
          </div>
        </template>
      </Carousel>
    </template>
  </Card>
  <DynamicDialog />
</template>
