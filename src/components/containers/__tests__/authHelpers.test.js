import { onSubmitHelper, onChangeHelper } from '../auth/authHelpers';

describe('onSubmitHelper', () => {
  const e = { preventDefault: jest.fn() }; // fake event object
  let formValues;
  let auth;

  const formValuesGood = { email: 'admin@e.com', password: 'Admin123' };

  beforeEach(() => {
    formValues = {
      email: 'ada@lovelace.net',
      password: 'Ada pass',
    };
    auth = {
      onLoginRequest: jest.fn(),
      onLoginSuccess: jest.fn(),
      onError: jest.fn(),
    };
  });

  test('onSubmitHelper does not call auth fns for invalid credentials', () => {
    onSubmitHelper(e, {}, auth);

    expect(auth.onLoginSuccess).toHaveBeenCalledTimes(0);
    expect(auth.onError).toHaveBeenCalledTimes(0);
  });

  test('onSubmitHelper calls auth.onError for bad credentials', () => {
    onSubmitHelper(e, formValues, auth);

    expect(auth.onError).toHaveBeenCalledTimes(1);
  });

  test('onSubmitHelper calls auth.onLoginSuccess for good credentials', () => {
    onSubmitHelper(e, formValuesGood, auth);

    expect(auth.onLoginRequest).toHaveBeenCalledTimes(1);
    // expect(auth.onLoginSuccess).toHaveBeenCalledTimes(1);
    // TODO: Test login success
  });
});

describe('onChangeHelper', () => {
  const e = { target: { name: '', value: '' } }; // fake event object
  const formValues = {};
  const setFormValues = jest.fn();
  let auth;

  const authToo = { authState: {}, onError: jest.fn() };

  beforeEach(() => {
    auth = {
      authState: { error: 'Fake error' },
      onError: jest.fn(),
    };
  });

  test('onChangeHelper calls the fn that updates formValues', () => {
    onChangeHelper(e, formValues, setFormValues, auth);

    expect(setFormValues).toHaveBeenCalledTimes(1);
  });

  test('onChangeHelper calls the fn that clears errors when called when there is an error in auth context', () => {
    onChangeHelper(e, formValues, setFormValues, auth);

    expect(auth.onError).toHaveBeenCalledTimes(1);
  });

  test('onChangeHelper does not call the fn that clears errors when called when there is no error in auth context', () => {
    onChangeHelper(e, formValues, setFormValues, authToo);

    expect(authToo.onError).toHaveBeenCalledTimes(0);
  });
});
