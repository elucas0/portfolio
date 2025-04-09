<script setup lang="ts">
import { ref } from "vue";
import i18next from "i18next";
import ProgressBar from "primevue/progressbar";
import Tag from "primevue/tag";

const skillCategories = ref([
  {
    id: "languages",
    titleFr: "Langages de programmation",
    titleEn: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 80 },
      { name: "C++", level: 60 },
      { name: "Java", level: 80 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    id: "frontend",
    titleFr: "Technologies Front-end",
    titleEn: "Front-end Technologies",
    skills: [
      { name: "React", level: 90 },
      { name: "TailwindCSS", level: 90 },
      { name: "SCSS/CSS", level: 80 },
      { name: "Vue.js", level: 80 },
    ],
  },
  {
    id: "backend",
    titleFr: "Technologies Back-end",
    titleEn: "Back-end Technologies",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 70 },
      { name: "NestJS", level: 60 },
    ],
  },
  {
    id: "gis",
    titleFr: "Technologies SIG",
    titleEn: "GIS Technologies",
    skills: [
      { name: "QGIS", level: 80 },
      { name: "ArcGIS Pro & ArcGIS Online", level: 60 },
      { name: "PostGIS", level: 50 },
      { name: "Google Earth Engine", level: 50 },
    ],
  },
  {
    id: "tools",
    titleFr: "Outils & DevOps",
    titleEn: "Tools & DevOps",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 85 },
      { name: "GitHub Actions", level: 80 },
    ],
  },
  {
    id: "other",
    titleFr: "Autres compétences",
    titleEn: "Other Skills",
    skills: [
      { name: "UI/UX Design", level: 80 },
      { name: "Agile/Scrum", level: 70 },
      { name: "RESTful APIs", level: 80 },
      { name: "GraphQL", level: 60 },
      { name: "Machine Learning", level: 50 },
    ],
  },
]);

const getSkillLevelText = (level: number): string => {
  if (level >= 90) return i18next.language === "fr-FR" ? "Expert" : "Expert";
  if (level >= 80) return i18next.language === "fr-FR" ? "Avancé" : "Advanced";
  if (level >= 70)
    return i18next.language === "fr-FR" ? "Intermédiaire" : "Intermediate";
  return i18next.language === "fr-FR" ? "Débutant" : "Beginner";
};

const getSkillLevelColor = (level: number): string => {
  if (level >= 90) return "success";
  if (level >= 80) return "info";
  if (level >= 70) return "warning";
  return "secondary";
};

const getTitle = (category: any): string => {
  return i18next.language === "fr-FR" ? category.titleFr : category.titleEn;
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card
      v-for="category in skillCategories"
      :key="category.id"
      class="bg-white/50 dark:bg-surface-900 p-4 rounded-xl dark:border dark:border-surface-700 backdrop-blur-md"
    >
      <template #title>
        {{ getTitle(category) }}
      </template>
      <template #content>
        <div v-for="skill in category.skills" :key="skill.name" class="mb-4">
          <div class="flex justify-between items-center mb-1">
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ skill.name }}
            </span>
            <Tag
              :value="getSkillLevelText(skill.level)"
              :severity="getSkillLevelColor(skill.level)"
              class="text-xs"
            />
          </div>
          <ProgressBar
            :value="skill.level"
            :show-value="false"
            :class="`h-2`"
            :pt="{
              root: { class: 'rounded-full overflow-hidden' },
              value: { class: 'transition-all duration-1000 ease-out' },
            }"
          />
        </div>
      </template>
    </Card>
  </div>
</template>
