import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from '../../../context/auth';
import NavBar from '../NavBar';

test('renders the organization logo in the navbar', () => {
  const { getByAltText } = render(
    <AuthContextProvider>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </AuthContextProvider>,
  );

  expect(getByAltText(/logo/i)).toBeInTheDocument();
});

test('renders AuthenticatedUser component when a user is authenticated', () => {
  const authState = {
    user: {
      firstname: 'ada',
      lastname: 'lovelace',
    },
  };

  const { getByText } = render(
    <AuthContextProvider value={{ authState }}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </AuthContextProvider>,
  );

  expect(getByText(/a. lovelace/i)).toBeInTheDocument();
});

test('does not render AuthenticatedUser component when no user is authenticated', () => {
  const { queryByText } = render(
    <AuthContextProvider>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </AuthContextProvider>,
  );

  expect(queryByText(/a. lovelace/i)).toBeNull();
});
