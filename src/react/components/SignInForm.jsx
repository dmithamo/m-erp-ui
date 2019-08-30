import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CancelOutlined } from '@material-ui/icons';

import { loginUser } from '../../redux/actions/authActions';
import store from '../../redux/store';

import AuthForm from './common/AuthForm';
import { loginInputs } from './common/_Constants';

// Global constants
const ORIGINAL_STATE = {
  userAttrs: {
    email: '',
    password: '',
  },
  validationErrors: [],
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...ORIGINAL_STATE };

    this.collectUserInput = this.collectUserInput.bind(this);
    this.loginUserOnSubmit = this.loginUserOnSubmit.bind(this);
    this.clearValidationErrors = this.clearValidationErrors.bind(this);
  }

  /**
   * @description Collect user input onChange in input element
   * @param {DOMElem} input - Element whose input is being collected
   * @returns {void}
   */
  collectUserInput(input) {
    const { id, value } = input;
    this.setState(prevState => ({
      ...prevState,
      userAttrs: { ...prevState.userAttrs, [id]: value },
    }));
  }

  /**
   * @description Clear errors from an input/select onFocus
   * @param {object} input Element to clear errors from
   * @returns {void}
   */
  clearValidationErrors(input) {
    this.setState(prevState => ({
      ...prevState,
      validationErrors: prevState.validationErrors.filter(
        err => err.errorID !== input.id,
      ),
    }));
  }

  loginUserOnSubmit() {
    const {
      userAttrs: { email, password },
    } = this.state;
    const { users } = store.getState();
    const registeredUser = users.filter(user => user.email === email)[0];

    if (!registeredUser) {
      this.setState(prevState => ({
        ...prevState,
        validationErrors: [
          ...prevState.validationErrors,
          {
            errorID: 'email',
            errorMessage: 'No user with that email exists',
          },
        ],
      }));
      return; // doing this to avoid else statements. Don't like em
    }

    // Check password
    const wrongPassword = registeredUser.password !== password;

    if (wrongPassword) {
      this.setState(prevState => ({
        ...prevState,
        validationErrors: [
          ...prevState.validationErrors,
          {
            errorID: 'password',
            errorMessage: 'Wrong password',
          },
        ],
      }));
      return;
    }

    // Login user and reset form
    loginUser(registeredUser);

    // redirect to home page
    const { history } = this.props;
    history.push('/');

    this.setState({ ...ORIGINAL_STATE });
  }

  render() {
    const { userAttrs, validationErrors } = this.state;
    return (
      <AuthForm
        formname="signin"
        inputs={loginInputs}
        validationErrors={validationErrors}
        userAttrs={userAttrs}
        onChange={this.collectUserInput}
        onFocus={this.clearValidationErrors}
        formHeader="Sign in to get started"
        formFooter="Not signed up yet?"
        link={{ to: '/signup', linkText: 'Sign up here' }}
        primaryBtnParams={{
          primaryBtnText: 'Sign in',
          primaryBtnOnClick: this.loginUserOnSubmit,
        }}
        secondaryBtnParams={{
          secondaryBtnText: <CancelOutlined />,
          secondaryBtnOnClick: () => location.replace('/'),
        }}
      >
        <StyledDiv>
          <p>
            <input type="checkbox" />
            &nbsp;Remember Me
          </p>
          <p>
            <StyledLink to="/signin">Forgot Password?</StyledLink>
          </p>
        </StyledDiv>
      </AuthForm>
    );
  }
}

export const StyledDiv = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const StyledLink = styled(Link)`
  color: black;
`;

// Reduxing!
const mapStateToProps = state => ({
  users: state.users,
  authenticatedUser: state.authenticatedUser,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInForm);
