// filepath: /home/elouann/copernicus/portfolio/src/components/Footer.vue
<script setup>
import Button from "primevue/button";
import i18next from "i18next";

const githubTooltip = i18next.t("header.openGithub");
const linkedinTooltip = i18next.t("header.openLinkedin");
const emailTooltip = i18next.t("header.contactMe");
</script>

<template>
  <footer>
    <div
      class="flex flex-col md:flex-row justify-between items-center rounded-t-lg px-8 pt-6 pb-4 bg-white/50 dark:bg-surface-900 backdrop-blur-md dark:border-t dark:border-l dark:border-r dark:border-surface-700"
    >
      <div
        class="flex flex-col items-center md:items-start gap-1 text-sm text-gray-600 dark:text-gray-400"
      >
        <p>
          {{ i18next.t("footer.createdBy") }}
        </p>
        <p>
          © {{ new Date().getFullYear() }} Copernicus Portfolio.
          {{ i18next.t("footer.copyright") }}
        </p>
      </div>
      <div class="flex space-x-4 mt-2 md:mt-0">
        <Button
          as="a"
          href="https://github.com/elucas0/portfolio"
          icon="pi pi-github"
          aria-label="{{ i18next.t('footer.openRepository') }}"
          rounded
          severity="secondary"
          target="_blank"
          rel="noopener"
        />
        <Button
          as="a"
          severity="secondary"
          rounded
          href="https://www.linkedin.com/in/elouann-lucas/"
          icon="pi pi-linkedin"
          aria-label="{{ i18next.t('header.openLinkedin') }}"
          target="_blank"
          rel="noopener"
          v-tooltip.top="linkedinTooltip"
        />
        <Button
          as="a"
          severity="secondary"
          rounded
          href="mailto:elouannlucas56@gmail.com"
          icon="pi pi-envelope"
          aria-label="`{{ i18next.t('header.contactMe') }}`"
          v-tooltip.top="emailTooltip"
          @click="openContactForm"
        />
      </div>
    </div>
  </footer>
</template>
