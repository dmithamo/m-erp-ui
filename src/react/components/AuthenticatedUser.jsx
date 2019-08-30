import React from 'react';
import styled from 'styled-components';

import defaultAvatar from '../assets/default-avatar.png';

const AuthenticatedUser = props => {
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
    </StyledUserContainer>
  );
};
const StyledAvatar = styled.img`
  width: auto;
  height: 50px;
  border-radius: 50%;
  border: 1px solid white;
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

const StyledUserContainer = styled.div`
  height: 50px;
`;

export default AuthenticatedUser;
