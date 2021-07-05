import { getterTree } from 'nuxt-typed-vuex'
import { Config, Image, Title, Button } from "@/nci/app/interfaces";
import state from "./state"

/** Store getters
 * @function getters
 *
 * @function Pages Returns the page abject definition.
 * @function formatedImage Takes an image definition and finds and returns an image object with Tailwind classes.
 * @function formatedTitle Takes a title definition and finds and returns an title object with Tailwind classes.
 * @function formatedButton Takes a button definition and finds and returns an buttoon object with Tailwind classes.
/** Store getters
 * @function actions
 * export the typed wrapper around module.
 * @function initApp Triggers a mutation and passes Config object as the payload.
 * @function initialiseStyleMapper Triggers a mutation and passes StyleMapper object as the payload.
 */
const getters = getterTree(state as Config, {

  /** Return the page definition object */
  pages: (state: Config) => state.pages,

});

export default getters
