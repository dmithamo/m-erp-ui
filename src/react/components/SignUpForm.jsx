/**
 * Bring in Generic AuthForm
 * and provide appropriate props for SignUp
 * -- use signUpInputs
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowRightAlt, CancelOutlined } from '@material-ui/icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AuthForm from './common/AuthForm';
import store from '../../redux/store';
import { addValidationErrors } from '../../redux/actions/authActions';
import { signUpInputs } from './common/_Constants';
import { validateAuthInput } from './validators/validateAuthInput';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
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
   *@description Validate form data on submit. Write errors to global store
   * @memberof SignUpForm
   * @returns {void}
   */
  validateDataOnFormSubmit() {
    const { userAttrs } = store.getState();
    const inputNames = Object.keys(userAttrs);
    inputNames
      .map(name => ({ id: name, value: userAttrs[name] }))
      .map(inputObject => {
        store.dispatch(addValidationErrors(validateAuthInput(inputObject)));
      });
  }

  render() {
    const { currentPage } = this.state;

    return currentPage === 1 ? (
      <SignUpFormOne
        onSubmit={this.validateDataOnFormSubmit}
        setPage={() => this.setPageNumber(2)}
      />
    ) : (
      <SignUpFormTwo
        onSubmit={this.validateDataOnFormSubmit}
        setPage={() => this.setPageNumber(1)}
      />
    );
  }
}

const SignUpFormOne = ({ onSubmit }) => (
  <AuthForm
    inputs={signUpInputs.filter(input => !input.isSelect)}
    formHeader="Sign up to get started"
    formFooter="Did you already sign up?"
    link={{ to: '/signin', linkText: 'Sign in instead' }}
    primaryBtnParams={{
      primaryBtnText: 'Save and Proceed',
      primaryBtnOnClick: onSubmit,
    }}
    secondaryBtnParams={{
      secondaryBtnText: <CancelOutlined />,
      secondaryBtnOnClick: () => location.replace('/'),
    }}
  />
);

const SignUpFormTwo = ({ setPage, onSubmit }) => (
  <AuthForm
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
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default connect(mapDispatchToProps)(SignUpForm);
