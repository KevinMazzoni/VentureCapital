<template>
    <div class="container">
        <div class="row landmarksrow">
            <div class="col-12">
                <nav class="nav">
                    <NuxtLink to="/" class="landmark">Home</NuxtLink>
                    <NuxtLink to="/allProjects" class="landmark">All Projects</NuxtLink>
                    <NuxtLink to="/allAreas" class="landmark">All Areas</NuxtLink>
                    <NuxtLink to="/contacts" class="landmark">Contacts</NuxtLink>
                    <NuxtLink to="/allPersons" class="landmark">Our Team</NuxtLink>
                </nav>
            </div>
        </div>
        <div class="row logorow">
            <div class="col-12">
                <NuxtLink to="/">
                    <img src="../assets/GloriousKoalasLogoBW.png" class="image">
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
        margin-top: 4%;
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
        height: 100%;
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
</style>