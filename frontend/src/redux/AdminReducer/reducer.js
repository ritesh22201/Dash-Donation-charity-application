import {
  ADMIN_DELETE_SUCCESS,
  ADMIN_FAILURE_ACTION,
  ADMIN_GET_ADMIN,
  ADMIN_GET_ALL_SUCCESS,
  ADMIN_GET_ORG_SUCCESS,
  ADMIN_GET_SUCCESS,
  ADMIN_LOGIN_FAILURE,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_REQUEST_ACTION,
} from './actionTypes';

const initialState = {
  isLoading: false,
  users: [],
  allusers: [],
  orgs: [],
  admins: [],
  isError: false,
  isAuth: false,
  token: '',
  errmsg: '',
  msg: '',
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_REQUEST_ACTION: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAuth: false,
      };
    }
    case ADMIN_GET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        users: payload,
        isError: false,
      };
    }
    case ADMIN_GET_ALL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        allusers: payload,
        isError: false,
      };
    }
    case ADMIN_GET_ADMIN: {
      return {
        ...state,
        isLoading: false,
        admins: payload,
        isError: false,
      };
    }
    case ADMIN_GET_ORG_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        orgs: payload,
        isError: false,
      };
    }

    case ADMIN_LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token: payload,
      };
    }

    case ADMIN_FAILURE_ACTION: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
      };
    }
    case ADMIN_LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        errmsg: payload,
      };
    }
    case ADMIN_DELETE_SUCCESS:
      const { deleteUserId, msg } = payload;
      const updatedUsers = state.allusers.filter(
        user => user.id !== deleteUserId
      );
      return {
        ...state,
        isLoading: false,
        allusers: updatedUsers,
        msg: msg,
      };
    default: {
      return state;
    }
  }
};
