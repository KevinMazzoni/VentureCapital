<template> 
    <div class="container outer-container">
        <div class="row-1">
            <div class="row">
                <div class="col fill">
                    <img :src="url" class="image" alt="close-up photo of the person">
                </div>
            </div> 
        </div>
        <p class="row-2">
            {{ name }}
        </p>
        <p class="row-3">
            {{ role }}
        </p>
    </div>  
</template>
<script setup>
    const props = defineProps({
        name: String,
        role: String,
        url: String,
        description: String
    })

</script>
<style scoped>
    .col {
        border-radius: 10px;
        padding: 0px;
        overflow: hidden;
    }

    .outer-container{
        border-style: none;
        border-radius: 12px;
        margin-bottom: 12%;
        transition: box-shadow .3s;
        max-width: 300px;
    }

    .col img{
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
        max-width: 300px;
        max-height: 300px;
        width: auto;
        height: 100%;

    }
    
    .row-2{
        color: darkblue;
        margin: auto;
        text-align: left;
        font-family: monospace;
        font-size: larger;
    }
    .row-3{
        margin: auto;
        text-align: left;
        font-family: monospace;
    }
    .row-4{
        margin: auto; 
        text-align: left; 
        font-style: italic;
    }
</style>