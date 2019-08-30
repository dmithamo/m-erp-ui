import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import store from '../../redux/store';
import mhcLogo from '../assets/mhc-logo-nav.png';
import AuthenticatedUser from './AuthenticatedUser';

const NavBar = () => {
  // Extract authenticatedUser from store if any exists
  const { authenticatedUser } = store.getState();

  return (
    <StyledNavBar>
      <StyledLink to="/">
        <Logo src={mhcLogo} alt="mamlaka-hill-chapel-logo" />
      </StyledLink>
      {authenticatedUser.hasOwnProperty('firstname') ? (
        <AuthenticatedUser user={authenticatedUser} />
      ) : (
        <AuthButtons />
      )}
    </StyledNavBar>
  );
};

const AuthButtons = () => (
  <div>
    <StyledLink to="/signin">Sign in</StyledLink>
    <StyledLink isCTA to="/signup">
      Sign up
    </StyledLink>
  </div>
);

const Logo = styled.img`
  width: 90px;
  height: auto;
  padding: 0.2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-align: center;
  font-size: 12px;
  background-color: ${props => (props.isCTA ? 'green' : 'black')};
  padding: ${props => props.isCTA && '0.6rem'};
  width: ${props => props.isCTA && '35%'};
  border-radius: ${props => props.isCTA && '0.3rem'};
  :hover,
  :focus,
  :active {
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
  height: 60px;
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

// Reduxing!
const mapStateToProps = state => ({
  authenticatedUser: state.authenticatedUser,
});

export default connect(mapStateToProps)(NavBar);
