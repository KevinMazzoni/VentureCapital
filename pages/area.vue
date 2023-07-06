<template>
    <div class="wrap">
        <div>
            <img :src="image" width="100%" height="600">
            <h1 class="text_over_image title">
                {{ name }}
            </h1>
        </div>
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
            <div class="col-12 button-col">
                <NuxtLink :to="{
                    path: '/projectByArea',
                    query: { areaId: id }
                }">
                    <button type="button" class="button-class caption">Go to {{ name }} projects</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    computed: {
        name(): any {
            return this.$route.query.name || "Valore predefinito se il parametro name non è presente";
        },
        image(): any {
            return this.$route.query.image || "Valore predefinito se il parametro name non è presente";
        },
        description(): any {
            return this.$route.query.description || "Valore predefinito se il parametro name non è presente";
        },
        text(): any {
            return this.$route.query.text || "Valore predefinito se il parametro name non è presente";
        },
        color(): any {
            return this.$route.query.color || "Valore predefinito se il parametro name non è presente";
        },
        id(): any {
            return this.$route.query.id || "Valore predefinito se il parametro non è presente";
        }
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
    background-color: v-bind(color);
    color: white;
}

.button-class:hover {
    border-radius: 10px;
    font-size: xx-large;
    background-color: white;
    color: v-bind(color);
}</style>