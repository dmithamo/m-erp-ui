import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../styles';

export default function Button({ type, isDisabled, children, onClick }) {
  return (
    <StyledBtn type={type} disabled={isDisabled} onClick={onClick}>
      {children}
    </StyledBtn>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 3px;
  color: ${colors.black};
  font: inherit;
  font-weight: bold;
  height: 55px;
  margin: 1rem 0;
  padding: 0.75em;

  cursor: pointer;

  background: #a8ff78;
  background: -webkit-linear-gradient(to right, #78ffd6, #a8ff78);
  background: linear-gradient(to right, #78ffd6, #a8ff78);

  :hover {
    background: #a8ff78;
  }
  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
    background: #e3e3e3;
    border: 1px solid #00000040;
    box-shadow: none;
  }
`;

export const ButtonWithIcon = ({ icon, onClick }) => (
  <ButtonWithIConWrapper type="button" onClick={onClick}>
    <FontAwesomeIcon icon={icon} />
  </ButtonWithIConWrapper>
);

ButtonWithIcon.propTypes = {
  icon: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

const ButtonWithIConWrapper = styled.button`
  background: none;
  outline: none !important;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: ${colors.grey};

  :hover {
    color: ${colors.black};
  }
`;
