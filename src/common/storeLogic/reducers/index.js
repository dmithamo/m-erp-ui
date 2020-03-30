import { combineReducers } from 'redux';
import reducer from './genericReducer';
import authReducer from '../../../features/auth/storeLogic/reducer';

/**
 * @description Reuse reducer logic to update state to avoid code duplication
 * @param {function} genericReducer
 * @param {string} reducerName
 */
function createNamedReducer(genericReducer, reducerName) {
  return (prevState = null, action) => {
    // const isInitializing = prevState === null; // When app first loads
    const isInitializing = action.type === '@@INIT'; // When app first loads
    const { stateName } = action;

    if (!isInitializing && stateName !== reducerName) return prevState;

    return genericReducer(prevState, action);
  };
}

export default combineReducers({
  auth: authReducer,
  requisitions: createNamedReducer(reducer, 'requisitions'),
});
