<template>
        <div class="row mt-2 mb-2">
        <div class="crumbs">
            <span class="crumbs-text">
                <NuxtLink :to="{
                    path: '/'
                }" class="crumbs-link">
                    Home
                </NuxtLink>
                > 
                <NuxtLink :to="{
                    path: '/AllAreas'
                }" class="crumbs-link">
                    All Areas
                </NuxtLink> 
                > {{ name }}
            </span>
        </div>
    </div>
    <div>
        <img :src="image" :alt="color" :style="{ width: '100%', height: '600px'}">
    </div>
    <div class="container">

        <div class="row">
            <div class="col-12 caption caption-col">
                {{ description }}
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-col">
                {{ text }}
            </div>
        </div>
        <div class="row">
            <div class="col-6 button-col">
                <NuxtLink to="/allAreas">
                    <button type="button" class="button-class caption">All areas</button>
                </NuxtLink>
            </div>
            <div class="col-6 button-col">
                <NuxtLink :to="{
                    path: '/projectByArea',
                    query: { areaId: areaId, name: name, image: image, description: description, text: text, color: color, comeFrom:'area' }
                }">
                    <button type="button" class="button-class caption">{{ name }} projects</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    computed: {
        name(): any {
            return this.$route.query.name;
        },
        image(): any {
            return this.$route.query.image;
        },
        description(): any {
            return this.$route.query.description;
        },
        text(): any {
            return this.$route.query.text;
        },
        color(): any {
            return this.$route.query.color;
        },
        areaId(): any {
            return this.$route.query.areaId;
        }
    },
    mounted() {
        const image = new Image();
        image.src = this.image;
        image.onload = () => {
            this.$forceUpdate();
        };
    }
};
</script>

<style scoped>
.wrap {
    width: 100%;
    height: auto;
    margin: 0px;
    text-align: center;
    position: relative;
    z-index: -1;
}

.text_over_image {
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    height: 100px;
}

.caption-col {
    text-align: center;
    font-size: xx-large;
    margin-top: 5%;
    margin-bottom: 5%;
}

.text-col {
    text-align: justify;
    margin-bottom: 5%;
}

.button-col {
    text-align: center;
    margin-bottom: 5%;
}

.button-class {
    border-radius: 10px;
    font-size: xx-large;
    background-color: rgb(70, 107, 145);
    color: white;
}

.button-class:hover {
    border-radius: 10px;
    font-size: xx-large;
    background-color: white;
    color: v-bind(color);
}

img {
    alt: v-bind(color);
    width: 100%;
    height: 600px;
    object-fit: cover;
}
</style>