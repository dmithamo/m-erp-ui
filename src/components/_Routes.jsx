import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// My components
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import { SignUpFormTwo, SignUpForm } from './SignUpForm';
import SignInForm from './SignInForm';
import FourOhFour from './404';

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <RouteContainer>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/signup/2" component={SignUpFormTwo} />
        <Route exact path="/signin" component={SignInForm} />
        <Route component={FourOhFour} />
      </Switch>
    </RouteContainer>
  </BrowserRouter>
);

const RouteContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default hot(Routes);
