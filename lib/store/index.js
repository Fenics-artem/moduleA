import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import c from '../constants'

export default {
  [c.MODULE_NAME]: {
    namespaced: true,
      state,
      getters,
      mutations,
      actions
  }
}
