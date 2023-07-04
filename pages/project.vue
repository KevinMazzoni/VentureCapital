<template>
    <img :src="projectUrl">
    <div class="container">
        <div class="row">
            <div class="col-6 description">
               {{ projectEco  }}
            </div>
            <div> scrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrolls
                crollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrolls
                crollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrolls
                crollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrolls
                crollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrolls
                crollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrolls
                crollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrolls
                crollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrolls
                crollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrolls
                crollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrolls
                crollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrolls
                crollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrolls
                crollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrolls
                crollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrolls
                crollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollsc
                rollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscr
                ollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrol
                lscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrolls
                crollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscro
                llscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrolls
                crollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscrollscroll
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
      projectEco(): any {
        return this.$route.query.eco || 'Valore predefinito se il parametro name non è presente';
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