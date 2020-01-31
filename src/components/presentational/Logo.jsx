import React from 'react';
import styled from 'styled-components';
import logoSmall from '../../assets/logo-small.jpg';

export function LogoSmall() {
  return <Logo size="sm" src={logoSmall} alt="logo-small" />;
}

export function LogoNormal() {
  return <Logo size="nm" src={logoSmall} alt="logo-normal" />;
}

const Logo = styled.img`
  width: ${(props) => (props.size === 'sm' ? '150px' : '200px')};
  height: auto;
`;
