import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useRouteMatch } from 'react-router-dom';
import { colors } from '../common/styles';

const FourOhFour = () => (
  <NotFoundDiv>
    <h4>WIP</h4>
    <span>Nothing found at&nbsp;===&gt;</span>

    <code>{useRouteMatch().url}</code>

    <br />

    <Link to="/">
      <FontAwesomeIcon icon="home" />
    </Link>
  </NotFoundDiv>
);

const NotFoundDiv = styled.div`
  code {
    color: ${colors.grey};
  }

  a {
    color: ${colors.black};

    :hover {
      color: ${colors.darkGreen};
    }
  }
`;

export default FourOhFour;
