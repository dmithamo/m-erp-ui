import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../Routes';
import { AuthContextProvider } from '../../../context/auth';

test('renders without crashing', () => {
  shallow(
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>,
  );
});
