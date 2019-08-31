/**
 * Define the action types and action creaters for the
 * authentication [signUp || signIn]
 * functionalities in the app
 *
 * PS: Action types are defined right alongside
 * the action creators.
 */

import store from '../store';

import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from './authActionTypes';

/**
 * @description Create the action needed for writing user
 * to the store on successful validation
 * @param {object} user new user to be written in the store
 * @returns {object} registerUserAction action
 */
const createRegisterUserAction = user => {
  return {
    type: REGISTER_USER,
    payload: user,
  };
};

/**
 * @description Write user to the store on successful validation
 * @param {object} user new user to be written in the store
 * @returns {void}
 */
export const registerUser = user => {
  store.dispatch(createRegisterUserAction(user));
};

/**
 * @description Create the action needed for loging in a user
 * @param {object} user user to be logged in
 * @returns {object} loginUserAction action
 */
const createLoginUserAction = user => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};
export const loginUser = user => {
  store.dispatch(createLoginUserAction(user));
};

/**
 * @description Create the action needed for loging out a user
 * @returns {object} loginUserAction action
 */
const createLogoutUserAction = () => {
  return {
    type: LOGOUT_USER,
  };
};
export const logoutUser = () => {
  store.dispatch(createLogoutUserAction());
};
