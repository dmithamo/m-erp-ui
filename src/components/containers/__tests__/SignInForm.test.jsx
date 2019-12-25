import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from '../../../context/auth';
import LoginForm from '../auth/SignInForm';

describe('<SignInForm /> : not authenticated', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <AuthContextProvider>
        <LoginForm />
      </AuthContextProvider>,
    );
  });

  test('it renders a login form', () => {
    const { getByText, getByAltText } = wrapper;
    expect(getByText(/sign in to continue/i)).toBeInTheDocument();
    expect(getByAltText(/logo/i)).toBeInTheDocument();
    expect(getByText(/this software is licensed/i)).toBeInTheDocument();
  });

  test('renders two inputs <and their labels> and a submit btn', () => {
    const { getByPlaceholderText, getByLabelText, getByText } = wrapper;

    expect(getByPlaceholderText(/enter email address/i)).toBeInTheDocument();
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/enter password/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
    expect(getByText(/submit/i)).toBeInTheDocument();
  });
});

describe('<SignInForm /> : authenticated', () => {
  let wrapper;
  const authState = {
    user: {
      firstname: 'ada',
      lastname: 'lovelace',
    },
  };
  beforeEach(() => {
    wrapper = render(
      <AuthContextProvider value={{ authState }}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </AuthContextProvider>,
    );
  });

  test('it does not render a login form if a user is signed in already', () => {
    const { queryByText, queryByLabelText } = wrapper;
    expect(queryByText(/sign in to continue/i)).not.toBeInTheDocument();
    expect(queryByLabelText(/email/i)).not.toBeInTheDocument();
    expect(queryByLabelText(/password/i)).not.toBeInTheDocument();
  });
});

describe('<SignInForm /> : errored', () => {
  let wrapper;
  const authState = {
    error: {
      status: 401,
      message: 'Unauthorized. Bad credentials',
    },
  };
  beforeEach(() => {
    wrapper = render(
      <AuthContextProvider value={{ authState }}>
        <LoginForm />
      </AuthContextProvider>,
    );
  });

  test('it renders an error when there is one in the auth context', () => {
    const { getByText, getByAltText, queryByText } = wrapper;
    expect(getByText(authState.error.message)).toBeInTheDocument();
    expect(getByAltText(/logo/i)).toBeInTheDocument();
    expect(getByText(/this software is licensed/i)).toBeInTheDocument();
    expect(queryByText(/sign in to continue/i)).not.toBeInTheDocument();
  });
});

describe('<SignInForm /> : input and submit', () => {
  let wrapper;
  let handleFormSubmit;
  let handleFormInput;
  const authState = {};

  const validUser = {
    email: 'admin@e.com',
    password: 'Admin123',
  };

  beforeEach(() => {
    handleFormSubmit = jest.fn();
    handleFormInput = jest.fn();
    wrapper = mount(
      <AuthContextProvider value={{ authState }}>
        <LoginForm
          handleFormSubmit={handleFormSubmit}
          handleFormInput={handleFormInput}
        />
      </AuthContextProvider>,
    );
  });

  test('calls handleFormSubmit handler when submit btn is clicked', () => {
    wrapper.find('input[type="email"]').first().value = validUser.email;
    wrapper.find('input[type="password"]').first().value = validUser.password;

    wrapper
      .find('button[type="submit"]')
      .first()
      .simulate('click');

    expect(handleFormSubmit).toHaveBeenCalledTimes(1);
  });

  test('calls handleFormSubmit handler when form is submitted (eg via {enter}', () => {
    wrapper.find('input[type="email"]').first().value = validUser.email;
    wrapper.find('input[type="password"]').first().value = validUser.password;

    wrapper
      .find('form')
      .first()
      .simulate('submit');

    expect(handleFormSubmit).toHaveBeenCalledTimes(1);
  });

  test('calls handleFormInput handler when change happens in either input', () => {
    wrapper
      .find('input[type="email"]')
      .first()
      .simulate('change', { target: { value: 'ada@lovelace.net' } });

    wrapper
      .find('input[type="password"]')
      .first()
      .simulate('change', { target: { value: 'ai need a pwd' } });

    expect(handleFormInput).toHaveBeenCalledTimes(2);
  });
});
