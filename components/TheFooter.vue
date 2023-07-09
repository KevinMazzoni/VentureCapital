<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <NuxtLink to="/contacts" class="link">Contact us</NuxtLink>
                </div>
                <div class="col-4">
                    <div class="container">
                        <!-- <div class="row">
                            <div class="col-12">
                                This site was realized by Glorious Koalas Inc.
                            </div>
                        </div> -->
                        <div class="row">
                            <div class="col-12">
                                <!-- @All rights reserved -->
                                <img src="~/assets/copyright.png" alt="Contains the tesxt 'copyright-All rights reserved'" class="copyright-image"> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        width: 100%;
        background-color: rgb(70, 107, 145);
    }

    .container{
        height: 100%;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: x-large;
        font-weight: 100;
    }

    .row{
        height: 100%;
        color: white;
    }

    .col-4{
        margin: auto;
        text-align: center;
    }

    .link{
        text-decoration: none;
        color: white;
    }

    .copyright-image{
        height: 70px
    }

</style>
