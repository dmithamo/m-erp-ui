/**
 * Define the action types and action creaters for the
 * authentication [signUp || signIn]
 * functionalities in the app
 *
 * PS: Action types are defined right alongside
 * the action creators.
 * Beacuse my choice
 */

const ADD_VALIDATION_ERRORS = 'ADD_VALIDATION_ERRORS';
export const addValidationErrors = errors => {
  return {
    type: ADD_VALIDATION_ERRORS,
    payload: errors,
  };
};

const CLEAR_VALIDATION_ERRORS = 'CLEAR_VALIDATION_ERRORS';
export const clearValidationErrors = inputID => {
  return {
    type: CLEAR_VALIDATION_ERRORS,
    payload: inputID,
  };
};

const COLLECT_USER_INPUT = 'COLLECT_USER_INPUT';
export const collectUserInput = input => {
  return {
    type: COLLECT_USER_INPUT,
    payload: input,
  };
};

const REGISTER_USER = 'REGISTER_USER';
export const registerUser = user => {
  return {
    type: REGISTER_USER,
    payload: user,
  };
};

// Export all action types in one object
export const authActionTypes = {
  ADD_VALIDATION_ERRORS,
  CLEAR_VALIDATION_ERRORS,
  COLLECT_USER_INPUT,
  REGISTER_USER,
};
