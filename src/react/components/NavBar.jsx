import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mhcLogo from '../assets/mhc-logo-nav.png';

const NavBar = () => (
  <StyledNavBar>
    <StyledLink to="/">
      <Logo src={mhcLogo} alt="mamlaka-hill-chapel-logo" />
    </StyledLink>
    <div>
      <StyledLink to="/signin">Sign in</StyledLink>
      <StyledLink isCTA to="/signup">
        Sign up
      </StyledLink>
    </div>
  </StyledNavBar>
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
    width: 17%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
export default NavBar;
