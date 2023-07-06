<template>
    <div class="container">
        <div class="row">
            <div class="col-12 title">
                Our areas of competency
            </div>
        </div>
        <div class="row">
            <div class="col-12 caption">
                We're involved in numerous areas, looking forward to bet on promising startups in the most disruptive fields.
            </div>
        </div>
        <div class="row areas">
            <div v-for="area of areas" class="col-4">
                <NuxtLink :to="{
                  path: '/area',
                  query: { areaId: area.id, name: area.name, image:area.image, description: area.description, text: area.text, color: area.color }
                }" 
                class="link"
                >
                    <AreaCard :name="area.name" :image="area.image" :description="area.description" :text="area.text" :color="area.color"/>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    import AreaCard from '~/components/cards/AreaCard.vue'
    import useAssets from "~/composables/useAssets.js" 

    let areas = [];

    const data = await useFetch('/api/areas')
    for(let area of data.data.value){
        area.image = useAssets(`/assets/areas/${area.image}`)
        areas.push(area)
    }
</script>

<style scoped>
    .link{
        text-decoration: none;
        color: black;
    }
    .container{
        margin-top: 4%;
    }
    .col-12{
        text-align: center;
    }
    .areas{
        margin-top: 3%;
        justify-content: center;
    }
</style>