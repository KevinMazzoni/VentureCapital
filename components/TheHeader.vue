
<template>
    <header>
        <div class="container">
            <div class="row headerrow">
                <div class="col-3">
                    <NuxtLink to="/">
                        <img src="../assets/GloriousKoalasLogoBW.png" class="image">
                    </NuxtLink>
                </div>
                <div class="col-9">
                    <nav class="nav">
                        <NuxtLink to="/" class="landmark">Home</NuxtLink>
                        <NuxtLink to="/allProjects" class="landmark">All Projects</NuxtLink>
                        <NuxtLink to="/allAreas" class="landmark">All Areas</NuxtLink>
                        <NuxtLink to="/contacts" class="landmark">Contacts</NuxtLink>
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
        height: 100%;
        padding-left: 30px;
        padding-top: 4px;
    }
    .logo{
        margin-top: 0px;
    }
    header {
        width: 100vw;
        background-color: darkblue;
        height: 100px;
        margin-top: 0px;
        padding-top: 10px;
        padding-bottom: 10px;
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
</style>
