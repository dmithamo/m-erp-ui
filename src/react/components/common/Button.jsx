import React from 'react';
import styled from 'styled-components';

export const PrimaryBtn = ({ errors, primaryBtnText, primaryBtnOnClick }) => (
  <StyledBtn disabled={errors.length > 0} onClick={primaryBtnOnClick}>
    {primaryBtnText}
  </StyledBtn>
);

export const SecondaryBtn = ({ secondaryBtnText, secondaryBtnOnClick }) => (
  <StyledSecondaryBtn onClick={secondaryBtnOnClick}>
    {secondaryBtnText}
  </StyledSecondaryBtn>
);

const StyledBtn = styled.button`
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
  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  cursor: pointer;
  :hover {
    background-color: rgb(0, 185, 0);
    box-shadow: 0 0 1px 1px rgba(0, 185, 0, 0.1);
  }
`;

const StyledSecondaryBtn = styled.button`
  transform: scaleX(-1);
  color: rgba(0, 0, 0, 0.25);
  background-color: none;
  outline: none;
  border: none;
  cursor: pointer;
  width: 20%;
  margin-left: 80%;
  margin-top: 0.8rem;
  :hover {
    color: red;
  }
`;
