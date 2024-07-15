<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="ghost">
        Todos os modelos
      </Button>
    </PopoverTrigger>

    <PopoverContent class="w-80 z-50 rounded-b-md" align="start">
      <Button class="w-full flex justify-start" variant="link">
        Camiseta pioneira
      </Button>

      <Button class="w-full flex justify-start" variant="link">
        Camiseta Promessa
      </Button>
    </PopoverContent>
  </Popover>
</template>
<script setup lang="ts">
import {Popover, PopoverContent, PopoverTrigger} from "~/components/ui/popover";
</script>