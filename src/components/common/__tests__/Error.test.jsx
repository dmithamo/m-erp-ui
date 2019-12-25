import React from 'react';
import { mount } from 'enzyme';
import { InlineError } from '../Error';

test('renders an error component with error msg passed in props', () => {
  const props = { error: { message: 'Wrong password or something' } };
  const wrapper = mount(<InlineError {...props} />);

  expect(
    wrapper
      .find('span')
      .first()
      .text(),
  ).toEqual(props.error.message);
});
