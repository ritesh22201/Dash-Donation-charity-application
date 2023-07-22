import * as actionTypes from './actionTypes';

// Define initial state
 const initialState = {
  donation: [],
  loading: false,
  error: null,
};
// Define the reducer function
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DONATIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_DONATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        donation: action.payload,
      };
    case actionTypes.FETCH_DONATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

