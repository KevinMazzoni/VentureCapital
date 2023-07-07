<template>
    <img :src="url" class="centered-image mt-4">
    <div class="container">
        
        <div class="row">
            <div class="container-motto text-center mt-4">
                "{{ data.motto }}"
            </div>
        </div>
    </div>
</template>

<script setup>
import useAssets from '~/composables/useAssets';

const rowData = await useFetch('/api/aboutUs');
const data = rowData.data._value
const url = useAssets(`/assets/persons/${data.url}`)
</script>

<style scoped>
.centered-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  object-fit: cover;
  margin: 0 auto;
}
.container-motto {
    font-style: italic;
    font-size: xx-large;
    width: 100%;
    background-color: lightblue;
}
</style>