import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function CopyrightWarning() {
  return (
    <CopyrightWarningContainer>
      <span>--NOTICE--</span>
      <p id="warning">
        This software is licensed only to --LLC--
        <br />
        It is illegal to use it except by explicit permission of --LLC--
      </p>
      <span>
        <FontAwesomeIcon icon={['far', 'copyright']} />
        &nbsp;LLC 2020
      </span>
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
  color: #000000;

  span {
    padding: 2em;
  }

  p#warning {
    margin: 0;
    font-size: 0.7em;
    text-align: center;
  }
`;
