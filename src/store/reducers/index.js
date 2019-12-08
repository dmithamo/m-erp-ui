import { combineReducers } from 'redux';
import authReducer from './authReducer';

/**
 * @description Assemble all reducers into a single
 * root reducer namespaced according to function
 */
export default function rootReducer() {
  return combineReducers({ auth: authReducer });
}
