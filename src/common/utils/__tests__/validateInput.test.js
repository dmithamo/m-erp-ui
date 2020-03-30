import { isValidEmail, isValidPassword } from '../validateInput';

test('isValidEmail works as expected', () => {
  const validEmail = 'ada@lovelace.net';
  const invalidEmail = 'ada.lovelace@net';

  expect(isValidEmail(validEmail)).toBe(true);
  expect(isValidEmail(invalidEmail)).toBe(false);
});

test('isValidPassword works as expected', () => {
  const validPassword = 'AdaLove123';
  const invalidPassword = 'adalovelace';

  expect(isValidPassword(validPassword)).toBe(true);
  expect(isValidPassword(invalidPassword)).toBe(false);
});
