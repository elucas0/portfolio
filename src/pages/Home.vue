<script setup>
import Card from "primevue/card";
import Timeline from "../components/Timeline.vue";
import Image from "primevue/image";
import i18next from "i18next";
import Header from "../components/Header.vue";
import Skills from "../components/Skills.vue";
import Footer from "../components/Footer.vue";
import Tabs from "primevue/tabs";
import gisProjectsFr from "../locales/gis-projects-fr.json";
import gisProjectsEn from "../locales/gis-projects-en.json";
import webProjectsFr from "../locales/web-projects-fr.json";
import webProjectsEn from "../locales/web-projects-en.json";
import ProjectsCarousel from "../components/ProjectsCarousel.vue";
import Divider from "primevue/divider";
import ScrollTop from "primevue/scrolltop";
import ProjectHighlight from "../components/ProjectHighlight.vue";
import { computed } from "vue";

const gisProjects = computed(() =>
  Object.values(i18next.language === "fr-FR" ? gisProjectsFr : gisProjectsEn)
);

const webProjects = computed(() =>
  Object.values(i18next.language === "fr-FR" ? webProjectsFr : webProjectsEn)
);

const highlightedProject = computed(() => {
  const projects = i18next.language === "fr-FR" ? gisProjectsFr : gisProjectsEn;
  // Select 'landcover' as the featured project, or fallback to the first one
  return projects["landcover"] || Object.values(projects)[0];
});
</script>

<template>
  <section id="header" class="w-full animate-fade-in-up">
    <Header />
  </section>

  <section id="highlight" class="w-full mb-8 animate-fade-in-up">
    <ProjectHighlight :project="highlightedProject" />
  </section>

  <section class="w-full animate-fade-in-up">
    <Card class="p-0">
      <template #content>
        <section id="gis-projects">
          <ProjectsCarousel
            id="gis-projects"
            :title="i18next.t('projects.gisTitle')"
            :subtitle="i18next.t('projects.gisSubtitle')"
            :projects="gisProjects"
            icon="pi pi-map"
          />
        </section>
        <Divider class="my-4 md:my-6" />
        <section id="web-projects">
          <ProjectsCarousel
            :title="i18next.t('projects.webTitle')"
            :subtitle="i18next.t('projects.webSubtitle')"
            :projects="webProjects"
            icon="pi pi-globe"
          />
        </section>
      </template>
    </Card>
  </section>

  <section id="timeline" class="w-full animate-fade-in-up">
    <Timeline />
  </section>

  <section id="skills" class="w-full animate-fade-in-up">
    <Skills />
  </section>
  <section class="w-full animate-fade-in-up">
    <Footer />
  </section>
  <ScrollTop />
</template>
