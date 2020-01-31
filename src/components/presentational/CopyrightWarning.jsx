import React from 'react';
import styled from 'styled-components';
import { CopyrightOutlined } from '@material-ui/icons';

export function CopyrightWarning() {
  return (
    <CopyrightWarningContainer>
      <span>--NOTICE--</span>
      <span>
        <CopyrightOutlined fontSize="inherit" />
        &nbsp;
      </span>
      <p id="warning">
        This software is licensed only to --LICENSEE--
        <br />
        It is illegal to use it except by explicit permission of --LICENSEE--
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
