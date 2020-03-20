import React from 'react';
import styled from 'styled-components';
import wip from '../common/assets/wip.svg';

export default function WIPTemp() {
  return (
    <WIPContainer>
      <p> Working on it ...</p>
      <img src={wip} alt="working on it" />
    </WIPContainer>
  );
}

const WIPContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    height: auto;
  }
`;
