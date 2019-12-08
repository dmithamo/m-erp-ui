import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Loader from '../Loader';

test('renders without crashing', () => {
  const { getByAltText } = render(<Loader />);

  expect(getByAltText(/loading icon/i)).toBeInTheDocument();
  shallow(<Loader />); // Bonus test :)
});
