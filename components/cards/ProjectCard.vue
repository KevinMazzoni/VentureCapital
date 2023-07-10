<template>
    <div class="container outer-container">
        <div class="row">
            <div class="col-8">
                <div class="container">
                    <div class="row">
                        <div class="col-12 fill">
                            <img :src="url" class="background-image" alt="representative image of the project">
                            <div class="title">{{ name }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4" :style="{'font-family': 'century-gothic, sans-serif', 'text-align': 'left'}">
                {{ caption }}
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        name: String,
        url: String,
        caption: String
    })
</script>

<style scoped>
    .col-8{
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

    .col-8 img{
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

        max-height:211px;
        width: 100%;
    }
    
    .title{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        font-family: monospace;
        font-size: xxx-large;
    }
    .col-4{
        margin: auto;
    }
</style>