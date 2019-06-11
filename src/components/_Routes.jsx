import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// My components
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import FourOhFour from './404';

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <RouteContainer>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/signin" component={SignInForm} />
        <Route component={FourOhFour} />
      </Switch>
    </RouteContainer>
  </BrowserRouter>
);

const RouteContainer = styled.section`
  text-align: center;
`;

export default Routes;
