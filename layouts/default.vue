<template>
    <TheHeader />
    <div class="slot">
        <slot />
    </div>
    <TheFooter />
</template>

<!-------------------------TODO-------------------------->
<!-- Lasciare il padding-top a 5,28% nel layout e giostrare i MARGIN -->

<style scoped>
    .slot{
        /* padding-top: 5.28%; */
        padding-top: 10%;
    }
</style>