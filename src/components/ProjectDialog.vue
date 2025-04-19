<script setup lang="ts">
import { inject, ref, onMounted, Ref } from "vue";
import { Project } from "./ProjectsCarousel.vue";

const dialogRef: any = inject("dialogRef");

const params: Ref<Project> = ref({
  title: "Unnamed Project",
  description: "No description available",
  status: "Unknown",
});

onMounted(() => {
  if (dialogRef?.value?.data?.project) {
    params.value = dialogRef.value.data.project;
  }
});
</script>

<template>
  <div class="flex gap-3 align-baseline">
    <p class="text-gray-600 dark:text-gray-300">
      {{ params.description }}
    </p>
  </div>
  <div v-if="params.demo" class="mt-4">
    <iframe
      :src="params.demo"
      class="w-full border border-gray-300 rounded-md h-96"
      title="Project Demo"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
  </div>
</template>
