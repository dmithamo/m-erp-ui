import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import generateErrorMessage from '../constants/messages';
import { colors } from '../styles';

/**
 * @description Render an inline error
 */
export function InlineError({ error, category }) {
  return (
    <InlineErrorContainer>
      <FontAwesomeIcon icon="exclamation-circle" />
      {generateErrorMessage(category, error.message)}
    </InlineErrorContainer>
  );
}

const InlineErrorContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: ${colors.red};
`;

InlineError.propTypes = {
  category: PropTypes.string.isRequired,
  error: PropTypes.any.isRequired,
};

export function ErrorAlert() {}
