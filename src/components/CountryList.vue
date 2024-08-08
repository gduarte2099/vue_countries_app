<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
    <div v-for="(country, index) in countries" :key="index" class="border border-gray-300 rounded p-3">
      <CountryItem :country="country" />
      <a :href="url" target="_blank"> <input class="bg-sky-700 hover:bg-sky-500 text-white py-0.5 px-1.5 rounded mt-1"
          type="submit" @click="showName(index)" value="More Info"> </a>
    </div>
  </div>
</template>

<script setup>
import CountryItem from './CountryItem.vue';
import { defineProps, ref } from 'vue';
const props = defineProps({ countries: Array })
const countryName = ref('')
const space = / /gi;
const url = ref('')

const showName = (index) => {
  url.value = 'https://en.wikipedia.org/wiki/'
  //console.log(props.countries[index].name.common)
  countryName.value = props.countries[index].name.common
  url.value = url.value + countryName.value.replace(space, '_')
}

</script>

<style scoped>
input:hover{
  cursor: pointer;
}
</style>