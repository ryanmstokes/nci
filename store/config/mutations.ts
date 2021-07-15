import Vue from 'vue';
import state from "./state"
import { mutationTree } from 'typed-vuex'
import { Config, Pages } from "@/nci/app/interfaces";

/** Store mutations
 * @function mutations
 * @function setConfig Takes a Config object and saves it to the store.
 * @function setStyleMapper Takes a StyleMapper object and saves it to the store.
*/
const mutations = mutationTree(state, {

  /** setName
   * @function setName
   * Commit the name of the  application to the store */
  setName(state, newValue: string) {
    state.name = newValue
  },

  /** setConfig
   * @function setConfig
   * Commit the Config object to the store */
  setConfig(state, newValue: Pages) {
    Vue.set<Pages>(state, 'pages', newValue)
  },

  /** setNav
   * @function setConfig
   * Commit the Config object to the store */
  setNav(state, newValue: any) {
    Vue.set<any>(state, 'nav', newValue)
  },

  /** setStyleMapper
   * @function setStyleMapper
   * Commit the StyleMapper object to the store
   */
  setTheme(state, newValue: object) {
    Vue.set<Config>(state, 'theme', newValue);
  },
})

export default mutations;
