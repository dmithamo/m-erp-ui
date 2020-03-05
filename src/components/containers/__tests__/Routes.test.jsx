import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../Routes';
import { AuthContextProvider } from '../../../context/authContext';

test('renders without crashing', () => {
  shallow(
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>,
  );
});
