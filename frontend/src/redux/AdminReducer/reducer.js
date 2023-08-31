import {
  ADMIN_DELETE_SUCCESS,
  ADMIN_FAILURE_ACTION,
  ADMIN_GET_ADMIN,
  ADMIN_GET_ALL_SUCCESS,
  ADMIN_GET_ORG_SUCCESS,
  ADMIN_GET_REGISTERED_USERS,
  ADMIN_GET_SUCCESS,
  ADMIN_LOGIN_FAILURE,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_REQUEST_ACTION,
  BLOCK_USER,
  SEARCH_VAL,
} from './actionTypes';

const initialState = {
  isLoading: false,
  users: [],
  allusers: [],
  orgs: [],
  admins: [],
  regusers:[],
  searchusers : [],
  blockeduser : [],
  isError: false,
  isAuth: false,
  qval:false,
  token: '',
  errmsg: '',
  msg: '',
  loggedInuser : {}

};

// console.log(initialState.allusers)

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
      // const {token,name} = payload
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token:payload.token,
        loggedInuser:payload.name
      };
    }


    case ADMIN_FAILURE_ACTION: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        errmsg:payload
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

    case SEARCH_VAL : {
      return {
        ...state,
        isLoading: false,
        isError: true,
        searchusers : payload,
        qval:true
      }
    }
    case BLOCK_USER : {
      return {
        ...state,
        isLoading: false,
        isError: false,
        blockeduser : payload
      }
    }
   
    default: {
      return state;
    }
  }
};