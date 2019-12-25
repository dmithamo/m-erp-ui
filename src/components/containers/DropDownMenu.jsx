import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  CloseOutlined,
  ExitToAppOutlined,
  AccountCircleOutlined,
} from '@material-ui/icons';
import { useAuthContext } from '../../context/auth';

const DropDownMenu = (props) => {
  const auth = useAuthContext();
  const onSignOut = () => {
    auth.onLogout();
  };

  const { onClose } = props;
  return (
    <Container>
      <Button>
        <AccountCircleOutlined fontSize="inherit" />
        <span>Profile</span>
      </Button>

      <Button onClick={onSignOut}>
        <ExitToAppOutlined fontSize="inherit" />
        <span>Sign out</span>
      </Button>

      <Button onClick={onClose}>
        <CloseOutlined fontSize="inherit" />
      </Button>
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
  height: 15vh;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const Button = styled.button`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  font: inherit;
  outline: none;
  border: none;
  width: 200px;
  font-weight: normal;
  padding: 0.8em;
  margin: auto;
  cursor: pointer;
  background: none;
  :hover {
    background-color: #e3e3e3;
    color: black;
    border: 1px solid #00000010;
  }
`;

DropDownMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default DropDownMenu;
