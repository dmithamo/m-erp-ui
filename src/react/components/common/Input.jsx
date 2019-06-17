import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import {
  ErrorOutline,
  VisibilityOutlined,
  VisibilityOffOutlined,
} from '@material-ui/icons';

class Input extends Component {
  constructor(props) {
    super(props);
    if (props.type === 'password') this.state = { showPassword: false };
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
  }

  /**
   * @description Toggle password visibility on or off
   * @returns {void}
   */
  togglePasswordVisibility() {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  }

  render() {
    const {
      id,
      type,
      icon,
      placeholder,
      userAttrs,
      onChange,
      onFocus,
      validationErrors,
    } = this.props;

    const valErrors = validationErrors.filter(err => err.errorID === id);
    const value = userAttrs[id];

    const { showPassword } = type === 'password' && this.state;

    return (
      <Fragment>
        <StyledInputContainer type={type} errors={valErrors}>
          <p>{valErrors.length <= 0 ? icon : <StyledErrorOutline />}</p>
          {type === 'password' ? (
            <StyledInput
              autoComplete="off"
              id={id}
              onFocus={e => onFocus(e.target)}
              placeholder={placeholder}
              type={showPassword ? 'text' : 'password'}
              onChange={e => onChange(e.target)}
              value={value}
            />
          ) : (
            <StyledInput
              autoComplete="off"
              id={id}
              onFocus={e => onFocus(e.target)}
              placeholder={placeholder}
              type={type}
              onChange={e => onChange(e.target)}
              value={value}
            />
          )}
          {type === 'password' && (
            <TogglePasswordVisibilityBtn
              onClick={this.togglePasswordVisibility}
              title={
                showPassword
                  ? 'Click to hide password'
                  : 'Click to show password'
              }
            >
              {showPassword ? (
                <VisibilityOutlined />
              ) : (
                <VisibilityOffOutlined />
              )}
            </TogglePasswordVisibilityBtn>
          )}
        </StyledInputContainer>
        <ErrorsContainer>
          <Fragment>
            {valErrors.map(error => (
              <p>{error.errorMessage}</p>
            ))}
          </Fragment>
        </ErrorsContainer>
      </Fragment>
    );
  }
}

const StyledInputContainer = styled.div`
  border-radius: 3px;
  border: ${props =>
    props.errors.length > 0
      ? '1px solid red'
      : '1px solid rgba(220, 220, 220, 0.9)'};
  width: 80%;
  display: grid;
  grid-template-columns: ${props =>
    props.type === 'password' ? '1fr 6fr 1fr' : '1fr 6fr'};
  margin-top: 0.5rem;
  p {
    background-color: white;
    border-radius: 3px;
  }
  :focus-within {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.38);
    border: none;
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  border: none;
  outline: none;
  border-left: 1px solid rgba(239, 239, 239, 0.58);
  background-color: rgba(239, 239, 239, 0.58);
  width: 100%;
  padding: 0 0.5rem;
  font-family: 'Fira Mono', monospace;
  font-size: 12px;
  text-transform: ${props => props.type === 'text' && 'capitalize'};
  text-transform: ${props => props.type === 'email' && 'lowercase'};
  ::placeholder {
    text-transform: capitalize;
    font-family: inherit;
    color: rgba(0, 0, 0, 0.38);
  }
  :focus {
    background-color: white;
  }
`;

const TogglePasswordVisibilityBtn = styled.button`
  color: rgba(0, 0, 0, 0.75);
  background-color: rgba(239, 239, 239, 0.58);
  border: none;
  outline: none;
  cursor: pointer;
  :hover {
    color: rgb(0, 0, 0);
  }
`;

const ErrorsContainer = styled.div`
  color: red;
  font-size: 10px;
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: left;
  width: 80%;
  height: 0.7rem;
`;

const StyledErrorOutline = styled(ErrorOutline)`
  color: red;
`;

// Reduxing!
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default connect(mapDispatchToProps)(Input);
