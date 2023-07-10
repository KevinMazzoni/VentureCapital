<template>
    <div class="row mt-2 mb-2">
        <div class="crumbs">
            <span class="crumbs-text">
                <NuxtLink :to="{
                    path: '/'
                }" class="crumbs-link">
                    Home
                </NuxtLink>
                > Our Team
            </span>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 title">
                The team
            </div>
            <div class="caption subcaption">
                A set orthogonal and winning skills.
            </div>
        </div>
        <div class="row cardsrow">

            <div v-for="card of persons" class="col-4 minwidth">
                <NuxtLink :to="{
                    path: '/person',
                    query: { id: card.id, name: card.name, url: card.url, role: card.role, description: card.description, comeFrom: 'allpersons' }
                }" class="link">
                    <PersonCard :name="card.name" :url="card.url" :role="card.role" :description="card.description" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import PersonCard from '~/components/cards/PersonCard.vue';
import useAssets from '~/composables/useAssets.js';

let persons = []

const data = await useFetch('/api/persons', { params: { id: '10' } })
for (let person of data.data.value) {
    person.url = useAssets(`/assets/persons/${person.url}`)
    persons.push(person)
}

</script>
<style scoped>
.link {
    text-decoration: none;
    color: black;
}

.container {
    margin-top: 2%;
}

.col-12 {
    text-align: center;
}

.cardsrow {
    margin-top: 2%;
    justify-content: center;
}

.subcaption {
    text-align: center;
    margin-top: 1%;
}

.minwidth {
    margin-top: 2%;
    margin-bottom: 3%;
    min-width: 300px;
}
</style>