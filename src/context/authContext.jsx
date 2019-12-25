import React from 'react';
import {
  createLoginRequestAction,
  createLoginUserAction,
  createLogoutUserAction,
  createHandleAuthErrorAction,
} from '../store/actions/authActions';
import store from '../store/configureStore';

import authReducer, { initialAuthState } from '../store/reducers/authReducer';

const AuthContext = React.createContext(initialAuthState);
export const useAuthContext = () => React.useContext(AuthContext);

/**
 * @description Export a wrapper that avails the auth
 * context in all children
 */
export const AuthContextProvider = (props) => {
  const cachedState = store.getState().auth;
  const [authState, dispatch] = React.useReducer(
    authReducer,
    cachedState || initialAuthState,
  );

  /**
   * @description Mod the AuthContext to indicate that
   * a request for authentication
   * is in progress
   */
  function onLoginRequest() {
    dispatch(createLoginRequestAction());
    store.dispatch(createLoginRequestAction());
  }

  /**
   * @description Mod the AuthContext to add a user who
   * has been successfully authenticated
   * @param {object} user the newly authenticated user
   */
  function onLoginSuccess(user) {
    dispatch(createLoginUserAction(user));
    store.dispatch(createLoginUserAction(user));
  }

  /**
   * @description Mod the AuthContext to remove the
   * authenticatedUser from AuthContext
   */
  function onLogout() {
    dispatch(createLogoutUserAction());
    store.dispatch(createLogoutUserAction());
  }

  /**
   * @description Mod the AuthContext to indicate that
   * an error happened during authentication
   * @param {object} error
   */
  function onError(error) {
    dispatch(createHandleAuthErrorAction(error));
    store.dispatch(createHandleAuthErrorAction(error));
  }

  /**
   * @description Assemble authState and modifier fns
   * into an optimized object
   */
  const value = React.useMemo(
    () => ({
      onLoginRequest,
      onLoginSuccess,
      onLogout,
      onError,
      authState,
    }),
    [authState],
  );

  return <AuthContext.Provider value={value} {...props} />;
};

/**
 * @description Calculate whether the currently authenticated user
 * is allowed access to a given resource
 * @param {object} authContext Current auth context
 * @param {object} resource Resource available at a certain route
 */
export function isAllowedAccess(authContext, resourcePermission) {
  if (resourcePermission && !authContext.authState.user) return false;

  const { user } = authContext.authState;
  return user.permissions.includes(resourcePermission);
}
