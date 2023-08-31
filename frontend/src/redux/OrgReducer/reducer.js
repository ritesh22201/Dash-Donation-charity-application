import { GET_DONATED_DATA, GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS, POST_CATEGORY_SUCCESS } from "./actionType";

const initialState = {
  isloading: false,
  isError: false,
  orgData: [],
  orgDataCategory: false,
  donatedData: []
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_REQUEST_FAILURE:
      return { ...state, isloading: false, isError: true, orgDataCategory: false, };
    case GET_REQUEST_SUCCESS:
      return { ...state, isloading: false, isError: false, orgData: payload };
    case GET_REQUEST:
      return { ...state, isloading: true, isError: false, orgDataCategory: false };
    case POST_CATEGORY_SUCCESS:
      return { ...state, isloading: false, isError: false, orgDataCategory: true };
    case GET_DONATED_DATA:
      return { ...state, isloading: false, isError: false, orgDataCategory: false, donatedData : payload };
    default:
      return state;
  }
};
