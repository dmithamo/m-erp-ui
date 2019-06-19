/**
 * Hook up MHC React App to the DOM
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './redux/store';

// Main Component (Routes)
import Routes from './react/components/_Routes';

const rootEl = document.getElementById('app');

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    rootEl,
  );
};

render(Routes);

if (module.hot) {
  module.hot.accept(Routes, () => {
    const NextRoot = require('./react/components/_Routes').default;
    return render(NextRoot);
  });
}
