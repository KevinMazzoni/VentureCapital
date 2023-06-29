<template>
    <!-- <div class="container">
        <div class="row">
            <div class="col-8"> -->
                <div class="wrapper">
                    <div class="image-wrapper">
                        <img :src="url" />
                    </div>
                    <div class="header-wrapper">
                        <h1 class="project-name">{{ name }}</h1>
                    </div>
                    <div class="header-wrapper-see">
                        <h1 class="see-project">See project</h1>
                    </div>
                </div>
            <!-- </div>
        </div>
    </div> -->

            
            <!-- <div class="col-3">
                {{ caption }}
            </div> -->
        <!-- </div> -->
    <!-- </div> -->

    <!-- <div class="wrapper">
        <div class="image-wrapper">
            <img class="book-design-image"
                src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1306&q=80" />
        </div>
        <div class="header-wrapper">
            <h1>Book Design</h1>
            <h1>See Project</h1>
        </div>
    </div> -->
</template>

<script setup>
const props = defineProps({
    name: String,
    url: String,
    caption: String
})
</script>

<style scoped>
.container{
    margin: auto;
}
body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: #222;
}

.wrapper {
    margin-top: 30px;
    
    position: relative;
    height: 50%;
    width: 50%;
    /* margin: 50px 0; */

    margin: auto;

    display: flex;
    flex-direction: row;

    /* transition: all 200ms ease-in-out; */

    cursor: pointer;
}
.wrapper:hover{
    background-color: rgba(60, 60, 60, 0.027);
    box-shadow: 0 10px 20px  rgb(60, 60, 60);
    border: none;
    /* transition: box-shadow 0.3s ease-in-out; */
}

.image-wrapper {
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 20px;
    cursor: pointer;

    transition: all 200ms ease-in-out;
}

img {
    height: 100%;
    width: 100%;
    border-radius: 20px;
    filter: brightness(60%);
    object-fit: cover;
    object-position: top;

    transition: all 200ms ease-in-out;
}

.book-design-image {
    object-position: center;
}

.header-wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 300px;
    width: 300px;
    left: 268px;
    text-align: center;
    margin-top: 172px;
    
    transition: all 200ms ease-in-out;
    overflow: hidden;

}

.header-wrapper-see {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 300px;
    width: 300px;
    left: 555px;
    text-align: center;
    margin-top: 172px;
    font-size: 30px;
    
    transition: all 200ms ease-in-out;
    overflow: hidden;
    bottom: -100px;

}

.project-name {
    position: relative;
    bottom: 0;
    height: 300px;
    color: #fff;
    font-size: 40px;
    font-family: monospace;
    /* text-transform: uppercase; */

    transition: all 200ms ease-in-out;
}

.see-project {
    position: relative;
    bottom: -200px;
    height: 300px;
    color: #fff;
    font-size: 40px;
    font-family: monospace;
    /* text-transform: uppercase; */

    transition: all 200ms ease-in-out;
}

.wrapper:hover img {
    transform: scale(1.2);
    border-radius: 20px;
    /* object-position: bottom; */
    /* width: 105%; */
    /* height: 100%; */
}

/* .wrapper:hover .project-name {
    bottom: 100px; */
    /* border-radius: 20px; */
    /* transform: scale(.4);
} */

.wrapper:hover .see-project {
    bottom: -130px;
    /* border-radius: 20px; */
    /* transform: scale(.4); */
}

.wrapper:hover .image-wrapper {
    border-radius: 20px;
    /* width: 2000px; */
}

.col-3{
    margin: auto;
    text-align: center;
}
</style>