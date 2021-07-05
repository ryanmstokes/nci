import { accessorType } from '~/store'

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    // If used: vuexCxt.commit('user/init')
    // Error: '$accessor' is referenced directly or indirectly in its own type annotation.ts(2502)
    $accessor: typeof accessorType
  }
}
