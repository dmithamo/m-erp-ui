/*
 * Define all auth hooks here and pass them to
 * the auth form as props.
 * */
import { isValidEmail, isValidPassword } from '../../../../utils/validateInput';
import { ERROR_RESPONSES } from '../../../../constants/standardMessages';
import RestClient from '../../../../services';

/**
 * @description Validate formValues then:
 * isValid
 *  ? Make a request for login
 *  : Raise alarm
 * @param {Event} e onSubmit Event
 * @param {object} formValues values of email, password inputs
 * @param {object} auth the auth context object
 */
export function onSubmitHelper(e, formValues, auth) {
  e.preventDefault();

  /*
   * Render error maybe?
   */
  if (!formValues || !formValues.email || !formValues.password) {
    return;
  }

  try {
    isValidEmail(formValues.email) && isValidPassword(formValues.password)
      ? loginUserHelper(formValues, auth)
      : handleErrorHelper(ERROR_RESPONSES.invalidCredentials, auth);
  } catch (error) {
    handleErrorHelper(error, auth);
  }
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
          ...ERROR_RESPONSES.genericError,
          message: res.response.message,
        },
        auth,
      );
    }
  } catch (error) {
    handleErrorHelper(error, auth);
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

/**
 * @description handle changes in the form inputs
 * @param {object} e
 * @param {object} formValues
 * @param {object} setFormValues
 * @param {object} auth
 */
export function onChangeHelper(e, formValues, setFormValues, auth) {
  setFormValues({ ...formValues, [e.target.name]: e.target.value });
  auth.authState.error && auth.onError(null);
}
