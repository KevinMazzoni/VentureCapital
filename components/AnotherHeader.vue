
<template>
    <header>
        <div class="container">
            <div class="row headerrow">
                <div class="col-3 minwidth">
                    <NuxtLink to="/">
                        <img src="../assets/GloriousKoalasLogoBW.png" class="image" alt="Logo of Glorious Koalas, with a stylized Koala, and the motto 'We believe in you, we invest in you'">
                    </NuxtLink>
                </div>
                <div class="col-9 minwidth">
                    <nav class="nav">
                        <NuxtLink to="/allProjects" class="landmark">All Projects</NuxtLink>
                        <NuxtLink to="/allAreas" class="landmark">All Areas</NuxtLink>
                        <NuxtLink to="/aboutUs" class="landmark">About us</NuxtLink>
                        <NuxtLink to="/allPersons" class="landmark">Our Team</NuxtLink>
                        <NuxtLink to="/majorProjects" class="landmark">Major Projects</NuxtLink>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>

    .headerrow{
        margin-top: 7px;
    }
    .image{
        width: 100%;
        min-width: 200px;
        height: auto;
        padding-top: 4px;
    }
    .logo{
        margin-top: 0px;
    }
    header {
        width: 100vw;
        background-color: rgba(70, 108, 145, 0);
        height: 100px;
        margin-top: 0px;
        padding-top: 10px;
        padding-bottom: 10px;
        position: fixed;
    }

    nav {
        float: right;
        display: flex;
        gap: 30px;
        font-size: 17pt;
        font-weight: bold;
        vertical-align: middle;
        padding-top: 16px;
        padding-right: 30px;
    }
    .col-3{
        float: left;
        width: 30%;
    }
    .col-9{
        width: 70%;
        float: right;
    }

    .landmark {
        color: white;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 300;
        text-decoration: none;

        display: inline-block;
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
