<script setup>
import Card from "primevue/card";
import Timeline from "../components/Timeline.vue";
import Image from "primevue/image";
import i18next from "i18next";
import ProjectCarousel from "../components/ProjectsCarousel.vue";
import Header from "../components/Header.vue";
import Skills from "../components/Skills.vue";
import Tabs from "primevue/tabs";

import webEnProjects from "../locales/web_en_projects.json"
import webFrProjects from "../locales/web_fr_projects.json";
import otherEnProjects from "../locales/other_en_projects.json";
import otherFrProjects from "../locales/other_fr_projects.json";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen pt-10 gap-4 max-w-4xl"
  >
    <section
      id="header"
      class="bg-white/30 dark:bg-surface-900 backdrop-blur-xl p-10 rounded-xl flex gap-8 w-full"
    >
      <Header />
    </section>
    <section id="timeline" class="p-10 rounded-xl flex flex-col gap-8 w-full">
      <Timeline />
    </section>
    <section
      id="projects"
      class="bg-white p-10 rounded-xl flex flex-col gap-8 w-full"
    >
      <Tabs value="0">
        <TabList>
          <Tab value="0" as="div" class="flex items-center gap-2">
            <span>{{ i18next.t("projects.web") }}</span>
            <Badge :value="webEnProjects.length" />
          </Tab>
          <Tab value="1" as="div" class="flex items-center gap-2">
            <span>{{ i18next.t("projects.gis") }}</span>
            <Badge :value="otherEnProjects.length" />
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <ProjectCarousel
              :fr-projects="webFrProjects"
              :en-projects="webEnProjects"
            />
          </TabPanel>
          <TabPanel value="1">
            <ProjectCarousel
              :fr-projects="otherFrProjects"
              :en-projects="otherEnProjects"
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
    <section
      id="skills"
      class="bg-white dark:bg-surface-900 p-10 rounded-xl flex flex-col gap-8 w-full"
    >
      <Skills />
    </section>
  </div>
  <ScrollTop />
</template>
