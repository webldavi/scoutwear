<template>
  <main>
    <nav class="absolute top-0 w-full z-20 h-max p-[20px] pb-0 flex flex-col gap-4 items-center justify-center"
    :class="[gridPadding(), {
      'bg-brand': !isHome
    }]">
      <div class="max-w-full w-full flex gap-8 items-center justify-between">
        <img :src="BrandImage" alt="logo da scoutwear" class="h-7 md:h-12"/>

        <Input placeholder="Pesquisar por..." class="flex-1 hidden md:flex"/>

        <a>
          <FontAwesome :icon="['fab', 'whatsapp']" class="text-white h-6 w-6"/>
        </a>

        <NuxtLink>
          <FontAwesome :icon="['far', 'heart']" class="text-white h-6 w-6"/>
        </NuxtLink>

        <CartButton/>

       <div class="md:hidden">
         <MobileDrawer/>
       </div>
      </div>

      <div class="w-full flex gap-8 items-center text-white font-medium font-[14px] hidden md:flex">
        <CepButton/>

        <NuxtLink>
          Incio
        </NuxtLink>

        <NuxtLink>
          Produtos
        </NuxtLink>

        <a>
          Instagram
        </a>

        <a>
          Whatsapp
        </a>
      </div>

      <div class="w-full bg-white py-2" :class="{
        'rounded-t-lg ': !isHome,
        'rounded-lg': isHome
      }">
        <DepartmentsPopover/>

        <Button variant="ghost" >
          Azul
        </Button>

        <Button variant="ghost">
          Bege
        </Button>

        <Button variant="ghost">
          Roxo
        </Button>
      </div>
    </nav>

    <slot/>
  </main>
</template>

<script setup lang="ts">
import BrandImage from '~/assets/images/Brand.png'
import {Input} from "~/components/ui/input";
import {gridPadding} from "~/utils/helpers";

const props = defineProps({
  isHome: Boolean,
})
</script>