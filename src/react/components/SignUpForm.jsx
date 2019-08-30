/**
 * Bring in Generic AuthForm
 * and provide appropriate props for SignUp
 * -- use signUpInputs
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ArrowRightAlt, CancelOutlined } from '@material-ui/icons';
import AuthForm from './common/AuthForm';
import { registerUser } from '../../redux/actions/authActions';
import { signUpInputs } from './common/_Constants';
import {
  validateAuthInput,
  validateAuthSelect,
} from './validators/validateAuthInput';

// Global constants
const ORIGINAL_STATE = {
  currentPage: 1,
  userAttrs: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    'campus-select': '',
    'department-select': '',
    'role-select': '',
  },
  validationErrors: [],
};
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...ORIGINAL_STATE };

    this.collectUserInput = this.collectUserInput.bind(this);
    this.validateDataOnFormSubmit = this.validateDataOnFormSubmit.bind(this);
    this.redirectAfterValidation = this.redirectAfterValidation.bind(this);
    this.clearValidationErrors = this.clearValidationErrors.bind(this);
  }

  /**
   * @description Determine which page of the sign up form to show
   * @param {Number} pageNumber - page of Sign up form to show
   * @returns {void}
   */
  setPageNumber(pageNumber) {
    this.setState({ currentPage: pageNumber });
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
   *@description Validate form data on submit. Write errors to global store
   * @memberof SignUpForm
   * @returns {void}
   */
  async validateDataOnFormSubmit() {
    const { currentPage, userAttrs } = this.state;

    // Separate inputs and selects
    const inputs = Object.keys(userAttrs).filter(
      inputID => !inputID.includes('select'),
    );
    const selects = Object.keys(userAttrs).filter(selectID =>
      selectID.includes('select'),
    );

    // validate inputs if on page 1, else validate selects
    if (currentPage === 1) {
      await this.validateInputHelper(userAttrs, inputs);
    } else {
      await this.validateInputHelper(userAttrs, selects, true);
    }

    // Redirect as appropraite on validation
    this.redirectAfterValidation();
  }

  validateInputHelper(userAttrs, inputs, isSelect = false) {
    inputs
      .map(input => ({ id: input, value: userAttrs[input] }))
      .map(inputAsObject => {
        const errors = isSelect
          ? validateAuthSelect(inputAsObject)
          : validateAuthInput(inputAsObject);

        this.setState(prevState => ({
          ...prevState,
          validationErrors: [...prevState.validationErrors, ...errors],
        }));
      });
  }

  /**
   *
   * @description Navigate to appropriate page if no err after validation
   * @returns {void}
   * @memberof SignUpForm
   */
  redirectAfterValidation() {
    const { currentPage, validationErrors } = this.state;
    if (!validationErrors.length) {
      currentPage === 1 ? this.setPageNumber(2) : this.registerUserOnSubmit();
    }
  }

  /**
   *@description Register user on successful validation
   * Redirect to ... on successful regn
   * @returns {void}
   * @memberof SignUpForm
   */
  registerUserOnSubmit() {
    let { userAttrs } = this.state;
    // Clean up
    userAttrs = Object.keys(userAttrs)
      .map(key => ({
        [key.includes('-') ? key.split('-')[0] : key]: userAttrs[key],
      }))
      .reduce((acc, attr) => ({ ...acc, ...attr }));

    registerUser(userAttrs);

    // redirect to home page
    const { history } = this.props;
    history.push('/');

    // Clear inputs
    this.setState({ ...ORIGINAL_STATE });
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

  render() {
    const { currentPage, userAttrs, validationErrors } = this.state;

    return currentPage === 1 ? (
      <SignUpFormOne
        validationErrors={validationErrors}
        userAttrs={userAttrs}
        onChange={this.collectUserInput}
        onFocus={this.clearValidationErrors}
        onSubmit={this.validateDataOnFormSubmit}
        setPage={() => this.setPageNumber(2)}
      />
    ) : (
      <SignUpFormTwo
        validationErrors={validationErrors}
        userAttrs={userAttrs}
        onChange={this.collectUserInput}
        onFocus={this.clearValidationErrors}
        onSubmit={this.validateDataOnFormSubmit}
        setPage={() => this.setPageNumber(1)}
      />
    );
  }
}

const SignUpFormOne = ({
  onChange,
  onSubmit,
  userAttrs,
  validationErrors,
  onFocus,
}) => (
  <AuthForm
    userAttrs={userAttrs}
    onChange={onChange}
    onFocus={onFocus}
    validationErrors={validationErrors}
    inputs={signUpInputs.filter(input => !input.isSelect)}
    formHeader="Sign up to get started"
    formFooter="Did you already sign up?"
    link={{ to: '/signin', linkText: 'Sign in instead' }}
    primaryBtnParams={{
      primaryBtnText: <ArrowRightAlt />,
      primaryBtnOnClick: onSubmit,
    }}
    secondaryBtnParams={{
      secondaryBtnText: <CancelOutlined />,
      secondaryBtnOnClick: () => location.replace('/'),
    }}
  />
);

const SignUpFormTwo = ({
  setPage,
  onChange,
  onFocus,
  onSubmit,
  userAttrs,
  validationErrors,
}) => (
  <AuthForm
    userAttrs={userAttrs}
    onChange={onChange}
    onFocus={onFocus}
    validationErrors={validationErrors}
    inputs={signUpInputs.filter(input => input.isSelect)}
    formHeader="Sign up to get started"
    formFooter="Did you already sign up?"
    link={{ to: '/signin', linkText: 'Sign in instead' }}
    primaryBtnParams={{
      primaryBtnText: 'Sign up',
      primaryBtnOnClick: onSubmit,
    }}
    secondaryBtnParams={{
      secondaryBtnText: <ArrowRightAlt />,
      secondaryBtnOnClick: () => setPage(1),
    }}
  >
    <StyledDiv>
      <p>
        By clicking on&nbsp;
        <strong>Sign up</strong>
        &nbsp;below, you agree to the
        <br />
        <StyledLink to="/mhc-terms-and-conditions">
          Terms and Conditions&nbsp;
        </StyledLink>
        of Mamlaka Hill Chapel
      </p>
    </StyledDiv>
  </AuthForm>
);

const StyledLink = styled(Link)`
  color: ${props => props.color && 'white'};
  text-decoration: none;
`;

const StyledDiv = styled.div`
  margin-top: 1.5rem;
  width: 70%;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.6rem;
`;

// Reduxing!
const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = {
  registerUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm);
