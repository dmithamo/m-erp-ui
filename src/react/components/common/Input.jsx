import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { ErrorOutline } from '@material-ui/icons';

// Redux things
import store from '../../../redux/store';
import {
  clearValidationErrors,
  collectUserInput,
} from '../../../redux/actions/authActions';

class Input extends Component {
  /**
   * @description Remove errors from store onFocus
   * for a given input element
   * @returns {void}
   */
  clearErrors(input) {
    const { id: inputID } = input;
    store.dispatch(clearValidationErrors(inputID));
  }

  /**
   * @description Collect user input onChange
   * Store the value in global store
   * @param {DOMObject} input - the DOM Element whose
   *  input value we are collecting
   * @returns {void}
   */
  collectInputValue(input) {
    store.dispatch(collectUserInput(input));
  }

  render() {
    const { id, type, icon, placeholder } = this.props;

    let { validationErrors } = store.getState();
    validationErrors = validationErrors.filter(err => err.errorID === id);

    const { userAttrs } = store.getState();
    const value = userAttrs[id];

    return (
      <Fragment>
        <StyledInputContainer errors={validationErrors}>
          <p>{validationErrors.length <= 0 ? icon : <StyledErrorOutline />}</p>
          <StyledInput
            autoComplete="off"
            id={id}
            onFocus={e => this.clearErrors(e.target)}
            onBlur={e => this.validateInput(e.target)}
            placeholder={placeholder}
            type={type}
            onChange={e => this.collectInputValue(e.target)}
            value={value}
          />
        </StyledInputContainer>
        <ErrorsContainer>
          <Fragment>
            {validationErrors.map(error => (
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

// Reduxing!
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default connect(mapDispatchToProps)(Input);
