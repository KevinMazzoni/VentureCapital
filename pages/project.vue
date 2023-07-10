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
          path: '/allProjects'
        }" class="crumbs-link" v-if="comeFrom == 'allprojects'">
          {{ provenanceBC }}
        </NuxtLink>

        <!-- Go to major projects -->
        <NuxtLink :to="{
          path: '/majorProjects'
        }" class="crumbs-link" v-if="comeFrom == 'majorprojects'">
          {{ provenanceBC }}
        </NuxtLink>

        <!-- Go to projects by area -->
        <NuxtLink :to="{
          path: '/projectByArea',
          query: {
            areaId: areaId, name: areaName, image: areaImage, description: areaDescription, text: areaText,
            color: areaColor, comeFrom: 'null'
          }
        }" class="crumbs-link" v-if="comeFrom == 'projectbyarea'">
          {{ areaName }} Area
        </NuxtLink>

        <!-- Go to person -->
        <NuxtLink :to="{
          path: '/person',
          query: {
            id: supervisor.id, name: supervisor.name, url: imageUrl, role: supervisor.role, description: supervisor.description, comeFrom: 'null'
          }
        }" class="crumbs-link" v-if="comeFrom == 'person'">
          {{ supervisor.name }}
        </NuxtLink>

        > {{ projectName }} project
      </span>
    </div>
  </div>
  <img :src="projectUrl" alt="representative image of the project">
  <div class="container">
    <div class="col-6 title mt-4">
      {{ projectName }}
    </div>
    <div>
      <p class="margin">
        {{ paragraphs[0] }}
      </p>
    </div>
    <div class="col-6 title mt-4">
      Our investment drivers
    </div>
    <p class="margin">
      {{ paragraphs[1] }}
    </p>
    <div class="title col-6">Supervisor:
      <NuxtLink class="link title" :to="{
        path: '/person',
        query: {
          id: supervisor.id, name: supervisor.name, url: imageUrl, role: supervisor.role, description: supervisor.description, comeFrom: 'project',
          ProjName: projectName, ProjText: projectText, ProjUrl: projectUrl
        }

      }"> {{ supervisor.name }}</NuxtLink>
    </div>
    <hr>
    <div class="row buttonsrow">
      <div class="col-6">

        <!-- Go to all projects -->
        <NuxtLink :to="{
          path: '/allProjects'
        }" class="link" v-if="comeFrom == 'allprojects'">
          <button type="button" class="button-class caption" @click="goBack()">
            Back to {{ provenance }}
          </button>
        </NuxtLink>

        <!-- Go to major projects -->
        <NuxtLink :to="{
          path: '/majorProjects'
        }" class="link" v-if="comeFrom == 'majorprojects'">
          <button type="button" class="button-class caption" @click="goBack()">
            Back to {{ provenance }}
          </button>
        </NuxtLink>

        <!-- Go to projects by area -->
        <NuxtLink :to="{
          path: '/projectByArea',
          query: {
            areaId: areaId, name: areaName, image: areaImage, description: areaDescription, text: areaText,
            color: areaColor, comeFrom: 'null'
          }
        }" class="link" v-if="comeFrom == 'projectbyarea'">
          <button type="button" class="button-class caption" @click="goBack()">
            Back to {{ areaName }} area projects
          </button>
        </NuxtLink>

        <!-- Go to person -->
        <NuxtLink :to="{
          path: '/person',
          query: {
            id: supervisor.id, name: supervisor.name, url: imageUrl, role: supervisor.role, description: supervisor.description, comeFrom: 'null'
          }
        }" class="link" v-if="comeFrom == 'person'">
          <button type="button" class="button-class caption" @click="goBack()">
            Back to {{ personName }}
          </button>
        </NuxtLink>

      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const projectName = route.query.name;
const projectText = route.query.text;
const projectUrl = route.query.url;
const idSupervisor = route.query.supervisedBy;
const areaId = route.query.areaId;
const areaName = route.query.areaName;
const areaImage = route.query.areaImage;
const areaDescription = route.query.areaDescription;
const areaText = route.query.areaText;
const areaColor = route.query.areaColor;

const personId = route.query.personId;
const personName = route.query.personName;
const personUrl = route.query.personUrl;
const personRole = route.query.personRole;
const personDescription = route.query.personDescription;

let index = route.query.index;
const comeFrom = route.query.comeFrom;
let paragraphs = projectText.split("*");
const data = await useFetch('/api/supervisor', { params: { id: route.query.supervisedBy } })
const supervisor = data.data._value[0]
const imageUrl = useAssets(`/assets/persons/${supervisor.url}`)

//Magheggio

const goBack = () => {
  console.log("Route back: ", route.back());
};
// console.log(projects[++index])

let projects = [];

const projectsData = await useFetch('/api/projects');
for (let project of projectsData.data.value) {
  projects.push(project);
}
console.log("Prossimo progetto: ", projects[++index]);

let provenance = "";
let provenanceBC = ""
switch (comeFrom) {
  case 'allprojects':
    provenance = "all projects"
    provenanceBC = "All Projects"
    break;
  case 'projectbyarea':


    provenance = "projects by area";
    provenanceBC = "Projects by Area";
    break;
  case 'majorprojects':


    provenance = "major projects"
    provenanceBC = "Major Projects"
    break;
  case 'person':


    provenance = "person"
    provenanceBC = "person"
    break;
  default:
    console.log("Error in provenance");
    break;
}

</script>

<style scoped>
img {
  width: 100%;
  height: 600px;
  object-fit: cover;
}

.container {
  margin-bottom: 5%;
}

.link {
  color: rgb(70, 107, 145);
}

.buttonsrow {
  justify-content: right;
}

.button-class {
  border-radius: 10px;
  font-size: xx-large;
  background-color: rgb(70, 107, 145);
  color: white;
  float: right;
}

.button-class:hover {
  border-radius: 10px;
  font-size: xx-large;
  background-color: white;
  color: v-bind(color);
}
</style>