<template>
  <div class="h-46 sm:h-36 lg:mb-2 md:mb-0 md:h-36 lg:h-46">
      <img class="h-46 sm:h-36 w-full" :src=" country.flags.svg " :alt=" country.flags.alt ">
  </div>
  <h4 class="text-xl font-bold text-gray-500">{{ country.name.common }} ({{ country.cca3 }})</h4>
  <p class="text-sm text-gray-400">Capital: <span v-for=" capital  in  country.capital " class="font-bold"> {{ capital }}
      <template> </template> </span></p>
  <p class="text-sm text-gray-400">Population: <span class="font-bold">{{ country.population?.toLocaleString() }}</span>
  </p>
  <p class="text-sm text-gray-400">Region: <span class="font-bold">{{ country.region }}</span></p>
</template>

<script setup>
import { defineProps} from 'vue';
const props = defineProps({ country: Object })

</script>

<style scoped>
img{
  object-fit: contain;
}
</style>