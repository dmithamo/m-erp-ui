import authReducer from '../../reducers/authReducer';
import * as authActionTypes from '../../actions/authActionTypes';

test('returns original state by default', () => {
  expect(authReducer(undefined, { type: null, payload: null })).toMatchObject({
    isFetching: false,
    user: null,
    error: null,
  });
});

test('returns the right state for {type: LOADING}', () => {
  expect(
    authReducer(undefined, { type: authActionTypes.LOADING }),
  ).toMatchObject({
    isFetching: true,
    error: null,
    user: null,
  });
});

test('returns the right state for {type: LOGIN_USER', () => {
  const user = { username: 'adaLove' /* other user params */ };

  expect(
    authReducer(undefined, { type: authActionTypes.LOGIN_USER, payload: user }),
  ).toMatchObject({
    isFetching: false,
    user,
    error: null,
  });
});

test('returns the right state for {type: LOGIN_ERR', () => {
  const error = { status: 500 /* other err params */ };

  expect(
    authReducer(undefined, { type: authActionTypes.LOGIN_ERR, payload: error }),
  ).toMatchObject({
    isFetching: false,
    user: null,
    error,
  });
});

test('returns the right state for {type: LOGOUT}', () => {
  expect(
    authReducer(undefined, { type: authActionTypes.LOGOUT_USER }),
  ).toMatchObject({
    isFetching: false,
    user: null,
    error: null,
  });
});
