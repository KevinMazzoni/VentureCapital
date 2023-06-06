<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <ProjectCard :name="'IntelliHire'" :url="'/_nuxt/assets/projects/IntelliHire.jpg'"
                :caption="'IntelliHire revolutionizes the interview process of a company, by using AI to perform a CV screening and the first step of the interview.'" />
            </div>
            <div class="col-6">
                <ProjectCard :name="'GreenMe'" :url="'/_nuxt/assets/projects/GreenEnergy.jpeg'"
                :caption="'GreenMe aims at generating green energy from multiple renewable sources. It has been awarded as one of the most disruptive company in the sector.'"/>
            </div>
        </div>
    </div>

    <ProjectCard_try :name="'IntelliHire'" :url="'/_nuxt/assets/projects/IntelliHire.jpg'"
                :caption="'IntelliHire revolutionizes the interview process of a company, by using AI to perform a CV screening and the first step of the interview.'" />
    <!-- <ProjectCard_try :name="'IntelliHire'" :url="'/_nuxt/assets/projects/IntelliHire.jpg'"
        :caption="'IntelliHire revolutionizes the interview process of a company, by using AI to perform a CV screening and the first step of the interview.'" />
    <hr>
    <ProjectCard_try :name="'GreenMe'" :url="'/_nuxt/assets/projects/GreenEnergy.jpeg'"
    :caption="'GreenMe aims at generating green energy from multiple renewable sources. It has been awarded as one of the most disruptive company in the sector.'"/> -->
    <!-- <ProjectCard_try :name="'IntelliHire'" :url="'/_nuxt/assets/projects/GreenEnergy.jpeg'"
        :caption="'IntelliHire revolutionizes the interview process of a company, by using AI to perform a CV screening and the first step of the interview.'" /> -->
</template>

<script>
import ProjectCard_try from '../components/cards/ProjectCard_try.vue';
import ProjectCard from '~/components/cards/ProjectCard.vue';

export default {
    components: {
        ProjectCard_try,
        ProjectCard
    }
}
</script>

<style>
.row{
    height: auto;
}
</style>