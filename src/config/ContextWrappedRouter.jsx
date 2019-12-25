import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../components/containers/Routes';
import { AuthContextProvider } from '../context/auth';

/**
 * @description Wrap the router with context providers
 * to avail those contexts to all of router's children
 */
export default function ContextWrappedRouter() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthContextProvider>
  );
}
