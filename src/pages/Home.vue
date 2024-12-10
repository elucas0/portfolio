<script setup>
import Card from "primevue/card";
import Timeline from "../components/Timeline.vue";
import Image from "primevue/image";
import i18next from "i18next";
import Carousel from "../components/Carousel.vue";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen pt-10 gap-4 max-w-3xl"
  >
    <section
      class="bg-white dark:bg-surface-900 p-10 rounded-xl flex gap-8 w-full"
    >
      <Image
        src="src/assets/moi.jpg"
        alt="Photo de profil Elouann"
        width="200"
        image-class="rounded-full border-4"
      />
      <div class="flex flex-col gap-2">
        <h1 class="text-5xl font-extrabold dark:text-white">Elouann Lucas</h1>
        <p class="dark:text-white">{{ i18next.t("intro.description") }}</p>
      </div>
    </section>
    <section
      class="bg-white dark:bg-surface-900 p-10 rounded-xl flex flex-col gap-8 w-full"
    >
      <Timeline />
    </section>
    <section
      class="bg-white dark:bg-surface-900 p-10 rounded-xl flex flex-col gap-8 w-full"
    >
      <Carousel />
    </section>
  </div>
  <ScrollTop />
</template>
