<script setup lang="ts">
import i18next from "i18next";
import { useDialog } from "primevue";
import Carousel from "primevue/carousel";
import ProjectDialog from "./ProjectDialog.vue";

import { computed } from "vue";

export interface Project {
  title: string;
  description: string;
  status: string;
  image?: string;
  link?: string;
  demo?: boolean;
}

const props = defineProps<{
  title: string;
  subtitle: string;
  frProjects: {
    [key: string]: Project;
  };
  enProjects: {
    [key: string]: Project;
  };
}>();

const projects = computed(() =>
  Object.values(i18next.language === "fr" ? props.frProjects : props.enProjects)
);

const baseUrl = import.meta.env.BASE_URL || "/portfolio/";

const getImagePath = (path: string) => {
  const formatPath = `${baseUrl}${path}`;

  return formatPath;
};

const getProjectStatus = (projectStatus: string) => {
  const status = projectStatus.toLowerCase();
  if (status === "completed" || status === "terminé") return "primary";
  if (status === "on-going" || status === "en cours") return "warn";
  return "info";
};

const dialog = useDialog();

const openDialog = (project: Project) => {
  dialog.open({
    header: project.title,
    content: ProjectDialog,
    data: {
      project,
    },
  });
};
</script>

<template>
  <Card class="bg-transparent shadow-none">
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
        :numScroll="2"
        :circular="true"
      >
        <template #item="project">
          <div
            class="bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-xl m-2 p-4"
          >
            <div v-if="project.data.image" class="mb-4">
              <div class="relative mx-auto">
                <img
                  :src="getImagePath(project.data.image)"
                  :alt="project.data.title"
                  class="w-full rounded"
                />
                <Tag
                  :value="project.data.status"
                  :severity="getProjectStatus(project.data.status)"
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
              <span v-if="project.data.link">
                <Button
                  as="a"
                  :href="project.data.link"
                  icon="pi pi-github"
                  target="_blank"
                  rel="noopener"
                  v-tooltip.bottom="i18next.t('projects.open')"
                />
              </span>
              <span v-if="project.data.demo">
                <Button
                  icon="pi pi-eye"
                  v-tooltip.bottom="i18next.t('projects.demo')"
                  :onclick="openDialog(project.data)"
                />
              </span>
            </div>
          </div>
        </template>
      </Carousel>
    </template>
  </Card>
</template>
