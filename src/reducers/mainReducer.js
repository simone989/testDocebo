import {
  DOWNLOAD_DATA_SUCCESS,
  DOWNLOAD_DATA_START,
  DOWNLOAD_DATA_FAIL,
  USER_ORDER_TYPE_FILTER,
  RESET_DATA,
  USER_FILTER_START
} from '../actions/types';

let initialState = {
  error: null,
  isLoading: false,
  data: [],
  dataFilter: [],
  radioSelect_AtoZ: true,
  radioSelect_ZtoA: false,
  courseType: 'all'
};

export default mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case DOWNLOAD_DATA_SUCCESS:
      return {
        data: state.data.concat(action.payload),
        dataFilter: state.data.concat(action.payload),
        isLoading: false,
        error: null,
        radioSelect_AtoZ: true,
        radioSelect_ZtoA: false,
        courseType: 'all'
      };
    case DOWNLOAD_DATA_FAIL:
      return {
        error: action.payload,
        isLoading: false
      };
    case USER_FILTER_START:
      return {
        ...state,
        isLoading: true
      };
    case USER_ORDER_TYPE_FILTER:
     if (action.payload.filterOrder === 'AtoZ' && action.payload.filterType === 'all') {
       return {
         data: state.data,
         dataFilter: state.data.sort((a, b) => (a.course_type.toUpperCase() > b.course_type.toUpperCase()) ? 1 : ((b.course_type.toUpperCase() > a.course_type.toUpperCase()) ? -1 : 0)),
         isLoading: false,
         error: null,
         radioSelect_AtoZ: true,
         radioSelect_ZtoA: false,
         courseType: action.payload.filterType
       };
     } else if (action.payload.filterOrder === 'AtoZ') {
        return {
          data: state.data,
          dataFilter: state.data.filter((a) => a.course_type === action.payload.filterType).sort((a, b) => (a.course_type.toUpperCase() > b.course_type.toUpperCase()) ? 1 : ((b.course_type.toUpperCase() > a.course_type.toUpperCase()) ? -1 : 0)),
          isLoading: false,
          error: null,
          radioSelect_AtoZ: true,
          radioSelect_ZtoA: false,
          courseType: action.payload.filterType
        };
      } else if (action.payload.filterOrder === 'ZtoA' && action.payload.filterType === 'all') {
        return {
          data: state.data,
          dataFilter: state.data.sort((a, b) => (a.course_type.toUpperCase() > b.course_type.toUpperCase()) ? 1 : ((b.course_type.toUpperCase() > a.course_type.toUpperCase()) ? -1 : 0)),
          isLoading: false,
          error: null,
          radioSelect_AtoZ: false,
          radioSelect_ZtoA: true,
          courseType: action.payload.filterType
        };
      }  else if (action.payload.filterOrder === 'ZtoA') {
         return {
          data: state.data,
          dataFilter: state.data.filter((a) => a.course_type === action.payload.filterType).sort((a, b) => (a.course_type.toUpperCase() < b.course_type.toUpperCase()) ? 1 : ((b.course_type.toUpperCase() < a.course_type.toUpperCase()) ? -1 : 0)),
          isLoading: false,
          error: null,
          radioSelect_AtoZ: false,
          radioSelect_ZtoA: true,
          courseType: action.payload.filterType
         };
      }
     case RESET_DATA:
      return {
        data: [],
        dataFilter: [],
        isLoading: false,
        error: null,
        radioSelect_AtoZ: true,
        radioSelect_ZtoA: false,
        courseType: 'all'
      };
    default:
      return state;
  }
};
