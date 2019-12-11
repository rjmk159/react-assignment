import { SET_LOADING } from '../utils/constants';

export function setLoading(status) {
  return dispatch => {
    dispatch(setLoad(status))
  }
}

export function setLoad (status){
  return {
    status,
    type: SET_LOADING,
  };
}
