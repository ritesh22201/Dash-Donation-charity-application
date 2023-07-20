import axios from "axios"
import { baseUrl } from "../../url"
import { ADMIN_FAILURE_ACTION, ADMIN_GET_ALL_SUCCESS, ADMIN_GET_ORG_SUCCESS, ADMIN_GET_SUCCESS, ADMIN_REQUEST_ACTION } from "./actionTypes"

export const getusersadmin = () => (dispatch) => {
    dispatch({type:ADMIN_REQUEST_ACTION})
    axios.get(`${baseUrl}/admin/userDetails?limit=5`).then((res)=>{
        // console.log(res.data)
        dispatch({type:ADMIN_GET_SUCCESS,payload:res.data})
    }).catch((err)=>{
        dispatch({type:ADMIN_FAILURE_ACTION})
    })
}


export const getAllusers = () => (dispatch) => {
    dispatch({type:ADMIN_REQUEST_ACTION})
    axios.get(`${baseUrl}/admin/userDetails/getallusers`).then((res)=>{
        // console.log(res.data)
        dispatch({type:ADMIN_GET_ALL_SUCCESS,payload:res.data})
    }).catch((err)=>{
        dispatch({type:ADMIN_FAILURE_ACTION})
    })
}

export const getOrganizations = () => (dispatch) => {
    dispatch({type:ADMIN_REQUEST_ACTION})
    axios.get(`${baseUrl}/organization`).then((res)=>{
        // console.log(res.data)
        dispatch({type:ADMIN_GET_ORG_SUCCESS,payload:res.data})
    }).catch((err)=>{
        dispatch({type:ADMIN_FAILURE_ACTION})
    })
}