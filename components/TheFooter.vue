<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-6 contacts">
                    <NuxtLink to="/contacts" class="link">Contact us</NuxtLink>
                </div>
                <div class="col-6">
                    <!-- @All rights reserved -->
                    <img src="~/assets/copyright.png" alt="Contains the text 'copyright-All rights reserved'" class="copyright-image"> 
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

    .contacts{
        margin-top: 1.5%;
        text-align: center;
    }

    .link{
        text-decoration: none;
        color: white;
    }

    .copyright-image{
        width: 40%;
        min-width: 200px
    }

</style>
