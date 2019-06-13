import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { ErrorOutline } from '@material-ui/icons';
import { validateAuthSelect } from '../validators/validateAuthInput';

class Select extends Component {
  constructor(props) {
    super(props);
    // Extract the id from props for use in state
    // as key for value in an Select
    const { id } = props;
    this.state = {
      errors: [],
      [id]: '',
    };
  }

  /**
   * @description Run checks onBlur to ensure valid user input
   * Store the errors in state
   * @param {DOMObject} select - the DOM Element whose
   *  Select value we are validating
   * @returns {void}
   */
  validateSelect(select) {
    const errors = validateAuthSelect(select);
    this.setState({ errors });
  }

  /**
   * @description Remove errors from state onFocus
   * for a given Select
   * @returns {void}
   */
  clearErrors() {
    this.setState({ errors: [] });
  }

  /**
   * @description Collect user Select onChange
   * Store the value in state
   * @param {DOMObject} select - the DOM Element whose
   *  Select value we are collecting
   * @returns {void}
   */
  collectSelectValue(select) {
    const { id, value } = select;
    this.setState({ [id]: value });
  }

  render() {
    const { id, icon, options } = this.props;

    const { errors } = this.state;
    const { id: value } = this.state;

    return (
      <Fragment>
        <StyledSelectContainer errors={errors}>
          <p>{errors.length <= 0 ? icon : <StyledErrorOutline />}</p>
          <StyledSelect
            id={id}
            onFocus={() => this.clearErrors()}
            onBlur={e => this.validateSelect(e.target)}
            onChange={e => this.collectSelectValue(e.target)}
            value={value}
          >
            {options.map(option => (
              <option value={option.value}>{option.name}</option>
            ))}
          </StyledSelect>
        </StyledSelectContainer>
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

const StyledSelect = styled.select`
  box-sizing: border-box;
  border: none;
  outline: none;
  border-left: 1px solid rgba(239, 239, 239, 0.58);
  background-color: rgba(239, 239, 239, 0.58);
  width: 100%;
  padding: 0 0.5rem;
  font-family: 'Fira Mono', monospace;
  font-size: 12px;
  :focus {
    background-color: white;
  }
`;

const StyledSelectContainer = styled.div`
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

export default Select;
