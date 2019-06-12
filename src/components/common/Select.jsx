import React from 'react';
import styled from 'styled-components';

const Select = ({ options, icon, id }) => (
  <StyledSelectContainer>
    <p>{icon}</p>
    <StyledSelect id={id}>
      {options.map(option => (
        <option value={option.value}>{option.name}</option>
      ))}
    </StyledSelect>
  </StyledSelectContainer>
);

const StyledSelect = styled.select`
  box-sizing: border-box;
  border: none;
  outline: none;
  border-left: 1px solid rgba(239, 239, 239, 0.58);
  background-color: rgba(239, 239, 239, 0.58);
  width: 100%;
  padding: 0 0.5rem;
  font-family: 'Fira Mono', monospace;
  font-size: 12px;
  :focus {
    background-color: white;
  }

  /* Style borrowed from the internet */
  -webkit-appearance: button;
  -webkit-user-select: none;
  background-image: url(http://i62.tinypic.com/15xvbd5.png);
  background-position: 97% center;
  background-repeat: no-repeat;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledSelectContainer = styled.div`
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

export default Select;
