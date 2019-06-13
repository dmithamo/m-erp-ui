/**
 * Bring in Generic AuthForm
 * and provide appropriate props for SignUp
 * -- use signUpInputs
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowRightAlt, CancelOutlined } from '@material-ui/icons';
import AuthForm from './common/AuthForm';
import { signUpInputs } from './common/_Constants';

const SignUpForm = () => {
  const [currentPage, setcurrentPage] = useState(1);
  return currentPage === 1 ? (
    <SignUpFormOne setPage={setcurrentPage} />
  ) : (
    <SignUpFormTwo setPage={setcurrentPage} />
  );
};

const SignUpFormOne = ({ setPage }) => (
  <AuthForm
    inputs={signUpInputs.filter(input => !input.isSelect)}
    formHeader="Sign up to get started"
    formFooter="Did you already sign up?"
    link={{ to: '/signin', linkText: 'Sign in instead' }}
    primaryBtnParams={{
      primaryBtnText: 'Save and Proceed',
      primaryBtnOnClick: () => setPage(2),
    }}
    secondaryBtnParams={{
      secondaryBtnText: <CancelOutlined />,
      secondaryBtnOnClick: () => location.replace('/'),
    }}
  />
);

const SignUpFormTwo = ({ setPage }) => (
  <AuthForm
    inputs={signUpInputs.filter(input => input.isSelect)}
    formHeader="Sign up to get started"
    formFooter="Did you already sign up?"
    link={{ to: '/signin', linkText: 'Sign in instead' }}
    primaryBtnParams={{
      primaryBtnText: 'Sign up',
      primaryBtnOnClick: () => null,
    }}
    secondaryBtnParams={{
      secondaryBtnText: <ArrowRightAlt />,
      secondaryBtnOnClick: () => setPage(1),
    }}
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

const StyledDiv = styled.div`
  margin-top: 1.5rem;
  width: 70%;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.6rem;
`;

export default SignUpForm;
