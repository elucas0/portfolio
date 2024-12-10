<script setup lang="ts">
import { ref } from "vue";
import enProjects from "../assets/projects/en_projects.json";
import frProjects from "../assets/projects/fr_projects.json";
import i18next from "i18next";
import Carousel from "primevue/carousel";

const products = ref(i18next.language === "fr" ? frProjects : enProjects);
</script>

<template>
  <div class="card">
    <Carousel :value="products" :numVisible="2" :numScroll="1">
      <template #item="project">
        <div
          class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4"
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
              />
            </span>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>
