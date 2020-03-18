import {
  LOADING,
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_ERR,
} from '../actions/authTypes';

export const initialAuthState = { isFetching: false, user: null, error: null };

/**
 * @description Helper for updating state
 * @param {object} prevState
 * @param {object} newValues
 */
function updateStateHelper(prevState, newValues) {
  return { ...prevState, ...newValues };
}

/**
 * @description Act on a given action to update the state accordingly
 * @param {object} state
 * @param {type, payload} action
 */
export default function authReducer(state = initialAuthState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return updateStateHelper(state, { isFetching: true });

    case LOGIN_USER:
      return updateStateHelper(state, {
        isFetching: false,
        user: payload,
      });

    case LOGIN_ERR:
      return updateStateHelper(state, { isFetching: false, error: payload });

    case LOGOUT_USER:
      return initialAuthState;

    default:
      return state;
  }
}
