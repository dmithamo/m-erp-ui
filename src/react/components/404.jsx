import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FourOhFour = ({ location }) => (
  <NotFoundDiv>
    <p>
      [WIP]Nothing found at&nbsp;
      <code>{location.pathname}</code>
    </p>
    <Link to="/">Go Home</Link>
  </NotFoundDiv>
);

const NotFoundDiv = styled.div`
  font-size: 2rem;
  code {
    color: #0000009a;
  }
`;

export default FourOhFour;
