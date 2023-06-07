<template>
    <img src="~/assets/projects/poliigon.jpeg">
    <div class="container">
        <div class="row">
            <div class="col-6 description">
               {{ projectEco  }}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
  export default {
    computed: {
      projectName() {
        return this.$route.query.name || 'Valore predefinito se il parametro name non è presente';
      },
      projectEco() {
        return this.$route.query.eco || 'Valore predefinito se il parametro name non è presente';
      }
    }
  };
</script>
<style scoped>
    img{
        width: 100%;
    }

    .title{
        font-size: 40px;
        font-family: emoji;
    }

    .description{
        font-size: 40px;
        font-family: century-gothic, sans-serif;
    }

    .container{
        margin-bottom: 5%;
    }
</style>