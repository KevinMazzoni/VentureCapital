import { NuxtConfig } from '@nuxt/types';


const nuxtConfig: NuxtConfig = {
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Glorious Koalas website page',
      meta: [
        {
          name: "decription",
          content: "descprition of the Glorious Koalas webpage"
        },
        {
          name: "keywords",
          content: "venture, capital, investment, innovation, startup"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }
      ]
    },

    router: {
      routes: require('./routes.js').default,
    },
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
