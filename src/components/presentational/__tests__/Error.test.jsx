import React from 'react';
import { mount } from 'enzyme';
import { InlineError } from '../Error';

test('renders an error component with error msg passed in props', () => {
  const props = {
    error: { message: 'INVALID_CREDENTIALS' },
    category: 'auth',
  };
  const wrapper = mount(<InlineError {...props} />);

  expect(
    wrapper
      .find('span')
      .first()
      .text(),
  ).toEqual('Wrong email or password');
});
