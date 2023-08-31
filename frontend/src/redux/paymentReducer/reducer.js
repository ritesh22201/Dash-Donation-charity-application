// import { GET_DONATED_DATA, GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS, POST_CATEGORY_SUCCESS } from "./actionType";
import { PAYMENT_REQ, PAYMENT_REQ_FAILURE, PAYMENT_REQ_SUCCESS } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  paymentData : ''
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PAYMENT_REQ:
      return { ...state, isloading: true, isError: false };
    case PAYMENT_REQ_SUCCESS:
      return { ...state, isloading: false, isError: false, paymentData : payload};
    case PAYMENT_REQ_FAILURE:
      return { ...state, isloading: false, isError: true };
    default:
      return state;
  }
};  
