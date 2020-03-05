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
  height: 50px;
  width: auto;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  text-align: center;
  font-size: 1em;
  :hover {
    font-weight: bold;
  }
`;

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 0.2em;
  box-sizing: border-box;
`;
