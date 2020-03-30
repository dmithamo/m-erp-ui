/**
 * Import generic Input and Btn
 * Compose these into a Sign in AuthForm
 */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormContainer, FormHeader } from './styles';
import Input from '../../common/components/Input';
import Button from '../../common/components/Button';
import { InlineError } from '../../common/components/Error';
import { isValidEmail } from '../../common/utils/validateInput';
import {
  loginUser,
  clearFormErrors,
  addValidationError,
} from './storeLogic/actions';

export function SignInForm(props) {
  const { user, error, onSubmit, onValidationError, onClearFormErrors } = props;
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const onFormInput = (e) => {
    error && onClearFormErrors();
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!isValidEmail(formValues.email)) {
      onValidationError('INVALID_PARAM_EMAIL');
      return;
    }

    if (!formValues.password) {
      onValidationError('INVALID_PARAM_PASSWORD');
      return;
    }

    onSubmit(formValues);
  };

  const { email, password } = formValues;
  return user ? (
    <Redirect to="/dashboard" />
  ) : (
    <FormContainer>
      <FormHeader>
        <h3 className="logo">&lt;Logo /&gt;</h3>
        {error ? <InlineError category="auth" error={error} /> : ''}
      </FormHeader>

      <form
        autoComplete="off"
        onSubmit={() => {
          handleSubmit(formValues);
        }}
      >
        <Input
          icon="at"
          required
          onChange={(e) => onFormInput(e)}
          type="email"
          name="email"
          placeholder="Enter email address"
          value={email}
          error={!!error && error.message.split('_')[2] === 'EMAIL'}
        />

        <Input
          icon="fingerprint"
          required
          onChange={(e) => onFormInput(e)}
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          error={!!error && error.message.split('_')[2] === 'PASSWORD'}
        />

        <Button
          type="submit"
          onClick={() => {
            handleSubmit(formValues);
          }}
          isDisabled={!!error}
        >
          Submit
        </Button>
      </form>
    </FormContainer>
  );
}

SignInForm.propTypes = {
  user: PropTypes.any.isRequired,
  error: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClearFormErrors: PropTypes.func.isRequired,
  onValidationError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  error: state.auth.error,
  isPosting: state.auth.isPosting,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ email, password }) => dispatch(loginUser({ email, password })),

  onClearFormErrors: () => dispatch(clearFormErrors()),

  onValidationError: (error) =>
    dispatch(addValidationError({ message: error })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
