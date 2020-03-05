import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import defaultAvatar from '../../assets/default-avatar.png';
import DropDownMenu from './DropDownMenu';

const AuthenticatedUser = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  /**
   * @description Toggle dropdown menu in response to click on ESC key
   */
  document.addEventListener('keyup', (e) => {
    toggleMenuOnKeyPress(e);
  });
  const toggleMenuOnKeyPress = (e) => {
    if (e.keyCode === 27 || e.which === 27) {
      setShowMenu(false);
    }
  };

  const { user } = props;
  const { firstname, lastname, avatar, role } = user;

  const trimmedFirstname = firstname.charAt(0);
  return (
    <UserContainer
      onKeyUp={(e) => toggleMenuOnKeyPress(e)}
      onClick={toggleShowMenu}
    >
      <Avatar src={avatar || defaultAvatar} alt="profile picture" />

      <NameContainer>
        <span id="name">{`${trimmedFirstname}. ${lastname}`}</span>
        <span id="role">{role}</span>
      </NameContainer>

      <DropDownButton
        id="dropdown-toggle"
        isOpen={showMenu}
        onClick={toggleShowMenu}
      />
      {showMenu && <DropDownMenu onClose={toggleShowMenu} />}
    </UserContainer>
  );
};

export const DropDownButton = (props) => {
  const { onClick } = props;
  return (
    <DropDownButtonContainer onClick={onClick}>
      <FontAwesomeIcon icon="caret-down" />
    </DropDownButtonContainer>
  );
};

AuthenticatedUser.propTypes = { user: PropTypes.any.isRequired };

DropDownButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Avatar = styled.img`
  width: auto;
  height: 50px;
  border-radius: 50%;
`;

const NameContainer = styled.p`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  span#name {
    color: white;
    font: inherit;
  }
  span#role {
    padding: 0;
    margin: 0;
    color: #e3e3e380;
  }
  span {
    text-transform: capitalize;
  }
`;

const DropDownButtonContainer = styled.p`
  margin: 0;
  text-align: right;
  cursor: pointer;
  padding-right: 0.5em;
`;

const UserContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  width: 200px;
`;

export default AuthenticatedUser;
