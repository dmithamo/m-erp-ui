const GENERIC_ERROR_RESPONSES = {
  NO_RESPONSE_ERR: {
    'en-uk': 'An unexpected [server] error happened',
  },

  MISSING_REQUIRED_PARAM: {
    'en-uk': 'Missing a required parameter. Check below',
  },

  UNEXPECTED_ERR: {
    'en-uk': 'An unexpected error happened',
  },
};

const AUTH_ERR_MESSAGES = {
  INVALID_CREDENTIALS: {
    'en-uk': 'Wrong email or password',
  },

  MISSING_REQUIRED_PARAM_EMAIL: {
    'en-uk': 'Email is required',
  },

  MISSING_REQUIRED_PARAM_PASSWORD: {
    'en-uk': 'Password is required',
  },
  /* Insert generic err messages */
  ...GENERIC_ERROR_RESPONSES,
};

// const SUCCESS_RESPONSES = {};

/**
 * @description Generate error response
 * @param {string} category Class where err is generated
 * @param {string} lang
 * @param {string} msg
 */
export default function generateErrorMessage(category, msg, lang = 'en-uk') {
  switch (category) {
    case 'auth':
      return AUTH_ERR_MESSAGES[msg][lang];

    default:
      throw new Error(`Unhandled err category: ${category}`);
  }
}
