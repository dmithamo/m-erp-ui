import React from 'react';
import { ErrorOutlineOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * @description Render an inline error
 */
export function InlineError({ error }) {
  return (
    <InlineErrorContainer>
      <ErrorOutlineOutlined />
      {error.message}
    </InlineErrorContainer>
  );
}

const InlineErrorContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: red;
`;

InlineError.propTypes = { error: PropTypes.any.isRequired };

export function ErrorAlert() {}
