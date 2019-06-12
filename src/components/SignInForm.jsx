import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthForm from './common/AuthForm';
import { loginInputs } from './common/_Constants';

const SignInForm = () => (
  <AuthForm
    inputs={loginInputs.filter(input => !input.isSelect)}
    buttonParams={{
      buttonText: 'Sign in',
      buttonOnClick: () => {
        // Proper fn will be defined to validate input, etc
        // eslint-disable-next-line no-alert
        alert('[WIP]');
      },
    }}
    formHeader="Sign in to get started"
    formFooter="Not signed up yet?"
    link={{ to: '/signup', linkText: 'Sign up here' }}
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
