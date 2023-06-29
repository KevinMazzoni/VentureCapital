<template>
    <div class="container">
        <div class="row">
            <div class="col-12 title">
                Projects we're investing in
            </div>
        </div>
        <div class="row">
            <div class="col-12 caption">
                <p>
                    {{ message }}
                </p>
                <button @click="refresh">Refresh</button>
                Below you can find a list of all the projects we're funding. The list is constantly updated, the next project can be yours!
            </div>
        </div>
        <!-- <div>
            <h1 v-if="isLoading">
                Caricamento...
            </h1>
            <div v-else>
                <h1 v-for="value in values" :key="value">
                    {{ value }}
                </h1>
            </div>
        </div> -->
        <!-- <div class="row cardsrow">
            <div v-for="card of cards" class="col-6">                -->
                <!-- <NuxtLink :to="{
                  path: '/project',
                  query: { name: card.name, eco: card.eco, url:card.url}
                }" 
                class="link"
                >
                    <ProjectCard :name="card.name" :url="card.url" :caption="card.caption"/>
                </NuxtLink> -->
                <!-- {{ card }}
            </div>
        </div> -->
    </div>
</template>

<script>
import { measureMemory } from 'vm';


    export default defineNuxtComponent({
        async asyncData(){
            let message = await $fetch('/api/projects')
            return { message }
        },
        data(){
            return{
                num: 20
                //other values...
            }
        }
    })
    // const { data: productCount, pending } = await useAsyncData("products", () => 
    //     $fetch("/server/values")
    // )

    // const refresh = () => refreshNuxtData("products");
    // const search = ref('');
    // const page = ref(1);

    // const data = await useAsyncData(
    // 'cafes',
    // () => $fetch( `/server/values`, {
    //         method: 'GET',
    //         baseURL: 'localhost:3000/server/values',
    //         params: {
    //         page: page.value,
    //         search: search.value,
    //     }
    // } )
    // , {
    //     watch: [
    //         page,
    //         search
    //     ]
    // }
    // );

    // import axios from 'axios';

    // export default {
    //     data() {
    //         return {
    //             values: [],
    //             isLoading: true,
    //         };
    //     },
    //     async created() {
    //         try {
    //             const response = await axios.get('localhost:3000/server/values');
    //             this.values = response.data;
    //             this.isLoading = false;
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     },
    // };

// let message = await $fetch('~/server/')
// let message = fetch('/server/values', { cache: 'no-store' })

// console.log(message)

// export default defineNuxtComponent({
//         async asyncData() {
    
            // let message = await $fetch('/server/values', {cache: 'no-store'})
    
            //         return { message }
    //     },
    //     data(){
    //         return{
    //             num: 20
    //         }
    //     }
    // })
// import ProjectCard_try from '../components/cards/ProjectCard_try.vue';
// import ProjectCard from '~/components/cards/ProjectCard.vue';

// export default {
//     components: {
//         ProjectCard_try,
//         ProjectCard
//     }, 
//     async data() {
        // async function loadData(){
            // cards: [];
            // const data = await fetch('/allProjects')

            // const body = await data.json()

            // for(let project of body){
            //     cards.push(project)
            // }
        // }
        // return {
        //     cards: [
                
        //         {
        //             eco: 'This is the eco and social prec',
        //             name: 'GreenMe',
        //             url:'/_nuxt/assets/projects/GreenEnergy.jpeg', 
        //             caption: 'GreenMe aims at generating green energy from multiple renewable sources. It has been awarded as one of the most disruptive company in the sector.'
        //         },
        //         {
        //             eco: 'This is the eco and social prec',
        //             name: 'IntelliHire',
        //             url:'/_nuxt/assets/projects/IntelliHire.jpg', 
        //             caption: 'IntelliHire revolutionizes the interview process of a company, by using AI to perform a CV screening and the first step of the interview.'
        //         },
        //         {
        //             eco: 'This is the eco and social prec',
        //             name: 'AiMed',
        //             url:'/_nuxt/assets/projects/Healthcare_3.jpeg', 
        //             caption: 'AiMed aims at revolutionze the healthcare sector, putting in contact patients that suffers from a disease with a specialised doctor.'
        //         },
        //         {
        //             eco: 'This is the eco and social prec',
        //             name: 'Edu4You',
        //             url:'/_nuxt/assets/projects/Education.jpeg', 
        //             caption: '"Unlocking Knowledge, Empowering Minds - Transforming Education, One Student at a Time!" This is the motto of Edu4You.'
        //         }
        //     ]
        // }
//     }
// }
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
    .cardsrow{
        margin-top: 4%;
        justify-content: center;
    }
</style>