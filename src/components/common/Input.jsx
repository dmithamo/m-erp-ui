import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  EmailOutlined,
  FingerprintOutlined,
  VisibilityOutlined,
  VisibilityOffOutlined,
} from '@material-ui/icons';

export default function Input(props) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const ICONS = {
    email: <EmailOutlined />,
    password: <FingerprintOutlined />,
  };

  /**
   * @description Toggle password visibility on or off
   */
  function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible);
  }

  const { required, onChange, type, name, placeholder, value } = props;
  const icon = ICONS[name];

  return (
    <>
      <InputContainer>
        <IconContainer>{icon}</IconContainer>

        <StyledInput
          required={required}
          autoComplete="off"
          onChange={onChange}
          type={type === 'password' && passwordVisible ? 'text' : type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
        />

        {type === 'password' ? (
          <IconContainer>
            <TogglePasswordVisibilityBtn
              id="password-visibility-toggle"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <VisibilityOutlined />
              ) : (
                <VisibilityOffOutlined />
              )}
            </TogglePasswordVisibilityBtn>
          </IconContainer>
        ) : null}
      </InputContainer>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
    </>
  );
}

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

/*
 * Using this as a default prop for
 * non-mandatory props of the fn kind
 */
const doNothing = () => {};

Input.defaultProps = {
  onChange: doNothing,
  placeholder: '',
};

const IconContainer = styled.p`
  background-color: white;
  border-radius: 3px;
  margin: 0;
`;

const InputContainer = styled.div`
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid rgba(220, 220, 220, 0.8);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75em;

  margin-top: 0.5rem;

  p {
    background-color: white;
    border-radius: 3px;
  }

  :focus-within {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
  background-color: white;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  border: none;
  outline: none;
  background: none;
  border-left: 1px solid rgba(239, 239, 239, 0.58);
  width: 100%;
  padding: 0.5rem;
  font-family: inherit;
  font-size: 12px;
  text-transform: ${(props) => props.type === 'email' && 'lowercase'};
  ::placeholder {
    text-transform: capitalize;
    font-family: inherit;
    color: rgba(0, 0, 0, 0.38);
  }
`;

const StyledLabel = styled.label`
  color: #00000080;
  text-align: start;
  text-transform: capitalize;
  display: flex;
  justify-content: flex-start;
  font-size: 0.9em;
  font-weight: bold;
  padding: 0.7em;
`;

const TogglePasswordVisibilityBtn = styled.button`
  color: rgba(0, 0, 0, 0.75);
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  :hover {
    color: rgb(0, 0, 0);
  }
`;
