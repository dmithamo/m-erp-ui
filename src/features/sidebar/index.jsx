import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import RESOURCES from '../../common/constants/resources';
import { colors } from '../../common/styles';
import { logoutUser } from '../auth/storeLogic/actions';
import User from './AuthenticatedUser';

/**
 * @description Sidebar component
 *@return {JSX}
 */
export default function Sidebar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <StyledSidebar>
      <div id="user">
        <User user={user} onLogout={() => dispatch(logoutUser())} />
      </div>

      <div id="upper">
        <SidebarItem route={RESOURCES.dashboard} />
        <SidebarItem route={RESOURCES.requisitions} />
        <SidebarItem route={RESOURCES.receipts} />
        <SidebarItem route={RESOURCES.invoices} />
        <SidebarItem route={RESOURCES.budget} />
        <SidebarItem route={RESOURCES.notifications} />
      </div>

      <div id="lower">
        <SidebarItem route={RESOURCES.help} />
        <SidebarItem route={RESOURCES.about} />
      </div>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.nav`
  background: #a8ff78;
  background: -webkit-linear-gradient(to right, #78ffd6, #a8ff78);
  background: linear-gradient(to right, #78ffd6, #a8ff78);

  display: grid;
  grid-template-rows: 1fr 2fr 1fr;

  div {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: ${colors.black};
  }

  div#user {
    height: 10em;
    border-radius: 50%;
    margin: auto;
    align-items: center;
    justify-content: center;
  }

  div#upper {
    justify-content: center;
    margin-bottom: 25px;
  }

  div#lower {
    border-top: 3px solid #ffffff60;
    justify-content: center;
  }
`;

/**
 * @description A sidebar item
 * @param {object} param0 props
 * @return {JSX}
 */
export function SidebarItem({ route: { path, resourceName, icon } }) {
  return (
    <StyledLink activeClassName="isActive" to={path}>
      <FontAwesomeIcon icon={icon} />
      <span>{resourceName}</span>
    </StyledLink>
  );
}

SidebarItem.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string,
    resourceName: PropTypes.string,
    icon: PropTypes.any,
  }).isRequired,
};

const StyledLink = styled(NavLink)`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-gap: 10px;
  align-items: center;
  padding: 0.8em;
  text-decoration: none;
  text-transform: capitalize;
  color: ${colors.black};
  opacity: 0.7;
  margin-bottom: 2em;
  font-weight: bold;

  svg {
    font-size: 1.3em;
  }

  &.isActive {
    opacity: 1;
    background-color: ${colors.white};
  }

  :hover {
    opacity: 1;
    background-color: ${colors.white};
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-around;

    span {
      display: none;
    }
  }
`;
