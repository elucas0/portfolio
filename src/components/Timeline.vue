<script setup lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
import Divider from "primevue/divider";
import Tag from "primevue/tag";
import i18next from "i18next";
</script>

<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <div
        class="hidden md:block absolute h-3/4 w-0.5 bg-white/50 left-1/2 -translate-x-1/2 z-0"
      >
        <div
          class="absolute -top-4 left-1/2 -translate-x-1/2 flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm bg-surface-700 dark:bg-surface-900"
        >
          <i class="pi pi-desktop"></i>
        </div>

        <div
          class="absolute -bottom-4 left-1/2 -translate-x-1/2 flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm bg-surface-700 dark:bg-surface-900"
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
              <div class="flex flex-wrap gap-2 mt-4">
                <Tag value="Software engineering" severity="primary" />
                <Tag value="Linux system administration" severity="primary" />
                <Tag value="DevOps" severity="primary" />
                <Tag value="DBMS" severity="primary" />
              </div>
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
              <div class="flex flex-wrap gap-2 mt-4">
                <Tag value="Remote sensing" severity="primary" />
                <Tag value="Big Earth Data" severity="primary" />
                <Tag value="Deep Learning" severity="primary" />
                <Tag value="Machine Learning" severity="primary" />
                <Tag value="Image Processing" severity="primary" />
              </div>
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
      <div class="hidden md:block"></div>
      <div class="hidden md:block"></div>
      <div class="md:pr-12 relative">
        <Card>
          <template #title>{{ i18next.t("timeline.thesis") }}</template>
          <template #subtitle>
            {{ i18next.t("timeline.thesisSubtitle") }}
          </template>
          <template #content>
            <div class="flex flex-col items-start">
              <img
                src="/assets/logo/logoESAphi-lab.svg"
                alt="Universität Salzburg"
                width="200"
              />
              <div class="flex flex-wrap gap-2 mt-4">
                <Tag value="ViT" severity="primary" />
                <Tag value="GeoFM" severity="primary" />
                <Tag value="Domain gap" severity="primary" />
              </div>

              <Divider />
              <div class="flex gap-3">
                <Button
                  as="a"
                  :label="i18next.t('timeline.button')"
                  href="https://philab.esa.int/"
                  target="_blank"
                  rel="noopener"
                  iconPos="right"
                  icon="pi pi-arrow-right"
                />
                <Button
                  as="a"
                  :label="i18next.t('timeline.button2')"
                  href="https://zenodo.org/records/23350441?token=eyJhbGciOiJIUzUxMiJ9.eyJpZCI6IjBjZmE2NDgwLTIwNjgtNGIxYy1hMTQxLWZkZmE5YjQwMGQ5MCIsImRhdGEiOnt9LCJyYW5kb20iOiJiZWExNmE0NWY2MDI3YTVkNWIwODg3NmVmNWZjMzM4NyJ9.2hYXBCHMomsUfL-1UnPlLqLEelSiItm058I-HJj7xZyllURN8IEwkc44zI2d-1xUGUr9hIb8i2Vs5-cVdlVGqg"
                  target="_blank"
                  rel="noopener"
                  iconPos="right"
                  icon="pi pi-book"
                />
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
