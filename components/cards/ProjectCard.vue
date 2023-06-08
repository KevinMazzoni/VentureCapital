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

        transition: box-shadow .3s;
    }
    .outer-container:hover{
        box-shadow: 0 0 11px rgba(33,33,33,.2);
        cursor: pointer;
    }

    .outer-container:hover img{
        transform: scale(1.2);
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
    }
    img, svg{
        width: 100%;
        border-radius: 10px;
        filter: brightness(60%);
        transition: all 200ms ease-in-out;
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