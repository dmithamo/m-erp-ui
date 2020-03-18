import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SECURED_RESOURCES } from '../../constants/resources';
import User from '../container/AuthenticatedUser';
import { useAuthContext } from '../../context/auth';

export default function Sidebar() {
  const { authState } = useAuthContext();
  const { user } = authState;
  return (
    <StyledSidebar>
      <div id="user">
        <User user={user} />
      </div>

      <div id="upper">
        <SidebarItem route={SECURED_RESOURCES.dashboard} />
        <SidebarItem route={SECURED_RESOURCES.requisitions} />
        <SidebarItem route={SECURED_RESOURCES.receipts} />
        <SidebarItem route={SECURED_RESOURCES.invoices} />
        <SidebarItem route={SECURED_RESOURCES.budget} />
      </div>

      <div id="lower">
        <SidebarItem route={SECURED_RESOURCES.help} />
        <SidebarItem route={SECURED_RESOURCES.about} />
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
    color: black;
  }

  div#user {
    height: 10em;
    border-radius: 50%;
    margin: auto;
    margin-bottom: 25px;
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
function SidebarItem({ route: { path, name, icon } }) {
  return (
    <StyledLink activeClassName="isActive" to={path}>
      <FontAwesomeIcon icon={icon} />
      <span>{name}</span>
    </StyledLink>
  );
}

SidebarItem.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
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
  color: #000;
  opacity: 0.7;
  margin-bottom: 2em;
  font-weight: bold;

  svg {
    font-size: 1.3em;
  }

  &.isActive {
    opacity: 1;
    background-color: #fff;
  }

  :hover {
    opacity: 1;
    background-color: #fff;
  }

  @media screen and (max-width: 1575px) {
    display: flex;
    justify-content: space-around;

    span {
      display: none;
    }
  }
`;
