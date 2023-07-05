<template>
    <img :src="projectUrl">
    <div class="container">
        <div class="row">
            <div class="col-6 title projectTitle">
               {{ projectName  }}
            </div>
            <div class="description">
              {{ projectText }}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
  export default {
    computed: {
      projectName(): any {
        return this.$route.query.name || 'Valore predefinito se il parametro name non è presente';
      },
      projectText() {
        return this.$route.query.text || 'Valore predefinito se il parametro name non è presente';
      },
      projectUrl(): any {
        return this.$route.query.url || 'Valore predefinito se il parametro name non è presente';
      }
    }
  };
</script>
<style scoped>
    img{
        width: 100%;
        height: 600px;
        object-fit: cover;
    }
    .description{
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        margin-top: 3%;
    }

    .container{
        margin-bottom: 5%;
    }

    .projectTitle{
      margin-top: 5%;
    }
</style>