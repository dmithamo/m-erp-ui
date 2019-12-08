import React from 'react';
import { Provider } from 'react-redux';
import ContextWrappedRouter from './config/ContextWrappedRouter';
import store from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <ContextWrappedRouter />
    </Provider>
  );
}

export default App;
