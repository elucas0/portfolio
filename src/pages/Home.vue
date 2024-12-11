<script setup>
import Card from "primevue/card";
import Timeline from "../components/Timeline.vue";
import Image from "primevue/image";
import i18next from "i18next";
import Carousel from "../components/Carousel.vue";
import Header from "../components/Header.vue";
import Skills from "../components/Skills.vue";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen pt-10 gap-4 max-w-4xl"
  >
    <section
      id="header"
      class="bg-white dark:bg-surface-900 p-10 rounded-xl flex gap-8 w-full"
    >
      <Header />
    </section>
    <section
      id="timeline"
      class="bg-white dark:bg-surface-900 p-10 rounded-xl flex flex-col gap-8 w-full"
    >
      <Timeline />
    </section>
    <section
      id="projects"
      class="bg-white dark:bg-surface-900 p-10 rounded-xl flex flex-col gap-8 w-full"
    >
      <Carousel />
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
