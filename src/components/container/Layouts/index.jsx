import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navbar from '../NavBar';

export function dashboardLayout({ children }) {
  return (
    <DashboardContainer>
      <div id="nav-bar">
        <Navbar />
      </div>

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
  display: flex;
  flex-direction: column;

  div#nav-bar {
    margin: 0;
  }

  div#children {
    margin: 0;
    flex-grow: 1;
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
