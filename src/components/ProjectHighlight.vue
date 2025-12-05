<script setup lang="ts">
import Button from "primevue/button";
import Card from "primevue/card";
import Tag from "primevue/tag";
import Image from "primevue/image";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const baseUrl = import.meta.env.BASE_URL || "/portfolio/";

const getImagePath = (path: string) => {
  const formatPath = `${baseUrl}${path}`;

  return formatPath;
};
</script>

<template>
  <div class="w-full">
    <Card>
      <template #content>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="space-y-6">
            <Tag value="Featured Project" severity="primary"></Tag>

            <h3
              class="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
            >
              {{ project.title }}
            </h3>

            <p
              class="text-lg text-surface-700 dark:text-surface-300 leading-relaxed max-w-xl"
            >
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-4 pt-4">
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="no-underline"
              >
                <Button
                  label="View Project"
                  icon="pi pi-external-link"
                  class="font-bold"
                />
              </a>
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="no-underline"
              >
                <Button
                  label="Live Demo"
                  icon="pi pi-play"
                  severity="secondary"
                  class="font-bold"
                />
              </a>
            </div>
          </div>

          <div class="relative group perspective-1000 flex justify-center">
            <Image
              :src="getImagePath(project.image)"
              :alt="project.title"
              imageClass="relative w-full max-w-md rounded-xl shadow-lg object-cover aspect-video"
            />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
