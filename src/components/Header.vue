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
  <div class="flex flex-col md:flex-row gap-8">
    <img
      src="/assets/portrait.jpg"
      alt="Photo de profil Elouann"
      class="w-1/4 h-full object-cover rounded-xl"
    />
    <Card>
      <template #title>
        <h1 class="text-5xl font-extrabold">Elouann Lucas</h1>
      </template>
      <template #subtitle>
        <p class="text-surface-700 dark:text-surface-400">
          {{ i18next.t("header.description") }}
        </p>
      </template>
      <template #content>
        <Divider />
        <div class="flex gap-4">
          <Button
            as="a"
            onclick="window.open('./europass_elouann_lucas.pdf')"
            icon="pi pi-file-pdf"
            aria-label="{{ i18next.t('header.openCV') }}"
            v-tooltip.bottom="cvTooltip"
          />
          <Button
            as="a"
            href="https://github.com/elucas0"
            icon="pi pi-github"
            aria-label="{{ i18next.t('header.openGithub') }}"
            target="_blank"
            rel="noopener"
            v-tooltip.bottom="githubTooltip"
          />
          <Button
            as="a"
            href="https://www.linkedin.com/in/elouann-lucas/"
            icon="pi pi-linkedin"
            aria-label="{{ i18next.t('header.openLinkedin') }}"
            target="_blank"
            rel="noopener"
            v-tooltip.bottom="linkedinTooltip"
          />
          <Button
            as="a"
            href="mailto:elouannlucas56@gmail.com"
            icon="pi pi-envelope"
            aria-label="`{{ i18next.t('header.copyEmail') }}`"
            v-tooltip.bottom="emailTooltip"
            @click="openContactForm"
          />
        </div>
      </template>
    </Card>
  </div>
</template>
