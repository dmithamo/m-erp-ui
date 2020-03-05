import {
  onSubmitListener,
  onChangeEventListener,
} from '../Auth/eventListeners';

describe('onSubmitListener', () => {
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

  test('onSubmitListener calls onError fn for invalid params', () => {
    onSubmitListener(e, {}, auth);

    expect(auth.onLoginSuccess).toHaveBeenCalledTimes(0);
    expect(auth.onError).toHaveBeenCalledTimes(2); // Both pwd and email are bad
  });

  test('onSubmitListener calls auth.onError for bad credentials', () => {
    onSubmitListener(e, formValues, auth);

    expect(auth.onError).toHaveBeenCalledTimes(1);
  });

  test('onSubmitListener calls auth.onLoginSuccess for good credentials', () => {
    onSubmitListener(e, formValuesGood, auth);

    expect(auth.onLoginRequest).toHaveBeenCalledTimes(1);
    // expect(auth.onLoginSuccess).toHaveBeenCalledTimes(1);
    // TODO: Test login success. Complexity: fn is async/await
  });
});

describe('onChangeEventListener', () => {
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

  test('onChangeEventListener calls the fn that updates formValues', () => {
    onChangeEventListener(e, formValues, setFormValues, auth);

    expect(setFormValues).toHaveBeenCalledTimes(1);
  });

  test('onChangeEventListener calls the fn that clears errors when called when there is an error in auth context', () => {
    onChangeEventListener(e, formValues, setFormValues, auth);

    expect(auth.onError).toHaveBeenCalledTimes(1);
  });

  test('onChangeEventListener does not call the fn that clears errors when called when there is no error in auth context', () => {
    onChangeEventListener(e, formValues, setFormValues, authToo);

    expect(authToo.onError).toHaveBeenCalledTimes(0);
  });
});
