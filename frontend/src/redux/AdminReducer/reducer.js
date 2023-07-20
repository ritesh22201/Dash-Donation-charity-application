import { ADMIN_FAILURE_ACTION, ADMIN_GET_ALL_SUCCESS, ADMIN_GET_ORG_SUCCESS, ADMIN_GET_SUCCESS, ADMIN_REQUEST_ACTION } from "./actionTypes"

const initialState = {
    isLoading:false,
    users : [],
    allusers:[],
    orgs:[],
    isError : false
}


export const reducer = (state=initialState,{type,payload}) => {
    switch(type){
      case ADMIN_REQUEST_ACTION : {
        return {
            ...state,
            isLoading : true,
            isError : false
        }
      }
      case ADMIN_GET_SUCCESS : {
        return {
            ...state,
            isLoading : false,
            users : payload,
            isError : false
        }
      }
      case ADMIN_GET_ALL_SUCCESS : {
        return {
            ...state,
            isLoading : false,
            allusers:payload,
            isError : false
        }
      }
      case ADMIN_GET_ORG_SUCCESS : {
        return {
            ...state,
            isLoading : false,
            orgs:payload,
            isError : false
        }
      }
      case ADMIN_FAILURE_ACTION : {
        return {
            ...state,
            isLoading : false,
            isError : true
        }
      }
      default : {
        return state
      }
    }
}