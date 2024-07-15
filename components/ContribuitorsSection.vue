<template>
  <section class="w-full flex gap-12 items-center justify-center py-4">
    <img :src="GecanLogo" alt="44 GECAN RN"  class="max-w-16 lg:max-w-52"/>

    <img :src="UebLogo" alt="União dos escoteiros do brasil" class="max-w-16 lg:max-w-52"/>

    <img :src="GeuLogo" alt="31 GEU RN"  class="max-w-16 lg:max-w-52"/>
  </section>
</template>

<script setup>
import GeuLogo  from '~/assets/images/31geu_logo.png';
import GecanLogo from '~/assets/images/44gecan_logo.png';
import UebLogo from '~/assets/images/ueb_logo.png'
</script>