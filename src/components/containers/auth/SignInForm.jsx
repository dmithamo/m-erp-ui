/**
 * Import generic Input and Btn
 * Compose these into a Sign in AuthForm
 */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LogoSmall } from '../../presentation/Logo';
import { FormContainer, FormHeader } from './styles/authFormStyles';
import Input from '../../presentation/Input';
import Button from '../../presentation/Button';
import { InlineError } from '../../presentation/Error';
import { CopyrightWarning } from '../../presentation/CopyrightWarning';
import { useAuthContext } from '../../../context/auth';
import { onSubmitHelper, onChangeHelper } from './authHelpers';

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
      <LogoSmall />

      <FormHeader>
        {error ? <InlineError error={error} /> : 'Sign in to continue'}
      </FormHeader>

      <form
        autoComplete="off"
        onSubmit={(e) => handleFormSubmit(e, formValues, auth)}
      >
        <Input
          required
          onChange={(e) => handleFormInput(e, formValues, setFormValues, auth)}
          type="email"
          name="email"
          placeholder="Enter email address"
          value={email}
        />

        <Input
          required
          onChange={(e) => handleFormInput(e, formValues, setFormValues, auth)}
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
        />

        <Button
          type="submit"
          onClick={(e) => handleFormSubmit(e, formValues, auth)}
          isDisabled={!!error}
        >
          Submit
        </Button>
      </form>

      <CopyrightWarning />
    </FormContainer>
  );
}

LoginForm.propTypes = {
  handleFormSubmit: PropTypes.func,
  handleFormInput: PropTypes.func,
};

LoginForm.defaultProps = {
  handleFormSubmit: onSubmitHelper,
  handleFormInput: onChangeHelper,
};
