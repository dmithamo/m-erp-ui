import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import Input from '../Input';

test('renders an input which accepts input', () => {
  const props = {
    type: 'email',
    name: 'email',
    value: '',
    required: true,
  };

  const { getByLabelText } = render(<Input {...props} />);
  expect(getByLabelText(/email/i)).toBeInTheDocument();
});

test('password visibility toggle works as expected', () => {
  const props = {
    type: 'password',
    name: 'password',
    value: 'Pass',
    required: true,
  };

  const wrapper = mount(<Input {...props} />);
  let input = wrapper.find('input').first();
  expect(input.props().type).toEqual(props.type);

  wrapper
    .find('#password-visibility-toggle')
    .first()
    .simulate('click');

  // Re-find input and get `type`
  input = wrapper.find('input').first();
  expect(input.props().type).toEqual('text');
});
