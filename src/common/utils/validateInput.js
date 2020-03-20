/**
 * @description Validate all the things!
 */

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
/*
 * (?=.*\d)          should contain at least one digit
 * (?=.*[a-z])       should contain at least one lower case
 * (?=.*[A-Z])       should contain at least one upper case
 * [a-zA-Z0-9]{8,}   should contain at least 8 from the mentioned characters
 *
 * Thankyou, Stack Overflow
 * */

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/*
 *
 * Thankyou, Stack Overflow
 * */

export function isValidPassword(password) {
  return PASSWORD_REGEX.test(password);
}

export function isValidEmail(email) {
  return EMAIL_REGEX.test(email);
}
