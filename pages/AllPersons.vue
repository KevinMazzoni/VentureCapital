<template>
    <div class="container">
        <div class="row">
            <div class="col-12 title">
                Our team: short description
            </div>
        </div>
        <div class="row cardsrow">
        
            <div v-for="card of persons" class="col-6">
                <NuxtLink :to="{
                  path: '/person',
                  query: { name: card.name, url:card.url, role:card.role, description:card.description}
                }"
                class="link"
                >
                    <PersonCard :name="card.name" :url="card.url" :role="card.role" :description="card.description"/>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    import PersonCard from '~/components/cards/PersonCard.vue'

    let persons = []

    const data = await useFetch('/api/persons')
    for(let person of data.data.value){
        persons.push(person)
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