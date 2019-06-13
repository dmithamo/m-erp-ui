import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { ErrorOutline } from '@material-ui/icons';
import { validateAuthInput } from '../validators/validateAuthInput';

class Input extends Component {
  constructor(props) {
    super(props);
    // Extract the id from props for use in state
    // as key for value in an input
    const { id } = props;
    this.state = {
      errors: [],
      [id]: '',
    };
  }

  /**
   * @description Run checks onBlur to ensure valid user input
   * Store the errors in state
   * @param {DOMObject} input - the DOM Element whose
   *  input value we are validating
   * @returns {void}
   */
  validateInput(input) {
    const errors = validateAuthInput(input);
    this.setState({ errors });
  }

  /**
   * @description Remove errors from state onFocus
   * for a given input
   * @returns {void}
   */
  clearErrors() {
    this.setState({ errors: [] });
  }

  /**
   * @description Collect user input onChange
   * Store the value in state
   * @param {DOMObject} input - the DOM Element whose
   *  input value we are collecting
   * @returns {void}
   */
  collectInputValue(input) {
    const { id, value } = input;
    this.setState({ [id]: value });
  }

  render() {
    const { id, type, icon, placeholder } = this.props;

    const { errors } = this.state;
    const { id: value } = this.state;

    return (
      <Fragment>
        <StyledInputContainer errors={errors}>
          <p>{errors.length <= 0 ? icon : <StyledErrorOutline />}</p>
          <StyledInput
            autoComplete="off"
            id={id}
            onFocus={() => this.clearErrors()}
            onBlur={e => this.validateInput(e.target)}
            placeholder={placeholder}
            type={type}
            onChange={e => this.collectInputValue(e.target)}
            value={value}
          />
        </StyledInputContainer>
        <ErrorsContainer>
          <Fragment>
            {errors.map(error => (
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
  grid-template-columns: 1fr 6fr;
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

const ErrorsContainer = styled.div`
  color: red;
  font-size: 10px;
  margin-top: 0;
  text-align: left;
  width: 80%;
`;

const StyledErrorOutline = styled(ErrorOutline)`
  color: red;
`;

export default Input;
