import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../styles';

export default function Input(props) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  /**
   * @description Toggle password visibility on or off
   */
  function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible);
  }

  const {
    icon,
    required,
    onChange,
    type,
    name,
    placeholder,
    value,
    error,
  } = props;

  return (
    <>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>

      <InputContainer error={error}>
        <IconContainer>
          <FontAwesomeIcon icon={icon} />
        </IconContainer>

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
              type="button"
              id="password-visibility-toggle"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <FontAwesomeIcon icon="eye" />
              ) : (
                <FontAwesomeIcon icon="eye-slash" />
              )}
            </TogglePasswordVisibilityBtn>
          </IconContainer>
        ) : null}
      </InputContainer>
    </>
  );
}

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.any.isRequired,
  required: PropTypes.bool.isRequired,
  icon: PropTypes.any.isRequired,
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
  background-color: ${colors.white};
  border-radius: 3px;
  margin: 0;
`;

const InputContainer = styled.div`
  box-sizing: border-box;
  border-radius: 3px;
  border: ${(props) =>
    props.error
      ? '1px solid rgba(255, 0, 0, 0.8)'
      : '1px solid rgba(220, 220, 220, 0.8)'};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75em;

  margin-bottom: 2.5em;

  p {
    background-color: ${colors.white};
    border-radius: 3px;
  }

  :focus-within {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
  background-color: ${colors.white};
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
  font-size: 1em;
  text-transform: ${(props) => props.type === 'email' && 'lowercase'};
  ::placeholder {
    text-transform: capitalize;
    font-family: inherit;
    color: ${colors.grey};
  }
`;

const StyledLabel = styled.label`
  color: ${colors.black};
  text-align: start;
  text-transform: capitalize;
  display: flex;
  justify-content: flex-start;
  font-size: 0.9em;
`;

const TogglePasswordVisibilityBtn = styled.button`
  color: ${colors.black};
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: none !important;
`;
