<script setup lang="ts">
import i18next from "i18next";
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-8">
    <Image
      src="src/assets/moi.jpg"
      alt="Photo de profil Elouann"
      width="200"
      image-class="rounded-full border-4"
    />
    <div class="flex flex-col gap-2">
      <h1 class="text-5xl font-extrabold dark:text-white">Elouann Lucas</h1>
      <p class="dark:text-white">{{ i18next.t("intro.description") }}</p>
      <div class="flex gap-4">
        <Button
          as="a"
          onclick="window.open('public/europass_elouann_lucas.pdf')"
          icon="pi pi-file-pdf"
          aria-label="Download Europass"
        />
        <Button
          as="a"
          href="https://github.com/elucas0"
          icon="pi pi-github"
          aria-label="Open GitHub profile"
          target="_blank"
          rel="noopener"
        />
        <Button
          as="a"
          href="https://www.linkedin.com/in/elouann-lucas/"
          icon="pi pi-linkedin"
          aria-label="Open LinkedIn profile"
          target="_blank"
          rel="noopener"
        />
        <Button
          as="a"
          href="mailto:elucas56@protonmail.com"
          icon="pi pi-envelope"
          aria-label="Send email"
          target="_blank"
          rel="noopener"
        />
      </div>
    </div>
  </div>
</template>
