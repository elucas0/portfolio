<script setup lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
import Divider from "primevue/divider";
import i18next from "i18next";
</script>

<template>
  <div class="card">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <!-- Connection line between cards with icons -->
      <div
        class="hidden md:block absolute h-3/4 w-0.5 bg-white/50 left-1/2 -translate-x-1/2 z-0"
      >
        <!-- Desktop icon at top -->
        <div
          class="absolute -top-4 left-1/2 -translate-x-1/2 flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm"
          style="background-color: #9c27b0"
        >
          <i class="pi pi-desktop"></i>
        </div>

        <!-- Globe icon at bottom -->
        <div
          class="absolute -bottom-4 left-1/2 -translate-x-1/2 flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm"
          style="background-color: #006d00"
        >
          <i class="pi pi-globe"></i>
        </div>
      </div>

      <!-- Bachelor in Computer Science -->
      <div class="md:pr-12 relative">
        <Card class="bg-white/50 dark:bg-surface-900 p-4 backdrop-blur-md">
          <template #title> Bachelor in Computer Science </template>
          <template #subtitle> IUT de Vannes 2021-2024 </template>
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
                severity="secondary"
                iconPos="right"
                icon="pi pi-arrow-right"
              />
            </div>
          </template>
        </Card>
      </div>

      <!-- Empty placeholder for first row second column -->
      <div class="hidden md:block"></div>

      <!-- Empty placeholder for second row first column -->
      <div class="hidden md:block"></div>

      <!-- Copernicus Master -->
      <div class="md:pl-12 relative">
        <Card class="bg-white/50 dark:bg-surface-900 p-4 backdrop-blur-md">
          <template #title> Copernicus Master in Digital Earth </template>
          <template #subtitle>
            Paris Lodron Universität Salzburg 2024-
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
                severity="secondary"
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
