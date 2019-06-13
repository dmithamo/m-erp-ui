import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CancelOutlined } from '@material-ui/icons';

import AuthForm from './common/AuthForm';
import { loginInputs } from './common/_Constants';

const SignInForm = () => (
  <AuthForm
    inputs={loginInputs.filter(input => !input.isSelect)}
    formHeader="Sign in to get started"
    formFooter="Not signed up yet?"
    link={{ to: '/signup', linkText: 'Sign up here' }}
    primaryBtnParams={{
      primaryBtnText: 'Sign in',
      primaryBtnOnClick: () => null,
    }}
    secondaryBtnParams={{
      secondaryBtnText: <CancelOutlined />,
      secondaryBtnOnClick: () => location.replace('/'),
    }}
  >
    <StyledDiv>
      <p>
        <input type="checkbox" />
        &nbsp;Remember Me
      </p>
      <p>
        <StyledLink to="/signin">Forgot Password?</StyledLink>
      </p>
    </StyledDiv>
  </AuthForm>
);
export default SignInForm;

export const StyledDiv = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const StyledLink = styled(Link)`
  color: black;
`;
