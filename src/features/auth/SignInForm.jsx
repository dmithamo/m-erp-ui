/**
 * Import generic Input and Btn
 * Compose these into a Sign in AuthForm
 */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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

export default function SignInForm() {
  const { user, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const onFormInput = (e) => {
    error && dispatch(clearFormErrors());
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!isValidEmail(formValues.email)) {
      dispatch(addValidationError({ message: 'INVALID_PARAM_EMAIL' }));
      return;
    }

    if (!formValues.password) {
      dispatch(addValidationError({ message: 'INVALID_PARAM_PASSWORD' }));
      return;
    }

    dispatch(loginUser(formValues));
  };

  const { email, password } = formValues;
  return user ? (
    <Redirect to="/dashboard" />
  ) : (
    <FormContainer>
      <FormHeader>
        <span className="logo">&lt;Logo /&gt;</span>
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
