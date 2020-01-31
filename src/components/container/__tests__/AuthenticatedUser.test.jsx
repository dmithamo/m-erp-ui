import React from 'react';
import { mount } from 'enzyme';
import AuthenticatedUser, { DropDownButton } from '../AuthenticatedUser';

test('dropdown btn responds to onClick events', () => {
  const props = { isOpen: true, onClick: jest.fn() };

  const wrapper = mount(<DropDownButton {...props} />);
  wrapper
    .find('p')
    .first()
    .simulate('click');

  expect(props.onClick).toHaveBeenCalledTimes(1);
});

test('renders user name and role passed in props', () => {
  const props = {
    user: {
      firstname: 'ada',
      lastname: 'lovelace',
      role: 'programmer0',
    },
  };

  const wrapper = mount(<AuthenticatedUser {...props} />);
  expect(
    wrapper
      .find('span#name')
      .first()
      .text(),
  ).toEqual('a. lovelace');

  expect(
    wrapper
      .find('span#role')
      .first()
      .text(),
  ).toEqual(props.user.role);
});

test('dropdown btn calls onClick fn', () => {
  const props = {
    user: {
      firstname: 'ada',
      lastname: 'lovelace',
      role: 'programmer0',
    },
  };

  const wrapper = mount(<AuthenticatedUser {...props} />);
  wrapper
    .find('#dropdown-toggle')
    .first()
    .simulate('click');

  // Yes, I know. This test is incomplete.
  // To amend later
});
