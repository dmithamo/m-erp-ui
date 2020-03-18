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

    api.post(path, params);
  },

  get: (path) => {
    if (path === '/requisitions') {
      return FAKE_DATA.requisitions;
    }
  },
};

function loginUserDummy(params) {
  const okRes = {
    status: 200,
    data: {
      user: {
        ...params,
        password: '!hidden',
        firstname: 'Lorraine',
        lastname: 'Bundi',
        role: 'Youth Pastor - Ruaka',
        permissions: '::dash::receipts::requisitions',
      },
    },
  };
  const notOkRes = {
    response: { status: 401, message: 'Wrong email or password' },
  };

  return params.email === 'admin@e.com' && params.password === 'Admin123'
    ? okRes
    : notOkRes;
}

export default RestClient;
