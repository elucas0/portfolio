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
import { computed } from "vue";

const gisProjects = computed(() =>
  Object.values(i18next.language === "fr-FR" ? gisProjectsFr : gisProjectsEn)
);

const webProjects = computed(() =>
  Object.values(i18next.language === "fr-FR" ? webProjectsFr : webProjectsEn)
);
</script>

<template>
  <section id="header" class="w-full">
    <Header />
  </section>

  <section class="w-full">
    <Card class="p-0">
      <template #content>
        <section id="gis-projects">
          <ProjectsCarousel
            id="gis-projects"
            :title="i18next.t('projects.gisTitle')"
            :subtitle="i18next.t('projects.gisSubtitle')"
            :projects="gisProjects"
          />
        </section>
        <Divider class="my-4 md:my-6" />
        <section id="web-projects">
          <ProjectsCarousel
            :title="i18next.t('projects.webTitle')"
            :subtitle="i18next.t('projects.webSubtitle')"
            :projects="webProjects"
          />
        </section>
      </template>
    </Card>
  </section>

  <section id="timeline" class="w-full">
    <Timeline />
  </section>

  <section id="skills" class="w-full">
    <Skills />
  </section>
  <section class="w-full">
    <Footer />
  </section>
  <ScrollTop />
</template>
