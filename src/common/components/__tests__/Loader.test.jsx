import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Loader from '../Loader';

test('renders without crashing', () => {
  const { getByText } = render(<Loader />);

  expect(getByText(/loading/i)).toBeInTheDocument();
  shallow(<Loader />); // Bonus test :)
});
