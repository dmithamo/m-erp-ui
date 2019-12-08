import {
  createLoginRequestAction,
  createLoginUserAction,
  createHandleAuthErrorAction,
  createLogoutUserAction,
} from '../../actions/authActions';
import * as authActionTypes from '../../actions/authActionTypes';

test('createLoginRequest return the right action', () => {
  expect(createLoginRequestAction()).toMatchObject({
    type: authActionTypes.LOADING,
  });
});

test('createLoginUserAction returns the right action', () => {
  const user = { username: 'adaLove' /* other user params */ };
  expect(createLoginUserAction(user)).toMatchObject({
    type: authActionTypes.LOGIN_USER,
    payload: user,
  });
});

test('createHandleAuthErrorAction returns the right action', () => {
  const error = {
    status: 500,
    /* other err params */
  };

  expect(createHandleAuthErrorAction(error)).toMatchObject({
    type: authActionTypes.LOGIN_ERR,
    payload: error,
  });
});

test('createLogoutAction returns the right action', () => {
  expect(createLogoutUserAction()).toMatchObject({
    type: authActionTypes.LOGOUT_USER,
  });
});

// TODO: Test that dispatch dispatches the right actions in the store
