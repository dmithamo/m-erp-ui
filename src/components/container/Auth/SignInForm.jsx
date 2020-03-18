/**
 * Import generic Input and Btn
 * Compose these into a Sign in AuthForm
 */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { LogoSmall } from '../../presentational/Logo';
import { FormContainer, FormHeader } from './styles/authFormStyles';
import Input from '../../presentational/Input';
import Button from '../../presentational/Button';
import { InlineError } from '../../presentational/Error';
import { useAuthContext } from '../../../context/auth';
import { onSubmitListener, onChangeEventListener } from './eventListeners';

export default function LoginForm(props) {
  const auth = useAuthContext();
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const { user, error } = auth.authState;
  const { email, password } = formValues;

  const { handleFormSubmit, handleFormInput } = props;

  return user ? (
    <Redirect to="/dashboard" />
  ) : (
    <FormContainer>
      <h3>Logo Here</h3>

      <FormHeader>
        {error ? (
          <InlineError category="auth" error={error} />
        ) : (
          'Sign in to continue'
        )}
      </FormHeader>

      <form
        autoComplete="off"
        onSubmit={(e) => handleFormSubmit(e, formValues, auth)}
      >
        <Input
          icon="at"
          required
          onChange={(e) => handleFormInput(e, formValues, setFormValues, auth)}
          type="email"
          name="email"
          placeholder="Enter email address"
          value={email}
          error={!!error && error.message.split('_')[3] === 'EMAIL'}
        />

        <Input
          icon="fingerprint"
          required
          onChange={(e) => handleFormInput(e, formValues, setFormValues, auth)}
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          error={!!error && error.message.split('_')[3] === 'PASSWORD'}
        />

        <Button
          type="submit"
          onClick={(e) => handleFormSubmit(e, formValues, auth)}
          isDisabled={!!error}
        >
          Submit
        </Button>
      </form>
    </FormContainer>
  );
}

LoginForm.propTypes = {
  handleFormSubmit: PropTypes.func,
  handleFormInput: PropTypes.func,
};

LoginForm.defaultProps = {
  handleFormSubmit: onSubmitListener,
  handleFormInput: onChangeEventListener,
};
