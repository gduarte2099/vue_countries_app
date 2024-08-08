<template>
  <PageHeader></PageHeader>
  <!--en tailwing 1=4px-->
  <div class="container max-w-screen-xlg mx-auto px-6 mb-8">
    <div class="mb-8 lg:text-center">
      <input type="text" class="border border-sky-700 rounded xsm:w-1/2 sm:w-full md:w-full lg:w-1/2 p-1 px-4 "
        placeholder="Search by name..." v-model="search" @input="searchByName">
    </div>
    <!-- <CountryList :countries="filteredCountries.length > 0 ?
      filteredCountries : countries"></CountryList> -->
    <CountryList v-if="search === ''" :countries="countries"></CountryList>
    <CountryList v-else :countries="filteredCountries"></CountryList>
    <span v-if="filteredCountries.length === 0 && search !== ''">No exsite matching. Escriba bien, pendejo!</span>
  </div>
</template>

<script setup>
import PageHeader from './components/PageHeader.vue';
import CountryList from './components/CountryList.vue';
import axiosClient from './services/axios.js'
import { onMounted, ref } from 'vue';
const countries = ref([])
const aux = ref([])
const search = ref('')
const filteredCountries = ref([])

const fetchCountries = async () => {
  try {
    const { data } = await axiosClient.get("/all")
    countries.value = data
    aux.value = data
  } catch (error) {
    console.log(error);
  }
}

const searchByName = () => {
  filteredCountries.value = countries.value.filter((country) =>
    country.name.common.toLowerCase().includes(search.value.toLowerCase()))
}

//realiza la peticion en la web
onMounted(() => {
  fetchCountries()

})


</script>

<style scoped>
@media only screen and (max-width: 300px) {
  input {
    width: 14.5rem;
  }
}

@media only screen and (max-width: 639px) {
  input {
    width: 100%;
  }
}
</style>
