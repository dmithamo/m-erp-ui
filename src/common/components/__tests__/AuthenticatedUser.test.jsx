import React from 'react';
import { mount } from 'enzyme';
import { DropDownButton } from '../../../features/sidebar/AuthenticatedUser';

test('dropdown btn responds to onClick events', () => {
  const props = { isOpen: true, onClick: jest.fn() };

  const wrapper = mount(<DropDownButton {...props} />);
  wrapper
    .find('p')
    .first()
    .simulate('click');

  expect(props.onClick).toHaveBeenCalledTimes(1);
});
