<template>
    <div>
        Project1
        Project2
    </div>
    <div>
        {{ message }}
    </div>
</template>

<script>
    export default defineNuxtComponent({
        async asyncData(){
            let message = await $fetch('/api/7')
            return { message }
        },
        data(){
            return{
                num: 20
            }
        }
    })
</script>