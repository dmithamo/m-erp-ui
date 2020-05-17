import axios from 'axios';
import FAKE_DATA from './fakeData';

require('dotenv').config();

const config = {
  BASE_URL: process.env.REACT_APP_API_URL,
};
const api = axios.create(config);

const RestClient = {
  // Temporarily intercept login request
  post: (path, params) => {
    if (path === '/login') {
      return loginUserDummy(params);
    }

    return api.post(path, params);
  },

  get: (path) => {
    if (path === '/requisitions') {
      return {
        message: 'OK',
        status: 200,
        data: { requisitions: FAKE_DATA.requisitions },
      };
    }

    return api.get(path);
  },
};

/**
 * @description Placeholder auth function
 * @param {object} params
 * @return {object} res
 */
function loginUserDummy(params) {
  const okRes = {
    status: 200,
    data: {
      user: {
        ...params,
        password: '',
        firstname: 'Khalegi',
        lastname: 'Bundi',
        role: 'Pastor For Youth',
        reportsTo: 'julie',
        permissions: '::all::',
      },
    },
  };
  const notOkRes = {
    status: 401,
    message: 'INVALID_CREDENTIALS',
  };

  return params.email === 'admin@e.com' && params.password === 'Admin123'
    ? okRes
    : notOkRes;
}

export default RestClient;
