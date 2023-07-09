<template>
    <div class="container">
        <div class="row landmarksrow minwidth">
            <div class="col-12">
                <!-- <nav class="nav">
                    <NuxtLink to="/" class="landmark">Home</NuxtLink>
                    <NuxtLink to="/allProjects" class="landmark">All Projects</NuxtLink>
                    <NuxtLink to="/allAreas" class="landmark">All Areas</NuxtLink>
                    <NuxtLink to="/aboutUs" class="landmark">About us</NuxtLink>
                    <NuxtLink to="/allPersons" class="landmark">Our Team</NuxtLink>
                    <NuxtLink to="/majorProjects" class="landmark">Major Projects</NuxtLink>
                </nav> -->
                <AnotherHeader/>
            </div>
        </div>
        <div class="row logorow minwidth">
            <div class="col-12">
                <NuxtLink to="/">
                    <img src="../assets/GloriousKoalasLogoBW.png" class="image" alt="Logo of Glorious Koalas, with a stylized Koala, and the motto 'We believe in you, we invest in you'">
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .container{
        position: absolute;
        height: 100%;
        z-index: 10000;
    }

    .landmarksrow{
        position: absolute;
        width: 100%;
    }
    .logorow{
        
        align-items: center;
        display: flex;
        min-height: 100%;
    }
    .col-12{
        display: flex;
        justify-content: center;
    }

    .image{
        width: 100%;
        min-width: 200px;
        height: auto;
        padding-top: 4px;
    }

    nav {
        gap: 10vh;
    }

    .landmark {
        color:white;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 330;
        font-size: 3vh;
        text-decoration: none;
        position: relative;
    }

    .landmark::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #0087ca;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .landmark:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    .minwidth{
        min-width: 200px;
    }
</style>