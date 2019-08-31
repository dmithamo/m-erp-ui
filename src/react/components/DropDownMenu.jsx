import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { logoutUser } from '../../redux/actions/authActions';

const DropDownMenu = () => {
  const onSignOut = () => {
    logoutUser();
  };
  return (
    <Container>
      <Button>Profile</Button>
      <Button onClick={onSignOut}>Sign out</Button>
    </Container>
  );
};

const Container = styled.p`
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  width: 20%;
  font-weight: bold;
  position: absolute;
  background-color: white;
  right: 30px;
  top: 30px;
  z-index: 1000;
  box-shadow: 1px 1px 1px 2px #00000040;
`;

const Button = styled.button`
  padding: 0.8em;
  font: inherit;
  font-size: 12px;
  outline: none;
  border: none;
  height: 50px;
  width: 100%;
  padding: 0 0.2em;
  margin: auto;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: #d3d3d390;
    color: black;
  }
`;

// Reduxing!
const mapStateToProps = state => ({
  authenticatedUser: state.authenticatedUser,
});

export default connect(mapStateToProps)(DropDownMenu);
