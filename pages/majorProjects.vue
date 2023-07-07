<template>
    <div class="container">
        <div class="row">
            <div class="col-12 title">
                Major Projects
            </div>
        </div>
        <div class="row">
            <div class="col-12 caption">
                These are the projects in which we believe the most!
            </div>
        </div>
        <div class="row cardsrow">
            <div v-for="project of projects" class="col-6">
                <!-- {{ card.name }} {{ card.url }} {{ card.caption }} -->
                <NuxtLink :to="{
                  path: '/project',
                  query: { name: project.name, text: project.text, url:project.url}
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

    const data = await useFetch('/api/majorProjects')
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
</style>