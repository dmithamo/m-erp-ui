import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../Dashboard';

test('renders without crashing', () => {
  shallow(<Dashboard />);
});
