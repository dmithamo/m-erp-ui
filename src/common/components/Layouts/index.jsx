import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sidebar from '../../../features/sidebar';
import { colors } from '../../styles';

export function DashboardLayout({ children }) {
  return (
    <DashboardContainer>
      <Sidebar />
      <div id="children">{children}</div>
    </DashboardContainer>
  );
}

export function FrontLayout({ children }) {
  return <FrontContainer>{children}</FrontContainer>;
}

DashboardLayout.propTypes = { children: PropTypes.any.isRequired };
FrontLayout.propTypes = { children: PropTypes.any.isRequired };

const DashboardContainer = styled.div`
  margin: 0;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 7fr;

  div#children {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    background-color: ${colors.greyBackground};
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 60px 1fr;
  }
`;

const FrontContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
`;
