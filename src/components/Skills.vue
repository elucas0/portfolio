<script setup lang="ts">
import { ref } from "vue";
import i18next from "i18next";
import Tag from "primevue/tag";
import Accordion from "primevue/accordion";
import { AccordionPanel } from "primevue";

const skillCategories = ref([
  {
    id: "languages",
    value: "0",
    titleFr: "Langages de programmation",
    titleEn: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "C++", level: 60 },
    ],
  },
  {
    id: "gis",
    value: "1",
    titleFr: "Technologies SIG",
    titleEn: "GIS Technologies",
    skills: [
      { name: "QGIS", level: 80 },
      { name: "ArcGIS Products", level: 60 },
      { name: "PostGIS", level: 50 },
      { name: "Google Earth Engine", level: 50 },
    ],
  },
  {
    id: "other",
    value: "2",
    titleFr: "Autres compétences",
    titleEn: "Other Skills",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "Deep Learning", level: 80 },
      { name: "UI/UX Design", level: 30 },
      { name: "GraphQL", level: 30 },
    ],
  },
  {
    id: "tools",
    value: "3",
    titleFr: "Outils & DevOps",
    titleEn: "Tools & DevOps",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 80 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    id: "frontend",
    value: "4",
    titleFr: "Technologies Front-end",
    titleEn: "Front-end Technologies",
    skills: [
      { name: "React", level: 90 },
      { name: "TailwindCSS", level: 90 },
      { name: "Vue.js", level: 80 },
      { name: "CSS", level: 75 },
    ],
  },
  {
    id: "backend",
    value: "5",
    titleFr: "Technologies Back-end",
    titleEn: "Back-end Technologies",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 70 },
      { name: "NestJS", level: 60 },
    ],
  },
]);

const getTitle = (category: any): string => {
  return i18next.language === "fr-FR" ? category.titleFr : category.titleEn;
};
</script>

<template>
  <Accordion :multiple="true" :value="['0']">
    <AccordionPanel
      v-for="category in skillCategories"
      :key="category.id"
      :value="category.value"
    >
      <AccordionHeader
        >{{ getTitle(category) }}
        <Badge :value="category.skills.length" class="ml-auto mr-2" />
      </AccordionHeader>
      <AccordionContent>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:mx-2 py-4">
          <div
            v-for="skill in category.skills"
            :key="skill.name"
            class="flex flex-col items-center"
          >
            <Knob
              :model-value="skill.level"
              :readonly="true"
              :show-value="false"
              :value-color="
                skill.level >= 90
                  ? '#007444'
                  : skill.level >= 75
                  ? '#4db993'
                  : skill.level >= 50
                  ? '#80ccb2'
                  : '#b3e0d1'
              "
            />
            <Tag :value="skill.name" />
          </div>
        </div>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
