<script setup lang="ts">

const handleDownload = () => {
  window.open('src/assets/CV_Info.pdf', '_blank')
}

</script>

<template>
  <button className="flex items-center rounded-full px-4 py-3 bg-slate-200" @click="handleDownload">
    <span className="mr-2">Télécharger CV</span>
    <!-- <img src="/chemin/vers/votre/logo-telechargement.png" alt="Téléchargement" className="w-4 h-4"> -->
  </button>
</template>