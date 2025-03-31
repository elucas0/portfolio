<script setup>
import Card from "primevue/card";
import Timeline from "../components/Timeline.vue";
import Image from "primevue/image";
import i18next from "i18next";
import Header from "../components/Header.vue";
import Skills from "../components/Skills.vue";
import Tabs from "primevue/tabs";
import GisProjectsCarousel from "../components/projects/GisProjectsCarousel.vue";
import WebProjectsCarousel from "../components/projects/WebProjectsCarousel.vue";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen pt-10 gap-16 max-w-4xl"
  >
    <section id="header">
      <Header />
    </section>
    <section id="timeline" class="w-full">
      <Timeline />
    </section>
    <Card
      class="bg-white/50 dark:bg-surface-900 rounded-xl dark:border dark:border-surface-700"
    >
      <template #content>
        <GisProjectsCarousel id="gis-projects" />
        <Divider />
        <WebProjectsCarousel id="web-projects" />
      </template>
    </Card>
    <section id="skills" class="w-full">
      <Skills />
    </section>
  </div>
  <ScrollTop />
</template>
