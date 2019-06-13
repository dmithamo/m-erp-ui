/**
 * Define the action types and action creaters for the
 * authentication [signUp || signIn]
 * functionalities in the app
 *
 * PS: Action types are defined right alongside
 * the action creators.
 * Beacuse my choice
 */

const REGISTER_USER = 'REGISTER_USER';
export const registerUserActionCreator = user => {
  return {
    type: REGISTER_USER,
    payload: user,
  };
};

// Export all action types in one object
export const authActionTypes = {
  REGISTER_USER,
};
