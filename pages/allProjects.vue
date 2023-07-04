<template>
    <div class="container">
        <div class="row">
            <div class="col-12 title">
                Projects we're investing in,
            </div>
        </div>
        <div class="row">
            <div class="col-12 caption">
                <button @click="refresh">Refresh</button>
                Below you can find a list of all the projects we're funding. The list is constantly updated, the next project can be yours!
            </div>
        </div>
        <div class="row cardsrow">
            <div v-for="card of projects" class="col-6">
                <NuxtLink :to="{
                  path: '/project',
                  query: { name: card.name, url:card.url}
                }"
                class="link"
                >
                    <ProjectCard :name="card.name" :url="card.url" :caption="card.caption"/>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    import ProjectCard from '~/components/cards/ProjectCard.vue'

    let projects = [];

    const data = await useFetch('/api/projects')
    let url 
    for(let project of data.data.value){
        url = project.url
        projects.push(project)
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
    .cardsrow{
        margin-top: 4%;
        justify-content: center;
    }
</style>