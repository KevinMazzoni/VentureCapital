<template>
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
        query: { id: supervisor.id, name: supervisor.name, url: imageUrl, role: supervisor.role, description: supervisor.description }

      }"> {{ supervisor.name }}</NuxtLink>
    </div>
    <!-- <div class="row button-row">
      <div class="col-3">
        <NuxtLink class="link title" :to="{
          path: '/project',
          // query: { name: projects[index+1].name, text: projects[index+1].text, url: projects[index+1].url, supervisedBy: projects[index+1].supervisedBy, index: index+1, dimArrayProjects: dimArrayProjects, comeFrom: comeFrom}
        }"> 
          <button type="button" class="button-class caption">
            Next project ->
          </button>
        </NuxtLink>
      </div>
    </div> -->
    <hr>
    <div class="row buttonsrow">
      <div class="col-6">
        
        <!-- Go to all projects -->
        <NuxtLink :to="{ 
            path: '/allProjects' 
          }" 
          class="link"
          v-if="comeFrom=='allprojects'">
          <button type="button" class="button-class caption" @click="goBack()">
            Back to {{ provenance }}
          </button>
        </NuxtLink>

        <!-- Go to major projects -->
        <NuxtLink :to="{ 
            path: '/majorProjects' 
          }" 
          class="link"
          v-if="comeFrom=='majorprojects'">
          <button type="button" class="button-class caption" @click="goBack()">
            Back to {{ provenance }}
          </button>
        </NuxtLink>

        <!-- Go to projects by area -->
        <NuxtLink :to="{
            path: '/projectByArea',
            query: { areaId: areaId, name: areaName, image: areaImage, description: areaDescription, text: areaText, color: areaColor }
          }"
          class="link"
          v-if="comeFrom=='projectbyarea'">
          <button type="button" class="button-class caption" @click="goBack()">
            Back to {{ areaName }} area projects
          </button>
        </NuxtLink>

        <!-- Go to person -->
        <NuxtLink :to="{
            path: '/person',
            query: { id: personId, name: personName, url: personUrl, role: personRole, description: personDescription }
          }"
          class="link"
          v-if="comeFrom=='person'">
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


  //Prove per next e previous project
  let index = route.query.index;
  const dimArrayProjects = route.query.dimArrayProjects;
  const comeFrom = route.query.comeFrom;
  // console.log("LOGGO PROJECT INDEX: ", index);
  // console.log("LOGGO DIMARRAYPROJECTS: ", dimArrayProjects);
  //Fine prove per enxt e previous project
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
  for (let project of projectsData.data.value){
    projects.push(project);
  }
  console.log("Prossimo progetto: ", projects[++index] );

  let provenance = "";

  switch(comeFrom){
    case 'allprojects':
      
      // const projectsData = await useFetch('/api/projects');
      // for (let project of projectsData.data.value){
      //   projects.push(project);
      // }
      // console.log("Prossimo progetto: ", projects[++index] );
      
      provenance = "all projects"
      break;
    case 'projectbyarea':
      
      
      provenance = "projects by area";
      break;
    case 'majorprojects':
      
      
      provenance = "major projects"
      break;
    case 'person':
      
      
      provenance = "person"
      break;
    default:
      console.log("Error in provenance");
      break;
  }
  //Magheggio che se arrivo da all projects retrievo all projects, popolo array e pesco il next project usando l'index di quello attuale + 1
  //Mentre se arrivo da allareas retrievo allareas, popolo array e pesco il next project usando index + 1

  //Fine magheggio
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
  .buttonsrow{
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