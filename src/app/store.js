import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import createEncryptor from 'redux-persist-transform-encrypt';
import rootReducer from '../common/storeLogic/reducers';
import { initialAuthState } from '../features/auth/storeLogic/reducer';

require('dotenv').config();

const GENERIC_INIT_STATE = {
  isFetching: false,
  data: [],
  fetchError: false,
  form: { isPosting: false, postError: false },
};

/**
 * @description Create a redux store
 */
function configureStore(reducerFn) {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const INIT_STATE = {
    auth: initialAuthState,
    requisitions: GENERIC_INIT_STATE,
    singleRequisition: GENERIC_INIT_STATE,
  };

  return createStore(reducerFn, INIT_STATE, composedEnhancers);
}

export default () => {
  const encryptor = createEncryptor({
    secretKey: process.env.REACT_APP_SECRET_KEY,
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.log(`PERSIST_ENCRYPTOR_ERR: ${error}`);
    },
  });

  const persistConfig = {
    key: 'llc-erp',
    storage,
    transforms: [encryptor],
    whitelist: ['auth'],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = configureStore(persistedReducer);
  const persistor = persistStore(store);

  return { store, persistor };
};
