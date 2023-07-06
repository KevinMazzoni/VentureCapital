import { NuxtConfig } from '@nuxt/types';


const nuxtConfig: NuxtConfig = {
    // Altre configurazioni...

    head: {
        titleTemplate: '%s - Nome del Tuo Progetto',
    },

    css: [
      'bootstrap/dist/css/bootstrap.css',
      '~/assets/css/general.css'
    ],

    modules: [
      '@nuxtjs/supabase'
    ],

    //ssr: false

    // serverHandlers: [
    //   {
    //     route: '/server',
    //     handler: '~/server/myServer/index.js',
    //     middleware: true
    //   }
    // ]

  };
  
export default nuxtConfig;
