/* eslint-disable react/jsx-filename-extension */
/**
 * Hook up MHC React App to the DOM
 */
import React from 'react';
import ReactDOM from 'react-dom';

// Main Component (Routes)
import Routes from './components/_Routes';

ReactDOM.render(<Routes />, document.getElementById('app'));
