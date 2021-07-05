/** Declare the module as namespaced */
const namespaced = true as true;

import state from './state'

import actions from './actions'

import getters from './getters'

import mutations from './mutations'

export default { namespaced, state, actions, getters, mutations }
