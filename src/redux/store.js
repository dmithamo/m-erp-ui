import { createStore } from 'redux';
import { registerUserReducer } from './reducers/authReducers';

// Initialize store
const initialStore = {
  users: [],
  authenticatedUser: {},
};

const store = createStore(
  registerUserReducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
