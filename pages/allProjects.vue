<template>
    <div class="row mt-2 mb-2">
        <div class="crumbs">
            <span class="crumbs-text">
                <NuxtLink :to="{
                    path: '/'
                }" class="crumbs-link">
                    Home
                </NuxtLink>
                > All Projects
            </span>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 title">
                Projects we're investing in
            </div>
        </div>
        <div class="row">
            <div class="col-12 caption">
                Below you can find a list of all the projects we're funding. The list is constantly updated, the next project can be yours!
            </div>
        </div>
        <div class="row cardsrow">
            <div v-for="(project, index) of projects" class="col-6 minwidth">
                <!-- {{ card.name }} {{ card.url }} {{ card.caption }} -->
                <NuxtLink :to="{
                  path: '/project',
                  query: { name: project.name, text: project.text, url: project.url, supervisedBy: project.SupervisedBy, index: index, dimArrayProjects: projects.length, comeFrom:'allprojects'}
                }"
                class="link"
                >
                    <ProjectCard :name="project.name" :url="project.url" :caption="project.caption"/>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    import ProjectCard from '~/components/cards/ProjectCard.vue'
    import useAssets from "~/composables/useAssets.js" 

    let projects = [];

    const data = await useFetch('/api/projects')
    for(let project of data.data.value){
        project.url = useAssets(`/assets/projects/${project.url}`)
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

    .minwidth{
        min-width: 400px
    }
</style>