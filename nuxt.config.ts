// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//     serverHandlers: [
//         {
//             route: '/server',
//             handler: '~/server/myServer/index.js',
//             middleware: true
//         }
//     ],
//     css: [
//         '~/assets/css/general.css'
//     ],
//     link: [
//         {
//             rel: 'stylesheet',
//             href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
//         }
//     ]
// })

// import { hrtime } from "process";

import { NuxtConfig } from '@nuxt/types';
import { Configuration } from '@nuxt/types';

const nuxtConfig: NuxtConfig = {
    // Altre configurazioni...
  
    css: [
      'bootstrap/dist/css/bootstrap.css'
    ],
  
    // plugins: [
    //   { src: '~/plugins/bootstrap.js', ssr: false }
    // ],

    link: [
        {
            rel: 'stylesheet',
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
                },
                {
                    rel: 'bundle',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
                }
            ]
        }
    ]
  
    // Altre configurazioni...
  };
  
  export default nuxtConfig;


// export default {
//     css: [
//         '~/assets/css/general.css'
//     ],
//     link: [
//         {
//             rel: 'stylesheet',
//             link: [
//                 {
//                     rel: 'stylesheet',
//                     href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
//                 },
//                 {
//                     rel: 'bundle',
//                     href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
//                 }
//             ]
//         }
//     ]
// }


