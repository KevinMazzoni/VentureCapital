<template>
    <div class="container">
        <div class="row">
            <div v-for="card of cards" class="col-6">               
                <NuxtLink :to="{
                  path: '/project',
                  query: { name: card.name, eco: card.eco, url:card.url}
                }" 
                class="link"
                >
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
                    name: 'GreenMe',
                    url:'/_nuxt/assets/projects/GreenEnergy.jpeg', 
                    caption: 'GreenMe aims at generating green energy from multiple renewable sources. It has been awarded as one of the most disruptive company in the sector.'
                },
                {
                    eco: 'This is the eco and social prec',
                    name: 'IntelliHire',
                    url:'/_nuxt/assets/projects/IntelliHire.jpg', 
                    caption: 'IntelliHire revolutionizes the interview process of a company, by using AI to perform a CV screening and the first step of the interview.'
                },
                {
                    eco: 'This is the eco and social prec',
                    name: 'AiMed',
                    url:'/_nuxt/assets/projects/Healthcare_3.jpeg', 
                    caption: 'AiMed aims at revolutionze the healthcare sector, putting in contact patients that suffers from a disease with a specialised doctor.'
                },
                {
                    eco: 'This is the eco and social prec',
                    name: 'Edu4You',
                    url:'/_nuxt/assets/projects/Education.jpeg', 
                    caption: '"Unlocking Knowledge, Empowering Minds - Transforming Education, One Student at a Time!" This is the motto of Edu4You.'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .row{
        height: auto;
    }
    .link{
        text-decoration: none;
        color: black;
    }
    .col-6{
        min-width: 660px;
        max-width: 660px;
        min-height: 294px;
        max-height: 294px;
    }
</style>