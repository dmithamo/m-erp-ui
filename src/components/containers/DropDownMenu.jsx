import React from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../../context/authContext';

const DropDownMenu = () => {
  const auth = useAuthContext();
  const onSignOut = () => {
    auth.onLogout();
  };
  return (
    <Container>
      <Button>Profile</Button>
      <Button onClick={onSignOut}>Sign out</Button>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  right: 30px;
  top: 35px;
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  width: 25%;
  height: 15vh;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1000;
`;

const Button = styled.button`
  font: inherit;
  outline: none;
  border: none;
  width: 100%;
  font-weight: normal;
  padding: 0.8em;
  margin: auto;
  text-align: center;
  cursor: pointer;
  background: none;
  :hover {
    background-color: #e3e3e3;
    color: black;
    border: 1px solid #00000010;
  }
`;

export default DropDownMenu;
