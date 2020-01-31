import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { CopyrightWarning } from '../CopyrightWarning';

test('renders the copyright warning', async () => {
  const { getByText } = render(<CopyrightWarning />);
  await waitForElement(() => getByText(/This software is licensed/i));
});
