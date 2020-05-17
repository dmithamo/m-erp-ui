import {
  CLEAR_FORM_ERRORS,
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  POST_FAILURE,
  POST_REQUEST,
  POST_SUCCESS,
} from '../actions';

/**
 * @description Update state in response to an action
 * @param {object} prevState
 * @param {object} action
 * @return {object} state
 */
export default function reducer(prevState = null, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_REQUEST:
      return {
        ...prevState,
        isFetching: true,
      };

    case FETCH_SUCCESS:
      return {
        ...prevState,
        isFetching: false,
        data: payload,
      };

    case FETCH_FAILURE:
      return {
        ...prevState,
        isFetching: false,
        fetchError: payload,
      };

    case POST_REQUEST:
      return {
        ...prevState,
        form: { ...prevState.form, isPosting: true },
      };

    case POST_SUCCESS:
      return {
        ...prevState,
        data: [...prevState.data, payload],
        form: { ...prevState.form, isPosting: false },
      };

    case POST_FAILURE:
      return {
        ...prevState,
        form: {
          ...prevState.form,
          postError: payload,
          isPosting: false,
        },
      };

    case CLEAR_FORM_ERRORS:
      return {
        ...prevState,
        form: {
          ...prevState.form,
          postError: false,
        },
      };

    default:
      return prevState;
  }
}
