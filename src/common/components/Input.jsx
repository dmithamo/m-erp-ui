import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

/**
 * @description Generic input component
 * @param {object} props
 * @return {JSX}
 */
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
    type,
    name,
    placeholder,
    value,
    error,
    onChange,
    onIconClick,
    onKeyUp,
  } = props;

  return (
    <>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>

      <InputContainer error={error}>
        {icon !== 'search' && (
          <IconContainer>
            <FontAwesomeIcon icon={icon} />
          </IconContainer>
        )}

        <StyledInput
          required={required}
          autoComplete="off"
          type={type === 'password' && passwordVisible ? 'text' : type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
        />

        {type === 'password' && (
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
        )}

        {icon === 'search' && (
          <IconContainer onClick={onIconClick} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={icon} />
          </IconContainer>
        )}
      </InputContainer>
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onIconClick: PropTypes.func,
  onKeyUp: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.any,
  required: PropTypes.bool,
  icon: PropTypes.string,
};

/*
 * Using this as a default prop for
 * non-mandatory props of the fn kind
 */
const doNothing = () => {};

Input.defaultProps = {
  onChange: doNothing,
  onIconClick: doNothing,
  onKeyUp: doNothing,
  placeholder: '',
  name: '',
  error: false,
  required: false,
  icon: '',
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.35em 0.5em;

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
