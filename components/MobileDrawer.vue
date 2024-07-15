<template>
  <Drawer v-model:open="isOpen">
    <Button variant="outline" @click="isOpen = !isOpen">
      <FontAwesome :icon="['fas', 'bars']"/>
    </Button>

    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Opções</DrawerTitle>

        <DrawerDescription>Encontre aqui o que você precisa</DrawerDescription>
      </DrawerHeader>

      <div class="w-full flex flex-col gap-8 items-center font-medium font-[14px] p-4">
        <Input class="w-full" placeholder="Pesquise por um produto"/>

        <CepButton center top/>

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
    </DrawerContent>
  </Drawer>
</template>
<script setup lang="ts">
import {Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle} from "~/components/ui/drawer";

const isOpen = ref(false)
</script>