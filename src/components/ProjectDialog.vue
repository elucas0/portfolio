<script setup lang="ts">
import { inject, ref, onMounted } from "vue";

const dialogRef: any = inject("dialogRef");

const params = ref({
  title: "",
  description: "",
  status: "",
  image: "",
  link: "",
  demo: false,
});

onMounted(() => {
  if (dialogRef?.value?.data?.project) {
    params.value = dialogRef.value.data.project;
  }
});

const getProjectStatus = (projectStatus: string) => {
  const status = projectStatus.toLowerCase();
  if (status === "completed" || status === "terminé") return "primary";
  if (status === "on-going" || status === "en cours") return "warn";
  return "info";
};
</script>

<template>
  <div class="flex gap-3 align-baseline">
    <p class="text-gray-600 dark:text-gray-300">
      {{ params.description }}
    </p>
    <Tag
      v-if="params.status"
      :value="params.status"
      :severity="getProjectStatus(params.status)"
      style="left: 5px; top: 5px"
    />
  </div>
</template>
