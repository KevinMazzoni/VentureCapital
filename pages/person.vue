<template>
    <div class="row mt-2 mb-2">
        <div class="crumbs">
            <span class="crumbs-text">
                <NuxtLink :to="{
                    path: '/'
                }" class="crumbs-link">
                    Home
                </NuxtLink>
                >
                <NuxtLink :to="{
                    path: '/AllPersons'
                }" class="crumbs-link" v-if="comeFrom == 'allpersons'">
                    {{ provenanceBC }} >
                </NuxtLink>

                <NuxtLink :to="{
                    path: '/project', 
                    query: { name: previousPeName, text: previousPetxt, url: previousPeurl, supervisedBy: id, index: index, dimArrayProjects: projects.length, comeFrom:'person'}
                }" class="crumbs-link" v-if="comeFrom == 'project'">
                    {{ previousPeName }} Project >
                </NuxtLink>
                {{ name }}
            </span>
        </div>
    </div>
    <div class="container margin">
        <div class="row">
            <div class="col-3">
                <img :src="imageUrl" alt="close-up photo of the person">
            </div>
            <div class="col-3 title">
                {{ name }}
            </div>
            <p class="margin">
                <span class="subtitle"> {{ cv[0] }} </span> <br>

                <span class="description"> {{ cv[1] }} </span>
            </p>
            <p class="margin">
                <span class="subtitle"> {{ cv[2] }} </span> <br>
                <span class="description"> {{ cv[3] }} </span>
            </p>
            <p class="margin">
                <span class="subtitle"> {{ cv[4] }} </span> <br>
                <span class="description"> {{ cv[5] }} </span>
            </p>
            <div class="row sectionName" v-if="projects && projects.length > 0">
                <hr>

                Projects supervised by {{ name }}
            </div>
            <div class="container">
                <div class="row">
                    <div v-for="project of projects" class="col-3 minwidth">
                        <NuxtLink :to="{
                            path: '/project',
                            query: { name: project.name, text: project.text, url: project.url, supervisedBy: id, comeFrom: 'person', personId: route.query.id, personName: route.query.name, personUrl: route.query.url, personRole: route.query.role, personDescription: route.query.description }
                        }">

                            <SupervisedProjectsCard :name="project.name" :image="project.url" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row button-row">
                <div class="col-4">
                    <NuxtLink to="/AllPersons">
                        <button type="button" class="button-class caption">
                            Back to all persons
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SupervisedProjectsCard from '~/components/cards/SupervisedProjectsCard.vue';

const route = useRoute()

const data = await useFetch('/api/supervised', { params: { id: route.query.id } })

const name = route.query.name
const id = route.query.id
const description = route.query.description
let cv = description.split('*')
const imageUrl = route.query.url
let projects = []
for (let project of data.data.value) {
    project.url = useAssets(`/assets/projects/${project.url}`)
    projects.push(project)
}
const comeFrom = route.query.comeFrom;
const previousPeName = route.query.ProjName; 
const previousPetxt = route.query.ProjText
const previousPeurl = route.query.ProjUrl;
let provenanceBC = ""
switch (comeFrom) {
    case 'allpersons':
        provenanceBC = "Our Team"
        break;
    case 'project':
        provenanceBC = "Project";
        break;
}

</script>

<style scoped>
img {
    width: 100%;
    height: auto;
}

.title {
    margin-top: 8%;
}

.sectionName {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 330;
    font-size: 3vh;
    margin-top: 8%;
}

.margin {
    margin-top: 3%;
}

.subtitle {
    font-size: 30px;
    font-weight: 200
}

.button-row {
    margin-top: 4%;
    margin-bottom: 4%;
    justify-content: end;
}

.button-class {
    border-radius: 10px;
    font-size: xx-large;
    background-color: rgb(70, 107, 145);
    color: white;
}

.button-class:hover {
    border-radius: 10px;
    font-size: xx-large;
    background-color: white;
    color: v-bind(color);
}

.minwidth {
    min-width: 400px
}
</style>
