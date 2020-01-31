/*
 * Define all auth hooks here and pass them to
 * the auth form as props.
 * */
import { isValidEmail, isValidPassword } from '../../../utils/validateInput';
import RestClient from '../../../services';

/**
 * @description handle changes in the form inputs
 * @param {object} e
 * @param {object} formValues
 * @param {object} setFormValues
 * @param {object} auth
 */
export function onChangeEventListener(e, formValues, setFormValues, auth) {
  setFormValues({ ...formValues, [e.target.name]: e.target.value });
  auth.authState.error && auth.onError(null);
}

/**
 * @description Validate formValues then:
 * isValid
 *  ? Make a request for login
 *  : Raise alarm
 * @param {Event} e onSubmit Event
 * @param {object} formValues values of email, password inputs
 * @param {object} auth the auth context object
 */
export function onSubmitListener(e, formValues, auth) {
  e.preventDefault();

  if (hasMissingParam(formValues, ['password', 'email'], auth)) return;

  try {
    if (
      isValidEmail(formValues.email) &&
      isValidPassword(formValues.password)
    ) {
      // For valid params
      loginUserHelper(formValues, auth);
      return;
    }

    // For invalid params...
    handleErrorHelper(
      {
        status: 401,
        message: 'INVALID_CREDENTIALS',
      },
      auth,
    );
  } catch (error) {
    // For an unexpected err
    handleErrorHelper(error, auth);
  }
}

/**
 * @description Check that form has all required params
 * @param {object} form
 * @param {object} authCtxt
 */
function hasMissingParam(form, required, authCtxt) {
  let hasMissing = false;
  required.forEach((value) => {
    if (!form[value]) {
      handleErrorHelper(
        {
          status: 400,
          message: `MISSING_REQUIRED_PARAM_${value.toUpperCase()}`,
        },
        authCtxt,
      );
      hasMissing = true;
    }
  });

  return hasMissing;
}

/**
 * @description Handle login when all params are AOK
 * @param {object} user  user object containing email, password
 * of user seeking authentication
 * @param {object} auth the auth context object
 */
async function loginUserHelper(user, auth) {
  await auth.onLoginRequest();
  try {
    const res = await RestClient.post('/login', { ...user });

    if (res && res.status && res.status === 200) {
      auth.onLoginSuccess(res.data.user);
      return;
    }

    // Temp. Remove when auth endpoint of API is live
    // Catch 401 err that's currently returned as response
    if (res && res.response.status && res.response.status === 401) {
      handleErrorHelper(
        {
          status: 401,
          message: res.response.message,
        },
        auth,
      );
    }
  } catch (error) {
    handleErrorHelper({ ...error, message: 'UNEXPECTED_ERR' }, auth);
  }
}

/**
 * @description Handle errors arising during login
 * @param {object} error
 * @param {object} auth the auth context
 */
function handleErrorHelper(error, auth) {
  auth.onError(error);
}
