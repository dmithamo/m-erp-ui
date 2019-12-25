import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import FourOhFour from '../404';

test('renders without crashing', () => {
  shallow(
    <BrowserRouter>
      <FourOhFour />
    </BrowserRouter>,
  );

  const { getByText } = render(
    <BrowserRouter>
      <FourOhFour />
    </BrowserRouter>,
  );

  expect(getByText(/Nothing found at/i)).toBeInTheDocument();
});
