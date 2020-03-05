import React from 'react';
import { shallow } from 'enzyme';
import { LogoNormal, LogoSmall } from '../Logo';

test('renders without crashing', () => {
  shallow(<LogoNormal />);
  shallow(<LogoSmall />);
});
