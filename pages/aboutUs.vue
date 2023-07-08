<template>
    <div class="row ">
        <div class="container-motto text-center mt-4">
            "{{ data.motto }}"
        </div>
    </div>
    <img :src="url" class="centered-image mt-4">
    <div class="container">

        <div class="outer-container mt-4">
            <div class="row mt-2">
                <div class="col-6">
                    <div class='title'>Our story</div>
                    <div class="description"> {{ data.story }} </div>
                </div>
                <div class="col-6">
                    <div class="title">Our vision</div>
                    <div class="description"> {{ data.strategy }} </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import useAssets from '~/composables/useAssets';
    const rowData = await useFetch('/api/aboutUs');
    const data = rowData.data._value
    console.log(data)
    const url = useAssets(`/assets/persons/${data.url}`)
</script>

<style scoped>
.centered-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    object-fit: cover;
    margin: 0 auto;
}

.container-motto {
    font-style: italic;
    margin-left: 10%;
    font-size: xx-large;
    width: 80%;
    height: 50px;
    background-color: lightblue;
    color: white;
}
</style>