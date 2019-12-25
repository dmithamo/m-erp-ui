import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navbar from '../NavBar';

export function dashboardLayout({ children }) {
  return (
    <DashboardContainer>
      <Navbar />
      {children}
    </DashboardContainer>
  );
}

export function fullPageLayout({ children }) {
  return <FullPageContainer>{children}</FullPageContainer>;
}

dashboardLayout.propTypes = { children: PropTypes.any.isRequired };
fullPageLayout.propTypes = { children: PropTypes.any.isRequired };

const DashboardContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 9fr;
  margin: 0;
  padding: 0;
  height: 100vh;
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
