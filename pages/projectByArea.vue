<template>
    <div class="container">
        <div class="row">
            <div class="col-12 title">
                {{ route.query.name }} Area
            </div>
        </div>
        <div class="row">
            <div class="col-12 caption">
                Below you can find a list of all the projects we're funding in this Area. The list is constantly updated, the next project can be yours!
            </div>
        </div>
        <div class="row cardsrow">
            <div v-for="project of projects" class="col-6 minwidth">
                <!-- {{ card.name }} {{ card.url }} {{ card.caption }} -->
                <NuxtLink :to="{
                  path: '/project',
                  query: { name: project.name, text: project.text, url:project.url, supervisedBy:project.SupervisedBy, comeFrom: 'projectbyarea', areaId: route.query.areaId, areaName: route.query.name, areaImage: route.query.image, areaDescription: route.query.description, areaText: route.query.text, areaColor: route.query.color}
                }"
                class="link"
                >
                    <ProjectCard :name="project.name" :url="project.url" :caption="project.caption"/>
                </NuxtLink>
            </div>
        </div>
        <div class="row">
            <div class="col-12 button-col">
                <NuxtLink :to="{
                     path: '/area',
                     query: { areaId: route.query.areaId, name: route.query.name, image:route.query.image, description: route.query.description, 
                        text: route.query.text, color: route.query.color }
                }">
                    <button type="button" class="button-class caption">Go back {{ route.query.name }} area </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<script setup>
    import ProjectCard from '~/components/cards/ProjectCard.vue'
    const route = useRoute();
    const data = await useFetch('/api/projectByArea', { params: { id: route.query.areaId} })
    let projects = []
    for(let project of data.data.value){
        project.url = useAssets(`/assets/projects/${project.url}`)
        projects.push(project)
    }
    const styleColor = route.query.color
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

    .button-col {
    text-align: center;
    margin-bottom: 5%;
}

.button-class {
    border-radius: 10px;
    font-size: xx-large;
    background-color: v-bind(styleColor);
    color: white;
}

.button-class:hover {
    border-radius: 10px;
    font-size: xx-large;
    background-color: white;
    color: v-bind(styleColor);
}

.minwidth{
        min-width: 400px
    }
</style>