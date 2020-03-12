import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function CopyrightWarning() {
  return (
    <CopyrightWarningContainer>
      <span>--NOTICE--</span>
      <span>
        <FontAwesomeIcon icon={['far', 'copyright']} />
        &nbsp;
      </span>
      <p id="warning">
        This software is licensed only to --MHC--
        <br />
        It is illegal to use it except by explicit permission of --MHC--
      </p>
    </CopyrightWarningContainer>
  );
}

export function Copyright() {
  // To make if needed
}

const CopyrightWarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #00000080;

  span:first-of-type {
  }

  p#warning {
    font-size: 0.7em;
  }
`;
