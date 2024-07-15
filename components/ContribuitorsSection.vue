<template>
  <section class="w-full flex gap-12 items-center justify-center py-4">
    <img :src="GecanLogo" alt="44 GECAN RN"/>

    <img :src="UebLogo" alt="União dos escoteiros do brasil"/>

    <img :src="GeuLogo" alt="31 GEU RN"/>
  </section>
</template>

<script setup>
import GeuLogo  from '~/assets/images/31geu_logo.png';
import GecanLogo from '~/assets/images/44gecan_logo.png';
import UebLogo from '~/assets/images/ueb_logo.png'
</script>