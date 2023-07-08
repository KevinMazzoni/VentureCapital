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
  </div>
</template>
<script setup>
const route = useRoute();
const projectName = route.query.name;
const projectText = route.query.text;
const projectUrl = route.query.url;
let paragraphs = projectText.split("*");
const data = await useFetch('/api/supervisor', { params: { id: route.query.supervisedBy } })
const supervisor = data.data._value[0]
const imageUrl = useAssets(`/assets/persons/${supervisor.url}`)

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
</style>