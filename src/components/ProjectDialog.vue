<script setup lang="ts">
import { defineProps } from "vue";
import { Project } from "./ProjectsCarousel.vue";

const props = defineProps<{
  project: Project;
}>();

const baseUrl = import.meta.env.BASE_URL || "/portfolio/";

const getImagePath = (path: string) => {
  return `${baseUrl}${path}`;
};
</script>

<template>
  <div class="p-4">
    <div v-if="project.image" class="mb-4">
      <img
        :src="getImagePath(project.image)"
        :alt="project.title"
        class="w-full rounded"
      />
    </div>
    <h2 class="text-xl font-bold mb-2">{{ project.title }}</h2>
    <p class="text-gray-600 dark:text-gray-300 mb-4">
      {{ project.description }}
    </p>
    <div class="flex justify-between items-center">
      <span v-if="project.link">
        <Button
          as="a"
          :href="project.link"
          icon="pi pi-github"
          target="_blank"
          rel="noopener"
          label="GitHub"
        />
      </span>
      <span v-if="project.demo">
        <Button
          icon="pi pi-eye"
          label="View Demo"
          @click="$emit('view-demo', project)"
        />
      </span>
    </div>
  </div>
</template>
