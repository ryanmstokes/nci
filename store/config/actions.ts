import { actionTree } from 'typed-vuex'

/** Import the Config Typescript Interface */
import { AppConfig } from "@/nci/app/interfaces";

import state from "./state"
import getters from './getters'
import mutations from './mutations'

import recurseInject from '@/nci/app/injectors/recurseInject'

/** Store actions
 * @function actions
 * Actions process data and commit mutations
 * @function initApp Triggers a mutation and passing Config as the payload.
 */
const actions = actionTree(
  { state, getters, mutations },
  {
    /** initApp
     * @function initApp
     * Triggers a mutation and passes Config object as the payload.
     */
    async initApp({ commit, dispatch }, payload: AppConfig) {

      const appConfig = JSON.parse(JSON.stringify(payload));

      //** Commit style injected pages to the store */
      commit('setConfig', recurseInject(appConfig.config.pages, appConfig.theme));

      /** Commit the theme object to the store */
      commit('setTheme', appConfig.theme);
    },
  }
)

export default actions
