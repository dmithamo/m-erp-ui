import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../../features/sidebar';
import { colors } from '../../styles';

/**
 * @description Layout for all dashboard views
 * @param {object} param0 props
 * @return {JSX}
 */
export function DashboardLayout({ children }) {
  return (
    <DashboardContainer>
      <Sidebar />
      <div id="children">{children}</div>
    </DashboardContainer>
  );
}

/**
 * @description Layout for all front(auth) view
 * @param {object} param0 props
 * @return {JSX}
 */
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
    width: 100%;
    padding: 0.5em 1.5em;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
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
