<template>
    <div class="container CV">
        <div class="row">
            <div class="col-3">
                <img src="~\assets\persons\KevMaz.jpg">
            </div>
            <div class="col-3 title">
               <!--{{ personName  }}-->
               Kevin Mazzoni
            </div>
            <div class="row description">
              <!--{{ personDescription }}-->
              é un grandissimooooooooooooooooooooooooooooooooooooooooooooooooooo
              oooooooooooooooooooooooooooooooooooooooooooooooooooooo
              oooooooooooooooooooooooooooooooooooooooooooooooooooooooo
              ooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
            </div>
            <div class="row sectionName">
                Projects supervised by Kevin Mazzoni <!--{{personName}}-->
            </div>
            <div class="container">
                <div class="row cardsrow">
                    <div class="col-6">
                        <!-- {{ card.name }} {{ card.url }} {{ card.caption }} -->
                        <NuxtLink :to="{
                            path: '/project',
                            query: { name: 'IntelliHire', text: 'ciao zio', url:''}
                        }"
                class="link"
                >
                    <ProjectCard :name="'IntelliHire'" url="'~\assets\persons\KevMaz.jpg'" :caption="'bella zio'"/>
                </NuxtLink>
            </div>
        </div>
            </div>

        </div>
    </div>
</template>
<script setup>
    import ProjectCard from '~/components/cards/ProjectCard.vue'
  /*export default {
    computed: {
      personName() {
        return this.$route.query.name || 'Valore predefinito se il parametro name non è presente';
      },
      personDescription() {
        return this.$route.query.Descriprion || 'Valore predefinito se il parametro name non è presente';
      },
      personUrl() {
        return this.$route.query.url || 'Valore predefinito se il parametro name non è presente';
      }
    }
  }; */
</script>
<style scoped>

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

    .cardsrow{
        margin-top: 4%;
        justify-content: center;
    }
</style>
