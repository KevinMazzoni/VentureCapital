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
                <!-- <NuxtLink :to="{
                  path: '/project',
                  query: { name: card.name, eco: card.eco, url:card.url}
                }" 
                class="link"
                > -->
                <AreaCard :name="area.name" :url="area.url" :caption="area.caption"/>
                <!-- </NuxtLink> -->
            </div>
        </div>
    </div>
</template>

<script>
import AreaCard from '~/components/cards/AreaCard.vue';

export default {
    components: {
        AreaCard
    }, 
    data() {
        return {
            areas: [
                
                {
                    eco: 'This is the eco and social prec',
                    name: 'Green',
                    url:'/_nuxt/assets/areas/green.jpeg', 
                    caption: 'GreenMe aims at generating green energy from multiple renewable sources. It has been awarded as one of the most disruptive company in the sector.'
                },
                {
                    eco: 'This is the eco and social prec',
                    name: 'Tech',
                    url:'/_nuxt/assets/areas/BlueTech.jpg', 
                    caption: 'IntelliHire revolutionizes the interview process of a company, by using AI to perform a CV screening and the first step of the interview.'
                },
                {
                    eco: 'This is the eco and social prec',
                    name: 'Healthcare',
                    url:'/_nuxt/assets/areas/Healthcare.jpeg', 
                    caption: 'AiMed aims at revolutionze the healthcare sector, putting in contact patients that suffers from a disease with a specialised doctor.'
                },
                {
                    eco: 'This is the eco and social prec',
                    name: 'Education',
                    url:'/_nuxt/assets/areas/Edu.jpeg', 
                    caption: '"Unlocking Knowledge, Empowering Minds - Transforming Education, One Student at a Time!" This is the motto of Edu4You.'
                }
            ]
        }
    },
    head(){
        return{
            title: "Glorious Koalas Inc."
        }
    }
}
</script>

<style scoped>
    .container{
        margin-top: 4%;
    }
    .col-12{
        text-align: center;
    }
    .areas{
        margin-top: 3%;
    }
</style>