import React from 'react';
import styled from 'styled-components';

const Input = ({ type, icon, placeholder }) => (
  <StyledInputContainer>
    <p>{icon}</p>
    <StyledInput placeholder={placeholder} type={type} />
  </StyledInputContainer>
);

const StyledInput = styled.input`
  box-sizing: border-box;
  border: none;
  outline: none;
  border-left: 1px solid rgba(239, 239, 239, 0.58);
  background-color: rgba(239, 239, 239, 0.58);
  width: 100%;
  padding: 0 0.5rem;
  font-family: 'Fira Mono', monospace;
  font-size: 12px;
  ::placeholder {
    font-family: inherit;
    color: rgba(0, 0, 0, 0.68);
  }
  :focus {
    background-color: white;
  }
`;

const StyledInputContainer = styled.div`
  border-radius: 3px;
  border: 1px solid rgba(220, 220, 220, 0.9);
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 6fr;
  margin-bottom: 0.5rem;
  p {
    background-color: white;
    border-radius: 3px;
  }
  :focus-within {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.38);
    border: none;
  }
`;

export default Input;
