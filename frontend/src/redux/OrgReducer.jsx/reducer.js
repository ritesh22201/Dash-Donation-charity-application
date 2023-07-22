import { GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS } from "./actionType";

  const initialState = {
    isLoading: false,
    isError: false,
    orgData: '',
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_REQUEST_FAILURE:
        return { ...state, isloading: false, isError: true };
      case GET_REQUEST_SUCCESS:
        return { ...state, isloading: false, orgData : payload};
      case GET_REQUEST:
        return { ...state, isloading: true, isError: false };
      default:
        return state;
    }
  };
  