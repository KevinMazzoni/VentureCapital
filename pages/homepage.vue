<template>
  <div class="header">
    <HomepageHeader />
  </div>
  <div class="video-container">
    <video playsinline autoplay muted loop poster="~/assets/GloriousKoalasLogoBW.png">
      <source src="~/assets/NewYork.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
  definePageMeta({
    layout: "homepage"
  })
</script>

<style scoped>

  .header{
    justify-content: center;
    display: flex;
  }
  .video-container {
      position: absolute;
      width: 100%;
      height: 100%; 
      overflow: hidden;
      background-color: darkblue;
  }
  .video-container video {
      
    /* Center the video */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      
      /*Adjust*/
      opacity: 85%;
      filter: brightness(0.6);
  } 
</style>