<script setup lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
import Divider from "primevue/divider";
import i18next from "i18next";
</script>

<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <div
        class="hidden md:block absolute h-3/4 w-0.5 bg-white/50 left-1/2 -translate-x-1/2 z-0"
      >
        <div
          class="absolute -top-4 left-1/2 -translate-x-1/2 flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm bg-black/50 dark:bg-surface-900"
        >
          <i class="pi pi-desktop"></i>
        </div>

        <div
          class="absolute -bottom-4 left-1/2 -translate-x-1/2 flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm bg-black/50 dark:bg-surface-900"
        >
          <i class="pi pi-globe"></i>
        </div>
      </div>

      <div class="md:pr-12 relative">
        <Card>
          <template #title>{{ i18next.t("timeline.bachelor") }}</template>
          <template #subtitle>
            {{ i18next.t("timeline.bachelorSubtitle") }}
          </template>
          <template #content>
            <div class="flex flex-col items-start">
              <img
                src="/assets/logo/IUT_VANNES_LOGO.png"
                alt="IUT de Vannes"
                width="200"
                class="rounded-md"
              />
              <Divider />
              <Button
                as="a"
                :label="i18next.t('timeline.button')"
                href="https://www.iutvannes.fr/welcome-to-iut-vannes/"
                target="_blank"
                rel="noopener"
                iconPos="right"
                icon="pi pi-arrow-right"
              />
            </div>
          </template>
        </Card>
      </div>
      <div class="hidden md:block"></div>
      <div class="hidden md:block"></div>
      <div class="md:pl-12 relative">
        <Card>
          <template #title>{{ i18next.t("timeline.master") }}</template>
          <template #subtitle>
            {{ i18next.t("timeline.masterSubtitle") }}
          </template>
          <template #content>
            <div class="flex flex-col items-start">
              <img
                src="/assets/logo/Universität_Salzburg_Plus_Logo.png"
                alt="Universität Salzburg"
                width="200"
                class="rounded-md"
              />
              <img
                src="/assets/logo/EN Co-funded by the EU_POS.jpg"
                width="200"
                class="mt-2 rounded-md"
              />
              <Divider />
              <Button
                as="a"
                :label="i18next.t('timeline.button')"
                href="https://www.master-cde.eu"
                target="_blank"
                rel="noopener"
                iconPos="right"
                icon="pi pi-arrow-right"
              />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
