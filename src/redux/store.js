import { createStore } from 'redux';
import { registerUserReducer } from './reducers/authReducers';

const initialStore = {
  userAttrs: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  },
  validationErrors: [],
};
const store = createStore(
  registerUserReducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
