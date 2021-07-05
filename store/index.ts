/** Import Typed Vuex helpers */
import {
  /** getStoreType, */
  getAccessorType,
  mutationTree,
  actionTree,
  useAccessor,
} from 'nuxt-typed-vuex'

import Vue from 'vue'
/** Import the Config Store Module */
import config from '@/store/config/index';

/** Import the Store Typescript interface */
import { Store } from '@/nci/app/interfaces';

/** Store State */
export const state = () => ({
  name: 'Landing Zone Template' as string,
})

/** Store Getters */
export const getters = {
  name: (state: Store) => state.name,
}

/** Store Mutations */
export const mutations = mutationTree(state, {
  setName(state, newValue: string) {
    state.name = newValue
  },
})

/** Store Actions */
export const actions = actionTree(
  { state, getters, mutations },
  {
    /** ... */
  }
)

/** export the typed wrapper around module */
export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
  modules: {
    config: config
  },
})
