import api from '../../services';
import makeSingular from '../../utils/makeSingular';

/*
 * @action types
 */
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';
export const FORM_VALIDATION_ERR = 'FORM_VALIDATION_ERR';
export const CLEAR_FORM_ERRORS = 'CLEAR_FORM_ERRORS';

/*
 * @actions
 */

/**
 * @description Indicate that a GET request is in progress
 @param {string} stateName Slice of state that this action targets
 */
export function initiateFetchRequest(stateName) {
  return { type: FETCH_REQUEST, stateName };
}

/**
 * @description Indicate that a POST request is in progress
 * @param {string} stateName Slice of state that this action targets
 */
export function initiatePostRequest(stateName) {
  return { type: POST_REQUEST, stateName };
}

/**
 * @description Load all fetched items into the store
 * @param {array} items
 * @param {string} stateName Slice of state that this action targets
 */
export function fetchSuccess(items, stateName) {
  return { type: FETCH_SUCCESS, payload: items, stateName };
}

/**
 * @description Add a GET err to the store
 * @param {object} err
 * @param {string} stateName Slice of state that this action targets
 */
export function fetchFailure(err, stateName) {
  return { type: FETCH_FAILURE, payload: err, stateName };
}

/**
 * @description Load a newly minted item to the store
 * @param {object} item
 * @param {string} stateName Slice of state that this action targets
 */
export function postSuccess(item, stateName) {
  return { type: POST_SUCCESS, payload: item, stateName };
}

/**
 * @description Add a POST error to the store
 * @param {object} err
 * @param {string} stateName Slice of state that this action targets
 */
export function postFailure(err, stateName) {
  return { type: POST_FAILURE, payload: err, stateName };
}

/**
 * @description Remove errors from store
 * @param {string} stateName Slice of state that this action targets
 */
export function clearFormErrors(stateName) {
  return { type: CLEAR_FORM_ERRORS, stateName };
}

/*
 * @thunks
 */

/**
 * @description Make API request to fetch all resources
 * && dispatch appropriate actions to store depending on
 * API response
 * @param {string} stateName Slice of state that this action targets
 */
export function fetchResources(stateName, path) {
  return async (dispatch) => {
    // toggle isFetching to true to show loader
    dispatch(initiateFetchRequest(stateName));

    try {
      const res = await api.get(path);

      const resourceName = `${
        stateName.includes('single')
          ? stateName.split('single')[1].toLowerCase()
          : stateName
      }`;

      if (res && res.status === 200) {
        dispatch(fetchSuccess(res.data[resourceName], stateName));
        return;
      }
    } catch (error) {
      dispatch(fetchFailure(handleApiError(error), stateName));
    }
  };
}

/**
 * @description Make API request to create a resource
 * && dispatch appropriate actions to store depending on
 * API response
 * @param {string} stateName Slice of state that this action targets
 * @param {object} resource
 */
export function createNewResource(stateName, path, resource) {
  return async (dispatch) => {
    // toggle isPosting to disable buttons
    dispatch(initiatePostRequest(stateName));

    try {
      const res = await api.post(path, resource);

      const resourceName = `${
        stateName.includes('single')
          ? stateName.split('single')[1].toLowerCase()
          : makeSingular(stateName)
      }`;

      if (res && res.status === 201) {
        dispatch(postSuccess(res.data[resourceName], stateName));
        return;
      }

      if (res && res.status > 209) {
        dispatch(postFailure(res, stateName));
        return;
      }
    } catch (error) {
      dispatch(postFailure(handleApiError(error), stateName));
    }
  };
}

/**
 * @description Dispatch an error action to the store
 * @param {object} error
 * @param {string} stateName Slice of state that this action targets
 */
export function addError(error, stateName) {
  return (dispatch) => dispatch(postFailure(handleFormError(error), stateName));
}

/**
 * @description Dispatch an action to reset error to false
 * @param {string} stateName Slice of state that this action targets
 */
export function removeFormErrors(stateName) {
  return (dispatch) => dispatch(clearFormErrors(stateName));
}

/**
 * @description Helper to determine what kind of err to report
 * after bad (NOT OK) API response
 * @param {object} error
 */
function handleApiError(error) {
  if (error.response && error.response.status === 404) {
    return { status: 404, message: 'NOT_FOUND' };
  }

  return error.response && error.response.data
    ? {
        status: error.response.status || 500,
        message: error.response.data.msg || 'SERVER_ERR',
      }
    : { status: 500, message: 'NO_RESPONSE' };
}

/**
 * @description Determine error to report a validation failure
 * @param {object} error
 */
function handleFormError(error) {
  return { ...error /* status: 400 <Bad Request> */ };
}
