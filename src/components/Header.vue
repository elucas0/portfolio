<script setup lang="ts">
import i18next from "i18next";
import Divider from "primevue/divider";
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-8">
    <div class="w-fit">
      <Image
        src="/assets/moi.jpg"
        alt="Photo de profil Elouann"
        width="450"
        image-class="rounded-full border-4"
      />
    </div>
    <div class="flex flex-col gap-2">
      <h1 class="text-5xl font-extrabold dark:text-white">Elouann Lucas</h1>
      <p class="dark:text-white">{{ i18next.t("intro.description") }}</p>
      <Divider />
      <div class="flex gap-4">
        <Button
          as="a"
          onclick="window.open('/europass_elouann_lucas.pdf')"
          icon="pi pi-file-pdf"
          aria-label="Download Europass"
          v-tooltip.bottom="'Open Europass'"
        />
        <Button
          as="a"
          href="https://github.com/elucas0"
          icon="pi pi-github"
          aria-label="Open GitHub profile"
          target="_blank"
          rel="noopener"
          v-tooltip.bottom="'Open GitHub profile'"
        />
        <Button
          as="a"
          href="https://www.linkedin.com/in/elouann-lucas/"
          icon="pi pi-linkedin"
          aria-label="Open LinkedIn profile"
          target="_blank"
          rel="noopener"
          v-tooltip.bottom="'Open LinkedIn profile'"
        />
        <Button
          as="a"
          href="mailto:elucas56@protonmail.com"
          icon="pi pi-envelope"
          aria-label="Send email"
          target="_blank"
          rel="noopener"
          v-tooltip.bottom="'Contact me'"
        />
      </div>
    </div>
  </div>
</template>
