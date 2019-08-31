/**
 * Define the reducers that act on given authActions
 * to update the state accordingly
 *
 * Uses actionTypes to determine appropriate
 * execution
 */

import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from '../actions/authActionTypes';

const initialState = {};

export const registerUserReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_USER:
      // Add new user to list of users
      return {
        ...state,
        users: [...state.users, { ...payload, active: false }],
      };
    case LOGIN_USER:
      // Set up a logged in user to the store
      return {
        ...state,
        authenticatedUser: { ...payload, loggedIn: true },
      };
    case LOGOUT_USER:
      // SLogout the user saved in the store
      return {
        ...state,
        authenticatedUser: {},
      };

    default:
      // Return given state as a default
      return state;
  }
};

export const doNothing = 'doNothing';
