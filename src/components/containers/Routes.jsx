import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  SECURED_RESOURCES,
  UNSECURED_RESOURCES,
} from '../../constants/resources';
import Loader from '../presentation/Loader';
import FourOhFour from '../presentation/404';
import { useAuthContext, isAllowedAccess } from '../../context/auth';

/**
 * @description Create routes
 * : Secured resources will be shown as 404s if authenticated user does not
 * have requisite privileges
 */
export default function Routes() {
  const auth = useAuthContext();
  return (
    <Switch>
      {RouteItem({ auth, resource: UNSECURED_RESOURCES.loginPage })}

      {RouteItem({ auth, resource: SECURED_RESOURCES.dashboard })}
      {RouteItem({ auth, resource: SECURED_RESOURCES.requisitions })}
      {RouteItem({ auth, resource: SECURED_RESOURCES.receipts })}

      <Route path="*" component={FourOhFour} />
    </Switch>
  );
}

/**
 * @description This HoC renders a route, on condition
 * that a user is allowed access to the resource available
 * at that route.
 * The default NotFound page is rendered for an unauthorized user
 * @param {object} props
 */
export function RouteItem(props) {
  const {
    resource: { path, component: Component, layout: Layout, permissions },
    auth,
  } = props;

  /**
   * @description Internal helper to show loader if isFetching
   * is true
   */
  function renderLoaderOrComponent(rProps) {
    return auth.isFetching ? <Loader {...rProps} /> : <Component {...rProps} />;
  }

  if (permissions) {
    const accessGranted = isAllowedAccess(auth, permissions);
    return auth.authState.user ? (
      <Route
        exact
        path={path}
        render={(rProps) => (
          <Layout>
            {accessGranted ? (
              renderLoaderOrComponent(rProps)
            ) : (
              <FourOhFour {...rProps} />
            )}
          </Layout>
        )}
      />
    ) : (
      <Redirect to="/" />
    );
  }
  return (
    <Route
      exact
      path={path}
      render={() => <Layout>{renderLoaderOrComponent()}</Layout>}
    />
  );
}

RouteItem.propTypes = {
  resource: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    permissions: PropTypes.string.isRequired,
  }).isRequired,

  auth: PropTypes.any.isRequired,
};
