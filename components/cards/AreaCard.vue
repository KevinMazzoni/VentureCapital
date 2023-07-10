<template>
    <div class="container outer-container">
      <div class="row">
        <div class="col-12 cont fill">
            <img :src="image" alt="Image with the colour associated to the area" class="background-image">
            <NuxtLink :to="{
                  path: '/area',
                  query: { areaId: areaId, name: name, image: image, description: description, text: text, color: color }
                }" 
                class="link"
            >
                <div class="title">
                    {{ name }}
                </div>
            </NuxtLink>
          
            <NuxtLink :to="{
                    path: '/projectByArea',
                    query: { areaId: areaId, name: name, image: image, description: description, text: text, color: color, comeFrom:'allareas' }
                }"
                class="link"
            >
            <div class="related-projects caption">
                Related projects
            </div>
        </NuxtLink>

        </div>
      </div>
      <!-- <div class="row"> -->
        
      <!-- </div> -->
    </div>
  </template>
  
  <script setup>
    const props = defineProps({
      areaId: Number,
      name: String,
      image: String,
      description: String,
      text: String,
      color: String
    });
  
    const redirectToProjectsByArea = () => {
      // Qui puoi definire la logica per il reindirizzamento alla pagina "projectsByArea"
      // Utilizza il router di Nuxt per navigare alla pagina con i parametri necessari
      // Esempio:
      const query = {
        areaId: props.areaId,
        name: props.name,
        image: props.image,
        description: props.description,
        text: props.text,
        color: props.color
      };
      const path = '/aboutUs';
      this.$router.push({ path, query });
    };
  </script>
  

<style scoped>
    .cont{
        border-radius: 10px;
        padding: 0px;
        overflow: hidden;
    }

    .outer-container{
        border-style: groove;
        border-radius: 12px;
        text-align: justify;
        margin-bottom: 12%;

        transition: box-shadow .3s;
    }

    .cont img{
        transition: transform .4s;
    }
    .outer-container:hover{
        box-shadow: 0 0 11px rgba(33,33,33,.2);
        /* cursor: pointer; */
    }

    .outer-container:hover img{
        transform: scale(1.3);
        transform-origin: 50% 50%;
    }
    .outer-container:hover .related-projects{
        opacity: 1;
    }
    .fill {
        position: relative;
        color: white;
        padding: 0px;
        transition: all 200ms ease-in-out;
        /* z-index: 1;  */
    }
    img{
        border-radius: 10px;
        filter: brightness(60%);
        transition: all 200ms ease-in-out;

        max-height:205px;
        width: 100%;
    }
    
    .title{
        /* Center positioning */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        /* Font */
        font-family: monospace;
        font-size: xxx-large;
    }
    .related-projects{
        /* Center positioning */
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translate(-50%, -50%);

        /* Font */
        font-size: 20px;
        color: white;
        background-color: v-bind(color);
        font-weight:bold;

        border-radius: 10px;
        opacity: 0;
        padding-left: 5px;
        padding-right: 5px
    }
    .related-projects:hover{
        text-decoration: underline;
    }
    .link{
        color: white;
    }
    .link:hover{
        cursor: pointer;
    }
</style>