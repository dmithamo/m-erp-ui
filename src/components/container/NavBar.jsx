import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/logo-nav.png';
import AuthenticatedUser from './AuthenticatedUser';
import { useAuthContext } from '../../context/auth';

export default function NavBar() {
  const { authState } = useAuthContext();
  const { user } = authState;
  return (
    <StyledNavBar>
      <NavItem route={{ path: '/', name: '' }}>
        <Logo src={logo} alt="logo" />
      </NavItem>

      {user && <AuthenticatedUser user={user} />}
    </StyledNavBar>
  );
}

function NavItem({ route, children }) {
  return (
    <StyledLink activeClassName="isActive" to={route.path}>
      {route.name || children}
    </StyledLink>
  );
}

NavItem.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,

  children: PropTypes.any,
};

NavItem.defaultProps = { children: null };

const Logo = styled.img`
  width: 90px;
  height: auto;
  padding: 0.2rem;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  text-align: center;
  font-size: 12px;
  :hover {
    font-weight: bold;
  }
`;

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 1.5em 0;
  align-items: center;
  color: white;
  height: 6vh;
  box-sizing: border-box;
  div {
    padding: 0.5em;
    width: 17%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
  }
`;
