export const ERROR_RESPONSES = {
  genericError: {
    status: 500,
    title: 'Unexpected [server] Response',
    message: 'An unexpected [server] error happened',
  },

  invalidCredentials: {
    status: 401,
    title: 'Invalid Credentials',
    message: 'Wrong email or password',
  },
};

export const SUCCESS_RESPONSES = {};
