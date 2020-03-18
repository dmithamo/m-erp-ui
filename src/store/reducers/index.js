import { combineReducers } from 'redux';
import genericReducer, { GENERIC_INIT_STATE } from './genericReducer';

/**
 * @description Abstract reducer creation logic to allow
 * reuse of same generic reducer to manage all store slices
 * except auth
 */
function createReducer() {
  return (prevState, action) => {
    const isInitializing = action.type === '@@INIT';

    if (isInitializing) return GENERIC_INIT_STATE;
    return genericReducer(prevState, action);
  };
}

export default combineReducers({
  requisitions: createReducer(),
});
