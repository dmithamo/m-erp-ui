import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import initStore from './app/store';

const { store, persistor } = initStore();

/**
 * @description Abstract the ReactDOM.render fn for reuse
 * @param {JSX} Component
 */
function renderApp(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={<h2>Loading...</h2>} persistor={persistor}>
        <Component />
      </PersistGate>
    </Provider>,
    document.getElementById('root'),
  );
}

// HMR
if (module.hot) {
  module.hot.accept('./app/App', () => {
    renderApp(App);
  });
}

// INIT
renderApp(App);
serviceWorker.unregister();
