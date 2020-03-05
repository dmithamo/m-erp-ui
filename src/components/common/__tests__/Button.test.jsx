import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

test('responds to an onClick event as expected', () => {
  const props = {
    type: 'submit',
    isDisabled: false,
    onClick: jest.fn(),
  };

  const { queryByText, getByText } = render(<Button {...props}>Login</Button>);
  expect(queryByText('Login')).toBeInTheDocument();

  fireEvent.click(getByText(/login/i));
  expect(props.onClick).toHaveBeenCalledTimes(1);
});
