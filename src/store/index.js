import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';

export default function initStore() {
  const middleware = [thunk];
  const store = createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  // Hot reload reducers. For dev purposes
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(reducer);
      });
    }
  }

  return store;
}
