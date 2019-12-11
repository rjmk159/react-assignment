import { SET_LOADING } from '../utils/constants';

const initialState = {
  isLoading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.status };
    default:
      return { ...state };
  }
};

export default rootReducer;
