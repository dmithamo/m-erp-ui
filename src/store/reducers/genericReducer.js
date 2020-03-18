import * as TYPES from '../actions/genericTypes';

export default function genericReducer(prevState = GENERIC_INIT_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.LOADING:
      return { ...prevState, isLoading: true };

    case TYPES.FETCH_SUCCESS:
      return { ...prevState, isLoading: false, data: payload };

    case TYPES.FETCH_FAIL:
      return { ...prevState, isLoading: false, error: payload };

    case TYPES.POST_SUCCESS:
      return {
        ...prevState,
        isLoading: false,
        data: [...prevState.data, payload],
      };

    case TYPES.POST_FAIL:
      return { ...prevState, isLoading: false, error: payload };

    default:
      return prevState;
  }
}
export const GENERIC_INIT_STATE = { isLoading: false, error: false, data: {} };
