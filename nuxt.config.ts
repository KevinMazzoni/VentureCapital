// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    serverHandlers: [
        {
            route: '/server',
            handler: '~/server/myServer/index.js',
            middleware: true
        }
    ],
    css: [
        '~/assets/css/general.css'
    ]
})
