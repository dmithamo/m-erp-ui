import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <FontAwesomeIcon icon="id-card-alt" />
        <span>Profile</span>
      </Button>

      <Button onClick={onSignOut}>
        <FontAwesomeIcon icon="sign-out-alt" />
        <span>Sign out</span>
      </Button>

      <Button onClick={onClose}>
        <FontAwesomeIcon icon="times-circle" />
        <span>Close</span>
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
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  height: 20vh;
  width: 200px;
`;

const Button = styled.button`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  font: inherit;
  outline: none;
  border: none;
  width: 170px;
  font-weight: normal;
  padding: 0.8em;
  margin: auto;
  cursor: pointer;
  background: none;
  box-sizing: border-box;

  :hover {
    border-radius: 3px;
    background-color: #e3e3e3;
    border-left: 3px solid #bfff00;
  }

  span {
    margin-left: 1.2em;
  }
`;

DropDownMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default DropDownMenu;
