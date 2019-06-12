/**
 * Bring in Generic AuthForm
 * and provide appropriate props for SignUp
 * -- use signUpInputs
 */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthForm from './common/AuthForm';
import { signUpInputs } from './common/_Constants';

export const SignUpForm = () => (
  <AuthForm
    inputs={signUpInputs.filter(input => !input.isSelect)}
    buttonParams={{
      buttonText: (
        <StyledLink color to="/signup/2">
          Save and Proceed
        </StyledLink>
      ),
      buttonOnClick: () => {
        // Proper fn will be defined to validate input, etc
      },
    }}
    formHeader="Sign up to get started"
    formFooter="Did you already sign up?"
    link={{ to: '/signin', linkText: 'Sign in instead' }}
  />
);

export const SignUpFormTwo = () => (
  <AuthForm
    inputs={signUpInputs.filter(input => input.isSelect)}
    buttonParams={{
      buttonText: 'Sign up',
      buttonOnClick: () => {
        // Proper fn will be defined to validate input, etc
        // eslint-disable-next-line no-alert
        alert('[WIP]');
      },
    }}
    formHeader="Sign up to get started"
    formFooter="Did you already sign up?"
    link={{ to: '/signin', linkText: 'Sign in instead' }}
  >
    <StyledDiv>
      <p>
        By clicking on&nbsp;
        <strong>Sign up</strong>
        &nbsp;below, you agree to the
        <br />
        <StyledLink to="/mhc-terms-and-conditions">
          Terms and Conditions&nbsp;
        </StyledLink>
        of Mamlaka Hill Chapel
      </p>
    </StyledDiv>
  </AuthForm>
);

const StyledLink = styled(Link)`
  color: ${props => props.color && 'white'};
  text-decoration: none;
`;

export const StyledDiv = styled.div`
  margin-top: 1.5rem;
  width: 70%;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.6rem;
`;
