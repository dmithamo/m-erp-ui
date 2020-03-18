import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import initStore from './store';

const store = initStore();

/**
 * @description Abstract the ReactDOM.render fn for reuse
 * @param {JSX} Component
 */
function renderApp(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  );
}

// HMR
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(App);
  });
}

// INIT
renderApp(App);
serviceWorker.unregister();
