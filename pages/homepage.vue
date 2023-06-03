<template>
  <div class="header">
    <HomepageHeader />
  </div>
  <div class="video-container">
    <video playsinline autoplay muted loop poster="~/assets/logo.jpg">
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

<style>

  .header{
    position: relative;
    /* text-shadow: 1px 1px 8px rgba(0,0,0,0.6); */
    z-index: 10000;
  }
  .video-container {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%; 
      overflow: hidden;
      z-index: 950;
      background-color: darkblue;
  }
  .video-container video {
      /* Make video to at least 100% wide and tall */
      min-width: 100%; 
      min-height: 100%; 

      /* Setting width & height to auto prevents the browser from stretching or squishing the video */
      width: auto;
      height: auto;

      /* Center the video */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      opacity: 85%;
      z-index: 1000;
  } 
</style>