import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowDropDown, CloseOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import defaultAvatar from '../../assets/default-avatar.png';
import DropDownMenu from './DropDownMenu';

const AuthenticatedUser = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const { user } = props;
  const { firstname, lastname, avatar, role } = user;

  const trimmedFirstname = firstname.charAt(0);
  return (
    <UserContainer>
      <AvatarContainer src={avatar || defaultAvatar} alt="profile-picture" />

      <NameContainer>
        <span id="name">{`${trimmedFirstname}. ${lastname}`}</span>
        <span id="role">{role}</span>
      </NameContainer>

      <DropDownButton
        id="dropdown-toggle"
        isOpen={showMenu}
        onClick={toggleShowMenu}
      />
      {showMenu && <DropDownMenu />}
    </UserContainer>
  );
};

export const DropDownButton = (props) => {
  const { isOpen, onClick } = props;
  return (
    <DropDownButtonContainer onClick={onClick}>
      {isOpen ? <CloseOutlined /> : <ArrowDropDown />}
    </DropDownButtonContainer>
  );
};

AuthenticatedUser.propTypes = { user: PropTypes.any.isRequired };

DropDownButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const AvatarContainer = styled.img`
  width: auto;
  height: 50px;
  border-radius: 50%;
`;

const NameContainer = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  span#name {
    color: white;
    font: inherit;
    font-weight: bold;
    font-size: 12px;
  }
  span#role {
    padding: 0;
    margin: 0;
    color: #e3e3e350;
    font-weight: normal;
  }
  span {
    text-transform: capitalize;
  }
`;

const DropDownButtonContainer = styled.p`
  text-align: right;
  cursor: pointer;
  z-index: 1001;
`;

const UserContainer = styled.div`
  height: 50px;
`;

export default AuthenticatedUser;
