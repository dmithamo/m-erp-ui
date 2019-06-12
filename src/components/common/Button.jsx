import React from 'react';
import styled from 'styled-components';

const Button = ({ buttonParams }) => (
  <StyledButton onClick={buttonParams.buttonOnClick}>
    {buttonParams.buttonText}
  </StyledButton>
);

const StyledButton = styled.button`
  background-color: rgb(0, 193, 0);
  width: 50%;
  outline: none;
  border: none;
  border-radius: 3px;
  color: white;
  font-family: 'Fira Mono', monospace;
  font-size: 14px;
  height: 40px;
  margin: 2rem 0;
  cursor: pointer;
  :hover {
    background-color: rgb(0, 185, 0);
    box-shadow: 0 0 1px 1px rgba(0, 185, 0, 0.1);
  }
`;

export default Button;
