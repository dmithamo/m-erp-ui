import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  background-color: rgb(0, 193, 0);
  width: 100%;
  outline: none;
  border: none;
  border-radius: 3px;
  color: white;
  font-family: inherit;
  font-size: 14px;
  height: 42px;
  margin: 1rem 0;
  padding: 0.75em;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.7);
  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  cursor: pointer;
  :hover {
    background-color: rgb(0, 185, 0);
  }
`;
