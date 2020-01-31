import React from 'react';
import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';
import { HomeOutlined } from '@material-ui/icons';

const FourOhFour = () => (
  <NotFoundDiv>
    <h4>WIP</h4>
    <span>Nothing found at&nbsp;===&gt;</span>

    <code>{useRouteMatch().url}</code>

    <br />

    <Link to="/">
      <HomeOutlined />
    </Link>
  </NotFoundDiv>
);

const NotFoundDiv = styled.div`
  code {
    color: #0000009a;
  }
`;

export default FourOhFour;
