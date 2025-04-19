<script setup lang="ts">
import i18next from "i18next";
import Divider from "primevue/divider";
// import ContactForm from "./ContactForm.vue";

const openContactForm = () => {
  //   dialog.open(ContactForm, {
  //     header: i18next.t("header.contactMe"),
  //     closeOnEscape: true,
  //     dismissableMask: true,
  //   });
};

const cvTooltip = i18next.t("header.openCV");
const githubTooltip = i18next.t("header.openGithub");
const linkedinTooltip = i18next.t("header.openLinkedin");
const emailTooltip = i18next.t("header.contactMe");
</script>

<template>
  <div class="flex flex-col sm:flex-row items-center gap-8">
    <div class="w-1/2 flex justify-center items-center">
      <img
        src="/assets/moi.jpg"
        alt="Photo de profil Elouann"
        class="rounded-full border-2 border-surface-200 dark:border-surface-700 shadow-lg"
      />
    </div>
    <div class="flex flex-col gap-2">
      <h1 class="text-5xl font-extrabold dark:text-white">Elouann Lucas</h1>
      <p class="dark:text-white">{{ i18next.t("header.description") }}</p>
      <Divider />
      <div class="flex gap-4">
        <Button
          as="a"
          onclick="window.open('./europass_elouann_lucas.pdf')"
          icon="pi pi-file-pdf"
          aria-label="{{ i18next.t('header.openCV') }}"
          v-tooltip.bottom="cvTooltip"
          class="shadow-lg"
        />
        <Button
          as="a"
          href="https://github.com/elucas0"
          icon="pi pi-github"
          aria-label="{{ i18next.t('header.openGithub') }}"
          target="_blank"
          rel="noopener"
          v-tooltip.bottom="githubTooltip"
          class="shadow-lg"
        />
        <Button
          as="a"
          href="https://www.linkedin.com/in/elouann-lucas/"
          icon="pi pi-linkedin"
          aria-label="{{ i18next.t('header.openLinkedin') }}"
          target="_blank"
          rel="noopener"
          v-tooltip.bottom="linkedinTooltip"
          class="shadow-lg"
        />
        <Button
          as="a"
          href="mailto:elouannlucas56@gmail.com"
          icon="pi pi-envelope"
          aria-label="`{{ i18next.t('header.copyEmail') }}`"
          v-tooltip.bottom="emailTooltip"
          @click="openContactForm"
          class="shadow-lg"
        />
      </div>
    </div>
  </div>
</template>
