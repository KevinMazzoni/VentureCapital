<template>
    <div class="container CV">
        <div class="row">
            <div class="col-3">
                <img :src="imageUrl">
            </div>
            <div class="col-3 title">
               {{name}}
            </div>
            <div class="row description">
              {{ description }}
            </div>
            <div class="row sectionName">
                Projects supervised by {{name}}
            </div>
            <div class="container">
                <div class="row">
                        <div v-for="project of projects" class="col-3" >
                            <NuxtLink :to="{
                                path: '/project',
                                query: { name: project.name, text: project.text, url:project.url}
                            }"
                            class="link"
                            >
                            
                                <AreaCard :name="project.name" :image="project.url"/>
                            </NuxtLink>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import AreaCard from '~/components/cards/AreaCard.vue';

    const route = useRoute()

    const data = await useFetch('/api/supervised', { params: { id: route.query.id} })

    const name = route.query.name
    const description = route.query.description
    let cv = description.split('*')
    const imageUrl = route.query.url
    let projects = []
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

    img{
        width: 100%;
        height: auto;
    }
    .description{
        font-size: 40px;
        font-family: century-gothic, sans-serif;
        margin-top: 3%;
    }

    .title{
        margin-top: 8%;
    }

    .sectionName {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 330;
        font-size: 3vh;
        margin-top: 8%;
    }

    .CV{
        margin-top: 3%;
    }
</style>
