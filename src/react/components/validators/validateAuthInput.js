import store from '../../../redux/store';

/**
 * @description Set up a switch as the primary gateway to input
 * validation
 * @param {DOMObject} input - the DOM Element whose
 *  input value we are validating
 * @returns {array} array of errors per input
 */
export const validateAuthInput = input => {
  const { id, value } = input;

  switch (id) {
    // Validate firstname
    case 'firstname':
      const firstNameErrors = validateName(id, value);
      if (firstNameErrors) return firstNameErrors;
      break;

    // Validate lastname
    case 'lastname':
      const lastNameErrors = validateName(id, value);
      if (lastNameErrors) return lastNameErrors;
      break;

    // Validate email
    case 'email':
      const emailErrors = validateEmail(value);
      if (emailErrors) return emailErrors;
      break;

    // Validate Password
    case 'password':
      const passwordErrors = validatePassword(value);
      if (passwordErrors) return passwordErrors;
      break;

    default:
      break;
  }
};

/**
 * @description Use RegExp to catch invalid names
 * @param {string} name - user-input in the [first||last]name field
 * @returns {array} nameErrors - an array of errors of the
 * shape:
 * [{errorID: '[first||last]name', errorMessage: 'A descriptive message for each error}]
 */
const validateName = (inputID, name) => {
  // Collect errors
  const nameErrors = [];

  if (name) {
    // Use RegExp to flag non-alphabetic xters in name
    const nonAlphabeticRegEx = new RegExp('[^a-zA-Z]');
    const containsNonAlphabeticCharacters = nonAlphabeticRegEx.test(name);

    containsNonAlphabeticCharacters &&
      nameErrors.push({
        errorID: inputID,
        errorMessage: `Only alphabetic (a-z) characters are allowed for the ${inputID}`,
      });
  } else {
    nameErrors.push({
      errorID: inputID,
      errorMessage: `You need to enter your ${inputID}.`,
    });
  }
  return nameErrors;
};

/**
 * @description Use RegExp to catch invalid email addresses
 * @param {string} email - user-input in the email field
 * @returns {array} emailErrors - an array of errors of the
 * shape:
 * [{errorID: 'email', errorMessage: 'A descriptive message for each error}]
 */
const validateEmail = email => {
  const emailErrors = [];

  if (email) {
    // RegExp for valid MHC Email
    // TODO: Confirm email pattern
    // const mhcEmailRegEx = new RegExp('\\w+.\\w+@mamlakahillchapel.org');
    const mhcEmailRegEx = new RegExp('\\w+@temp.org');
    const isInvalidMHCEmail = !mhcEmailRegEx.test(email);

    isInvalidMHCEmail &&
      emailErrors.push({
        errorID: 'email',
        errorMessage: `${email} is not a valid MHC email address`,
      });

    const isNotUnique = !checkUniqueness(email);
    isNotUnique &&
      emailErrors.push({
        errorID: 'email',
        errorMessage: `${email} is already in use`,
      });
  } else {
    emailErrors.push({
      errorID: 'email',
      errorMessage: 'You need to enter your MHC-issued email address.',
    });
  }

  return emailErrors;
};

/**
 * @description Check whether email is unique
 * @param {string} email
 */
const checkUniqueness = email => {
  const { users } = store.getState();
  const isUnique = users.filter(user => user.email === email).length === 0;
  return isUnique;
};

/**
 * @description Use RegExp to validate password
 * @param {string} password - user-input in the password field
 * @returns {array} passwordErrors - an array of errors of the
 * shape:
 * [{errorID: 'password', errorMessage: 'A descriptive message for each error}]
 */
const validatePassword = password => {
  const passwordErrors = [];

  if (password) {
    /**
     * RegEx for a strong password
     * Borrowed from the internet
     * * - (?=.*\d) // should contain at least one digit
     * * - (?=.*[a-z]) // should contain at least one lower case
     * * - (?=.*[A-Z]) // should contain at least one upper case
     * * - [a-zA-Z0-9]{8,} // should contain at least 8 from the mentioned characters */

    const strongPasswordRegEx = new RegExp(
      '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}',
    );

    const isWeakPassword = !strongPasswordRegEx.test(password);

    isWeakPassword &&
      passwordErrors.push({
        errorID: 'password',
        errorMessage: `Your password is too weak.
       Mix digits, lowercase letters and uppercase letters. And make it at least 8 characters long`,
      });
  } else {
    passwordErrors.push({
      errorID: 'password',
      errorMessage: 'You need to create a password.',
    });
  }

  return passwordErrors;
};

/**
 * @description Check that user has selected a value in each of the selects
 * @param {DOMObject} select - select element whose value is to be validated
 * @returns {array} selectErrors - an array of errors of the
 * shape:
 * [{errorID: [selectID], errorMessage: 'A descriptive message for each error}]
 */
export const validateAuthSelect = select => {
  const { id, value } = select;

  const selectErrors = [];
  if (!value) {
    selectErrors.push({
      errorID: id,
      errorMessage: `You need to select your ${id.split('-')[1]}`,
    });
  }
  return selectErrors;
};
