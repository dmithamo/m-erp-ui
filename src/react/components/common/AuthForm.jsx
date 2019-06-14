/**
 * Import generic Input, Select and Btn
 * Compose these into a generic AuthForm
 */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import mhcLogo from '../../assets/mhc-logo-small.jpg';
import Input from './Input';
import Select from './Select';
import { PrimaryBtn, SecondaryBtn } from './Button';

import store from '../../../redux/store';

const AuthForm = ({
  inputs,
  primaryBtnParams,
  secondaryBtnParams,
  formHeader,
  formFooter,
  link,
  children,
}) => {
  const { primaryBtnText, primaryBtnOnClick } = primaryBtnParams;
  const { secondaryBtnText, secondaryBtnOnClick } = secondaryBtnParams;

  const { validationErrors } = store.getState();

  return (
    <StyledFormContainer>
      <SecondaryBtn
        secondaryBtnText={secondaryBtnText}
        secondaryBtnOnClick={secondaryBtnOnClick}
      />
      <Logo src={mhcLogo} alt="mamlaka-hill-chapel-logo" />
      <FormHeader>{formHeader}</FormHeader>

      {/* Render sign up inputs here */}
      {inputs.map(input =>
        input.isSelect ? (
          <Select id={input.id} icon={input.icon} options={input.options} />
        ) : (
          <Input
            id={input.id}
            type={input.type}
            icon={input.icon}
            placeholder={input.placeholder}
          />
        ),
      )}

      {children}

      <PrimaryBtn
        errors={validationErrors}
        primaryBtnText={primaryBtnText}
        primaryBtnOnClick={primaryBtnOnClick}
      />

      <FormFooter>
        {formFooter}
        &nbsp;
        <StyledLink to={link.to}>{link.linkText}</StyledLink>
      </FormFooter>
    </StyledFormContainer>
  );
};

const StyledFormContainer = styled.div`
  box-shadow: 0 1px 2px 2px rgb(193, 193, 193);
  border-radius: 5px;
  background-color: white;
  width: 33%;
  font-size: 12px;
  text-align: center;
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
`;

const FormHeader = styled.p`
  margin-bottom: 2rem;
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  color: black;
  :focus,
  :visited {
    color: black;
  }
`;

const FormFooter = styled.p`
  font-weight: 500;
  margin-bottom: 2rem;
`;

// Reduxing!
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default connect(mapDispatchToProps)(AuthForm);
