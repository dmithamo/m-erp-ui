import api from '../../../common/services';
/**
 * @description Define the
 * action creators for authentication
 */
export const LOADING = 'LOADING';
export const REGISTER_USER = 'REGISTER_USER';
export const REG_ERR = 'REG_ERR';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGIN_ERR = 'LOGIN_ERR';
export const FORM_VALIDATION_ERR = 'FORM_VALIDATION_ERR';
export const CLEAR_FORM_ERRORS = 'CLEAR_FORM_ERRORS';

/**
 * @description Indicate that a n/w request for auth
 * is in progress
 */
export const initiateLoginRequest = () => ({ type: LOADING });

/**
 * @description Record a user as authenticated in the store
 * @param {object} user to add as authenticatedUser in store
 */
export const loginSuccess = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

/**
 * @description Remove authenticatedUser from store on
 * logout
 */
export const logoutSuccess = () => ({ type: LOGOUT_USER });

/**
 * @description Handle errors arising during auth
 * @param {object} error
 */
export const loginFail = (error) => ({
  type: LOGIN_ERR,
  payload: error,
});

/**
 * @description Remove errors from store
 * @param {string} stateName Slice of state that this action targets
 */
export function clearFormErrors() {
  return { type: CLEAR_FORM_ERRORS };
}

// -- @thunks
export function loginUser(user) {
  return async (dispatch) => {
    dispatch(initiateLoginRequest());

    try {
      const res = await api.post('/login', user);
      if (res && res.status === 200) {
        dispatch(loginSuccess(res.data.user));
        return;
      }

      if (res && res.status === 401) {
        dispatch(loginFail(res));
        return;
      }

      dispatch(loginFail({ message: 'UNEXPECTED_ERR', status: 500 }));
    } catch (error) {
      dispatch(
        loginFail({
          message: error.message || 'NO_RESPONSE',
          status: error.status || 500,
        }),
      );
    }
  };
}

export function logoutUser() {
  return async (dispatch) => {
    dispatch(logoutSuccess());
  };
}

/**
 * @description Dispatch an error action to the store
 * @param {object} error
 * @param {string} stateName Slice of state that this action targets
 */
export function addValidationError(error) {
  return (dispatch) => dispatch(loginFail(error));
}

/**
 * @description Dispatch an action to reset error to false
 * @param {string} stateName Slice of state that this action targets
 */
export function removeFormErrors() {
  return (dispatch) => dispatch(clearFormErrors());
}
