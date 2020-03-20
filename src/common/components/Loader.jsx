import React from 'react';
import styled from 'styled-components';
import LoadingIcon from '../assets/logo-nav.png';

export default function Loader() {
  return (
    <LoaderContainer>
      <img src={LoadingIcon} alt="loading icon" />
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  img {
    @keyframes loader-scale {
      from {
        transform: scale(0.5);
      }
      to {
        transform: scale(0.8);
      }
    }

    animation: loader-scale infinite 2s linear;
  }
`;
