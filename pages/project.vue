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
  </div>
</template>

<script setup>
  const route = useRoute();
  const projectName = route.query.name;
  const projectText = route.query.text;
  const projectUrl = route.query.url;
  //Prove per next e previous project
  const index = route.query.index;
  const dimArrayProjects = route.query.dimArrayProjects;
  const comeFrom = route.query.comeFrom;
  console.log("LOGGO PROJECT INDEX: ", index);
  console.log("LOGGO DIMARRAYPROJECTS: ", dimArrayProjects);
  //Fine prove per enxt e previous project
  let paragraphs = projectText.split("*");
  const data = await useFetch('/api/supervisor', { params: { id: route.query.supervisedBy } })
  const supervisor = data.data._value[0]
  const imageUrl = useAssets(`/assets/persons/${supervisor.url}`)

  //Magheggio
  let projects = [];
  //Magheggio che se arrivo da all projects retrievo all projects, popolo array e pesco il next project usando l'index di quello attuale + 1
  //Mentre se arrivo da allareas retrievo allareas, popolo array e pesco il next project usando index + 1
  if(comeFrom == 'allprojects'){
    //TODO
    console.log("COME FROM ALL PROJECTS")
    const projectsData = await useFetch('/api/projects');
    for (let project of projectsData.data.value){
      projects.push(project);
    }
    console.log("Prossimo project: ", projects[index+1])
  }
  else if (comeFrom == 'projectsbyarea')
    //TODO
    console.log("COME FROM PROJECTSBYAREA")
  else if (comeFrom == 'majorprojects')
    //TODO
    console.log("COME FROM MAJORPROJECTS")
  else if (comeFrom == 'person')
    //TODO
    console.log("COME FROM PERSON")
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
</style>