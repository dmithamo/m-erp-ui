import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowDropDown } from '@material-ui/icons';
import defaultAvatar from '../assets/default-avatar.png';
import DropDownMenu from './DropDownMenu';

const AuthenticatedUser = props => {
  const [showMenu, setShowMenu] = useState(false);
  const onClick = () => {
    setShowMenu(!showMenu);
  };

  const {
    user: { firstname, lastname, role },
  } = props;

  return (
    <StyledUserContainer>
      <StyledAvatar src={defaultAvatar} alt="default-profile-picture" />
      <StyledName>
        {`${firstname} ${lastname}`}
        <p>{role}</p>
      </StyledName>
      <DropDownButton onClick={onClick} />
      {showMenu && <DropDownMenu />}
    </StyledUserContainer>
  );
};

const DropDownButton = props => {
  const { onClick } = props;
  return (
    <StyledDropDown>
      <ArrowDropDown onClick={onClick} />
    </StyledDropDown>
  );
};

const StyledAvatar = styled.img`
  width: auto;
  height: 50px;
  border-radius: 50%;
`;

const StyledName = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  font: inherit;
  font-weight: bold;
  font-size: 12px;
  p {
    padding: 0;
    margin: 0;
    color: grey;
    font-weight: normal;
    text-transform: uppercase;
  }
`;

const StyledDropDown = styled.p`
  text-align: right;
  cursor: pointer;
  transform: ${props => props.showMenu && 'rotate(90deg)'};
`;

const StyledUserContainer = styled.div`
  height: 50px;
`;

export default AuthenticatedUser;
