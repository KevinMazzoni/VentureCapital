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
      <div class="col-4">
        
        <!-- Go to all projects -->
        <NuxtLink :to="{ path: '/allProjects' }" class="link">
          <button type="button" class="button-class caption" @click="goBack()">
            Go to all projects
          </button>
        </NuxtLink>

        <!-- Coming from project by area-->
        <!-- <NuxtLink :to="{
                    path: '/projectByArea',
                    query: { areaId: areaId, name: areaName, image: areaImage, description: areaDescription, text: areaText, color: areaColor }
                  }"
                  class="link"
                  v-if="comeFrom=='projectbyarea'"
        >
          <button type="button" class="button-class caption">
            Back to {{ provenance }}
          </button>
        </NuxtLink> -->
      </div>
    </div>
  </div>
</template>

<script setup>
  const route = useRoute();
  const projectName = route.query.name;
  const projectText = route.query.text;
  const projectUrl = route.query.url;

  const props = defineProps({
      areaId: String,
      areaName: String,
      areaImage: String,
      areaDescription: String,
      areaText: String,
      areaColor: String
  });

  const areaId = route.query.areaId;
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
      console.log("COME FROM ALL PROJECTS");
      // const projectsData = await useFetch('/api/projects');
      // for (let project of projectsData.data.value){
      //   projects.push(project);
      // }
      // console.log("Prossimo progetto: ", projects[++index] );
      provenance = "all projects"
      break;
    case 'projectbyarea':
      //TODO
      console.log("COME FROM PROJECTSBYAREA");
      provenance = "projects by area";
      break;
    case 'majorprojects':
      //TODO
      console.log("COME FROM MAJORPROJECTS")
      provenance = "major projects"
      break;
    case 'person':
      //TODO
      console.log("COME FROM PERSON")
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