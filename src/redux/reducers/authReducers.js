/**
 * Define the reducers that act on given authActions
 * to update the state accordingly
 *
 * Uses actionTypes to determine appropriate
 * execution
 */

import { authActionTypes } from '../actions/authActions';

const initialState = {};

export const registerUserReducer = (state = initialState, action) => {
  const {
    ADD_VALIDATION_ERRORS,
    CLEAR_VALIDATION_ERRORS,
    COLLECT_USER_INPUT,
    REGISTER_USER,
  } = authActionTypes;

  const { type, payload } = action;

  switch (type) {
    case ADD_VALIDATION_ERRORS:
      // Record errors in global store
      return {
        ...state,
        validationErrors: [...state.validationErrors, ...payload],
      };

    case CLEAR_VALIDATION_ERRORS:
      // Remove errors from global store in reponse to focusEvent
      return {
        ...state,
        validationErrors: state.validationErrors.filter(
          err => err.errorID !== payload,
        ),
      };

    case COLLECT_USER_INPUT:
      // Record user input in the global state
      const { id, value } = payload;
      return {
        ...state,
        userAttrs: { ...state.userAttrs, [id]: value },
      };

    case REGISTER_USER:
      // Add new user to list of users
      // return [...state, { ...payload, loggedIn: false }];
      return {};

    default:
      // Return given state as a default
      return state;
  }
};

export const doNothing = 'doNothing';
