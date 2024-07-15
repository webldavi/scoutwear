<template>
  <Popover>
    <PopoverTrigger>
      <Button variant="ghost" class=" text-[14px] p-2 flex gap-2 font-medium">
        <FontAwesome :icon="['fas', 'location-dot']" class="h-6 w-6"/>
        informe seu CEP
      </Button>
    </PopoverTrigger>

    <PopoverContent :align="center ? 'center' : 'start'" class="min-w-max"  :side="top ? 'top' : 'bottom'">
      <FormField name="cep" v-slot="{componentField}">
        <FormItem>
          <FormLabel class="text-foreground">Digite seu CEP</FormLabel>

          <FormControl >
            <div class="w-max flex flex-row items-center gap-6">
              <PinInput @update:model-value="value => setFieldValue('code', value)" >
                <PinInputGroup>
                  <PinInputInput v-for="(id, index) in 8" :key="id" :index="index" class="w-6 h-6 lg:w-10 lg:h-10"/>
                </PinInputGroup>
              </PinInput>

              <Button variant="secondary">
                OK!
              </Button>
            </div>
          </FormControl>

          <FormMessage/>
        </FormItem>
      </FormField>
    </PopoverContent>
  </Popover>
</template>
<script setup>
import {PinInput, PinInputGroup, PinInputInput} from "~/components/ui/pin-input/index.ts";
import {FormControl, FormItem, FormLabel} from "~/components/ui/form/index.ts";
import {array, object, string} from "yup";

const props = defineProps({
  center: Boolean,
  top: Boolean
})

const pinValue = ref([])

const {setFieldValue} = useForm({
  validationSchema: object().shape({
    cep: array().of(string().required('CEP Invalido')).required().min(8).label('CEP')
  })
})
</script>