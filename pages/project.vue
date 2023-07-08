<template>
    <img :src="projectUrl" alt="representative image of the project">
    <div class="container">
        <div class="row">
            <div class="col-6 title projectTitle">
               {{ projectName  }}
            </div>
            <div>
              <p class="margin description">
                {{ paragraphs[0] }}
              </p>
           
                <p class="margin">
                  <span class="subtitle"> Our investment drivers... </span>   <br>
                </p>    
                <p>
                  <span class="description margin"> {{ paragraphs[1] }} </span>   
                </p>              
            </div>
        </div>
    </div>
</template>
<script setup>

  const route = useRoute();
  const projectName = route.query.name;
  const projectText = route.query.text;
  const projectUrl = route.query.url;

  let paragraphs = projectText.split("*");
</script>
<style scoped>
    img{
        width: 100%;
        height: 600px;
        object-fit: cover;
    }
    .container{
        margin-bottom: 5%;
    }

    .projectTitle{
      margin-top: 5%;
    }

    .subtitle{
        font-size: 30px;
        font-weight:600;
    }

    .margin{
        margin-top: 3%;
    }
</style>