/**
 * @description Define the
 * action creators for authentication
 *
 * PS:
 *  1.Action types are defined right alongside
 *    the action creators.
 *  2. store is substitutable with 'context' here
 */

import { LOADING, LOGIN_USER, LOGOUT_USER, LOGIN_ERR } from './authActionTypes';

/**
 * @description Indicate that a n/w request for auth
 * is in progress
 */
export const createLoginRequestAction = () => ({ type: LOADING });
export const makeLoginRequest = () => (dispatch) =>
  dispatch(createLoginRequestAction());

/**
 * @description Record a user as authenticated in the store
 * @param {object} user to add as authenticatedUser in store
 */
export const createLoginUserAction = (user) => ({
  type: LOGIN_USER,
  payload: user,
});
export const loginUser = (user) => (dispatch) =>
  // dispatch(loginReq)
  // Make api request
  // success ? dispatch(loginSuccess) : dispatch(loginErr)
  dispatch(createLoginUserAction(user));

/**
 * @description Remove authenticatedUser from store on
 * logout
 */
export const createLogoutUserAction = () => ({ type: LOGOUT_USER });
export const logoutUser = () => (dispatch) =>
  dispatch(createLogoutUserAction());

/**
 * @description Handle errors arising during auth
 * @param {object} error
 */
export const createHandleAuthErrorAction = (error) => ({
  type: LOGIN_ERR,
  payload: error,
});
export const handleAuthError = (error) => (dispatch) =>
  dispatch(createHandleAuthErrorAction(error));
