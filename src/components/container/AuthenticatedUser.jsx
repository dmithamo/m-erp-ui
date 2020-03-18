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

  return (
    <UserContainer
      onKeyUp={(e) => toggleMenuOnKeyPress(e)}
      onClick={toggleShowMenu}
    >
      <Avatar>
        <img src={avatar || defaultAvatar} alt="profile" />
      </Avatar>

      <NameContainer>
        <span id="name">{`${firstname} ${lastname}`}</span>
      </NameContainer>

      {showMenu && (
        <DropDownMenu
          user={{ firstname, lastname, role }}
          onClose={toggleShowMenu}
        />
      )}
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

const Avatar = styled.span`
  display: inline-block;
  position: relative;
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  img {
    margin: auto;
    width: 98%;
    height: 98%;
    border-radius: 50%;
  }

  @media screen and (max-width: 1575px) {
    width: 40px;
    height: 40px;
  }
`;

const DropDownButtonContainer = styled.p`
  margin: 0;
  text-align: right;
  cursor: pointer;
  padding-right: 0.5em;
`;

const NameContainer = styled.p`
  font-weight: bold;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  font-size: 0.8em;
  span {
    padding: 0.5em;
  }
  span#name {
    font: inherit;
  }
  span#role {
    padding: 0;
    margin: 0;
    opacity: 0.5;
  }
  span {
    text-transform: capitalize;
  }
`;

const UserContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
`;

export default AuthenticatedUser;
