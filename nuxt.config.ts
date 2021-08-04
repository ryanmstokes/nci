import { NuxtConfig } from "@nuxt/types";
import ConfigFile from './nci/data/demo'
const config: NuxtConfig = {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'landing-zone',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  watch: ['nci'],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/tailwind.css'],
  router: {
    extendRoutes(routes, resolve) {
      Object.keys(ConfigFile.pages).forEach(key => {
        console.log('key:', key)
        routes.push({
          name: key,
          path: '/' + key,
          component: resolve(__dirname, 'pages/_index.vue')
        })
      })
    },

  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  storybook: {
    addons: [
      '@storybook/addon-controls',
      '@storybook/addon-notes',
    ],
    stories: ['@/nci/app/components/**/*/index.stories.@(ts)']
  },
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css',
    configPath: '@/tailwind.config.ts',
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['@/nci/app/components'/*'@/components'*/],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-typed-vuex',
    '@nuxtjs/composition-api/module',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        chunks: 'async',
      }
    },
    splitChunks: {
      layouts: false,
      pages: false,
      commons: false
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }
  },
  transpile: ['vuex-composition-helpers'], /** /@vue[\\/]composition-api/ */
}
export default config;
