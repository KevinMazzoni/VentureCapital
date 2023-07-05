<template>
    <div class="container outer-container">
        <div class="row">
            <div class="col-12 cont fill">
                <img :src="image" class="background-image">
                <div class="title">
                    {{ name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
   import useAssets from "~/composables/useAssets.js" 
    const props = defineProps({
        name: String,
        url: String,
        caption: String
    })
    const tmp = "AiMed.jpeg"
    const image = useAssets(`/assets/projects/${tmp}`)
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
        cursor: pointer;
    }

    .outer-container:hover img{
        transform: scale(1.3);
        transform-origin: 50% 50%;
    }
    .fill {
        position: relative;
        color: white;
        padding: 0px;
        transition: all 200ms ease-in-out;
        z-index: -1;
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
    .col-4{
        margin: auto;
    }
</style>