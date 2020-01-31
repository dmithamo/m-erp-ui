import React from 'react';
import { ErrorOutlineOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import generateErrorMessage from '../../constants/messages';

/**
 * @description Render an inline error
 */
export function InlineError({ error, category }) {
  return (
    <InlineErrorContainer>
      <ErrorOutlineOutlined />
      {generateErrorMessage(category, error.message)}
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

InlineError.propTypes = {
  category: PropTypes.string.isRequired,
  error: PropTypes.any.isRequired,
};

export function ErrorAlert() {}
