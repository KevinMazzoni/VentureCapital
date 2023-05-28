
<template>
    <header>
        <h1>InVenture</h1>
        <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/allProjects">All Projects</NuxtLink>
            <NuxtLink to="/allAreas">All Areas</NuxtLink>
            <NuxtLink to="/contacts">Contacts</NuxtLink>
        </nav>
    </header>
</template>

<style>
    header {
        width: 100vw;
        background-color: skyblue;
        height: 100px
    }

    nav {
        float: left;
        display: flex;
        gap: 30px;
        font-size: 17pt;
        font-weight: bold;
    }
</style>