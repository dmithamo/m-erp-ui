import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import NotFound from './NotFound';
import { FrontLayout, DashboardLayout } from '../common/components/Layouts';
import SignInForm from './auth/SignInForm';
import RESOURCES from '../common/constants/resources';
import Loader from '../common/components/Loader';

export function Routes() {
  const { user, isPosting } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Switch>
        <RouteItem
          exact
          name="SignInForm"
          path="/"
          component={SignInForm}
          layout={FrontLayout}
          permissions=""
          isPosting={isPosting}
        />

        {user ? (
          Object.values(RESOURCES).map((resource) => (
            <RouteItem
              exact
              key={resource.path}
              name={resource.name}
              path={resource.path}
              component={resource.component}
              permissions={resource.permissions}
              user={user}
            />
          ))
        ) : (
          <Redirect to="/" />
        )}
        <RouteItem
          name="not-found"
          path="*"
          component={NotFound}
          layout={DashboardLayout}
          permissions=""
        />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;

function RouteItem(props) {
  const {
    exact,
    component: Component,
    layout: Layout,
    path,
    permissions,
    isPosting,
    user,
  } = props;

  const accessGranted =
    permissions === '' ||
    user.permissions === '::all::' ||
    user.permissions.contains(permissions);

  return (
    <>
      {accessGranted ? (
        <Route
          exact={exact}
          path={path}
          render={() => (
            <Layout>{isPosting ? <Loader /> : <Component />}</Layout>
          )}
        />
      ) : (
        <Layout>
          <NotFound />
        </Layout>
      )}
    </>
  );
}

RouteItem.propTypes = {
  exact: PropTypes.bool,
  layout: PropTypes.any,
  path: PropTypes.string.isRequired,
  component: PropTypes.any.isRequired,
  permissions: PropTypes.string.isRequired,
  isPosting: PropTypes.bool,
  user: PropTypes.any,
};

RouteItem.defaultProps = {
  exact: false,
  layout: DashboardLayout,
  isPosting: false,
  user: false,
};
