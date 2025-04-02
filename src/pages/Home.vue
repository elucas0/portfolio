<script setup>
import Card from "primevue/card";
import Timeline from "../components/Timeline.vue";
import Image from "primevue/image";
import i18next from "i18next";
import Header from "../components/Header.vue";
import Skills from "../components/Skills.vue";
import Tabs from "primevue/tabs";
import gisProjectsFr from "../locales/gis-projects-fr.json";
import gisProjectsEn from "../locales/gis-projects-en.json";
import webProjectsFr from "../locales/web-projects-fr.json";
import webProjectsEn from "../locales/web-projects-en.json";
import ProjectsCarousel from "../components/ProjectsCarousel.vue";
import Divider from "primevue/divider";
import ScrollTop from "primevue/scrolltop";
</script>

<template>
  <section id="header" class="w-full">
    <Header />
  </section>

  <section id="timeline" class="w-full">
    <Timeline />
  </section>

  <section class="w-full">
    <Card
      class="bg-white/50 dark:bg-surface-900 rounded-xl dark:border dark:border-surface-700 shadow-sm"
    >
      <template #content>
        <div class="p-2 sm:p-4">
          <ProjectsCarousel
            id="gis-projects"
            :title="i18next.t('projects.gisTitle')"
            :subtitle="i18next.t('projects.gisSubtitle')"
            :frProjects="gisProjectsFr"
            :enProjects="gisProjectsEn"
          />
          <Divider class="my-4 md:my-6" />
          <ProjectsCarousel
            id="web-projects"
            :title="i18next.t('projects.webTitle')"
            :subtitle="i18next.t('projects.webSubtitle')"
            :frProjects="webProjectsFr"
            :enProjects="webProjectsEn"
          />
        </div>
      </template>
    </Card>
  </section>

  <section id="skills" class="w-full">
    <Skills />
  </section>
  <ScrollTop />
</template>
