<template>
    <div class="container outer-container">
        <div class="row">
            <div class="col-8">
                <div class="container inner-container">
                    <div class="row">
                        <div class="col-12 fill">
                            <img :src="url" class="background-image">
                            <div class="title">{{ name }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
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
        border: none;
        border-radius: 10px;
        padding: 0px;
        /* background-image: url('~/assets/projects/IntelliHire.jpg');
        min-width: fit-content;
        min-height: fit-content; */
    }

    .outer-container{
        border-style: groove;
        border-radius: 10px;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 40px;

        display: inline-block;
        margin: 20px;
        border: 1px solid black;
        overflow: hidden; 

        transition: box-shadow .3s;
    }

    .outer-container img{
        display: block;
        transition: transform .4s;
    }
    .outer-container:hover{
        box-shadow: 0 0 11px rgba(33,33,33,.2);
        cursor: pointer;
    }

    .outer-container:hover img{
        /* transform: scale(1.2); */

        transform: scale(1.3);
        transform-origin: 50% 50%;
    }

    .inner-container{
        
        border: none;
        border-radius: 10px;
    }

    .fill {
        position: relative;
        text-align: center;
        color: white;
        padding: 0px;
        transition: all 200ms ease-in-out;
        z-index: -1;
    }
    img{
        border-radius: 10px;
        filter: brightness(60%);
        transition: all 200ms ease-in-out;

        display: block;
        max-width:422px;
        max-height:211px;
        width: 100%;
        height: auto;
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