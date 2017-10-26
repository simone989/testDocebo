import {
  DOWNLOAD_DATA_SUCCESS,
  DOWNLOAD_DATA_START,
  DOWNLOAD_DATA_FAIL
} from '../actions/types';

let initialState = {
  error: null,
  isLoading: false,
  data: null
};

export default filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_DATA_START:
      return { ...state, isLoading: true, error: null };
    case DOWNLOAD_DATA_SUCCESS:
      return { ...state, data: action.payload, isLoading: false, error: null };
    case DOWNLOAD_DATA_FAIL:
      return {
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
