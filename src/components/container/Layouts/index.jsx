import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sidebar from '../../presentational/Sidebar';

export function dashboardLayout({ children }) {
  return (
    <DashboardContainer>
      <Sidebar />
      <div id="children">{children}</div>
    </DashboardContainer>
  );
}

export function fullPageLayout({ children }) {
  return <FullPageContainer>{children}</FullPageContainer>;
}

dashboardLayout.propTypes = { children: PropTypes.any.isRequired };
fullPageLayout.propTypes = { children: PropTypes.any.isRequired };

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
    background-color: #ffffff80;
  }

  @media screen and (max-width: 1575px) {
    grid-template-columns: 60px 1fr;
  }
`;

const FullPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
`;
