import * as TYPES from './genericTypes';

// ----- @actionCreators -----
export const fetchRequest = () => ({ type: TYPES.LOADING });

export const fetchSuccess = (data) => ({
  type: TYPES.FETCH_SUCCESS,
  payload: data,
});

export const fetchFail = (error) => ({
  type: TYPES.FETCH_FAIL,
  payload: error,
});

export const postSuccess = (data) => ({
  type: TYPES.POST_SUCCESS,
  payload: data,
});

export const postFail = (data) => ({
  type: TYPES.POST_FAIL,
  payload: data,
});

// ----- @thunks -----
