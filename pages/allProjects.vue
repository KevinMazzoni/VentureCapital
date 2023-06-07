<template>
    <div class="container">
        <div class="row">
            <div v-for="card of cards" class="col-8">               
                <NuxtLink :to="{
                  path: '/project',
                  query: { name: card.name, eco: card.eco }
                }">
                    <ProjectCard :name="card.name" :url="card.url" :caption="card.caption"/>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectCard_try from '../components/cards/ProjectCard_try.vue';
import ProjectCard from '~/components/cards/ProjectCard.vue';

export default {
    components: {
        ProjectCard_try,
        ProjectCard
    }, 
    data() {
        return {
            cards: [
                {
                    eco: 'This is the eco and social prec',
                    name: 'IntelliHire',
                    url:'/_nuxt/assets/projects/IntelliHire.jpg', 
                    caption: 'IntelliHire revolutionizes the interview process of a company, by using AI to perform a CV screening and the first step of the interview.'
                }, 
                {
                    eco: 'This is the eco and social prec',
                    name: 'GreenMe',
                    url:'/_nuxt/assets/projects/GreenEnergy.jpeg', 
                    caption: 'GreenMe aims at generating green energy from multiple renewable sources. It has been awarded as one of the most disruptive company in the sector.'
                }
            ]
        }
    }
}
</script>

<style>
.row{
    height: auto;
}
</style>