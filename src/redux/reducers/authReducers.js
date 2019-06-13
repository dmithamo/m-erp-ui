/**
 * Define the reducers that act on given authActions
 * to update the state accordingly
 *
 * Uses actionTypes to determine appropriate
 * execution
 */

import { authActionTypes } from '../actions/authActions';

const initialState = {
  users: [],
};

export const registerUserReducer = action => {
  switch (action.type) {
    case authActionTypes.REGISTER_USER:
      return { users: [...initialState.users, action.payload] };
    default:
      break;
  }
};

export const doNothing = 'doNothing';
