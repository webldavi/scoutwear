<template>
  <NuxtLayout is-home>
    <section class="w-full min-h-screen bg-scroll relative overflow-hidden rounded-b-2xl" id="heroSection">
      <div class="w-full h-full absolute top-0 bg-brand/80 pt-[210px] flex items-center justify-center text-white/80 flex flex-col gap-4">
        <h1 class="text-6xl lg:text-9xl font-bold ">SCOUTWEAR</h1>

        <p class="text-xl lg:text-3xl max-w-[750px] text-center">Vista-se para a aventura diária com estilo e conforto. Inspire-se no espírito escoteiro.</p>

        <span class="text-xl lg:text-2xl">@scoutwear.co</span>
      </div>
    </section>

    <ContribuitorsSection/>
  </NuxtLayout>
</template>

<script setup>
</script>

<style scoped>
#heroSection {
  background-image: url('~/assets/images/background_hero_section.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>