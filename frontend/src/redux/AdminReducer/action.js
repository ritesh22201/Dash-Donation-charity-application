import axios from 'axios';
import { baseUrl } from '../../url';
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
  ADMIN_LOGOUT_SUCCESS,
  ADMIN_REQUEST_ACTION,
  BLOCK_USER,
  SEARCH_VAL,
  UNBLOCK_USER,
} from './actionTypes';

export const getdonations = () => dispatch => {
  dispatch({ type: ADMIN_REQUEST_ACTION });
  axios
    .get(`${baseUrl}/admin/userDetails`)
    .then(res => {
      // console.log(res.data)
      dispatch({ type: ADMIN_GET_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADMIN_FAILURE_ACTION });
    });
};

export const getAllusers = () => dispatch => {
  dispatch({ type: ADMIN_REQUEST_ACTION });
  axios
    .get(`${baseUrl}/admin/userDetails/getallusers`)
    .then(res => {
      // console.log(res.data)
      dispatch({ type: ADMIN_GET_ALL_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADMIN_FAILURE_ACTION });
    });
};

export const deleteUsers = id => async(dispatch) => {
  dispatch({ type: ADMIN_REQUEST_ACTION });
  return await axios
    .delete(`${baseUrl}/admin/userDetails/delete/${id}`)
    .then(res => {
    console.log(res)
    })
    .catch(err => {
      dispatch({ type: ADMIN_FAILURE_ACTION });
    });
};

export const getAdmins = () => dispatch => {
  dispatch({ type: ADMIN_REQUEST_ACTION });
  axios
    .get(`${baseUrl}/admin/userDetails/adminusers`)
    .then(res => {
      // console.log(res.data)
      dispatch({ type: ADMIN_GET_ADMIN, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADMIN_FAILURE_ACTION });
    });
};

export const getOrganizations = () => dispatch => {
  dispatch({ type: ADMIN_REQUEST_ACTION });
  axios
    .get(`${baseUrl}/organization`)
    .then(res => {
      // console.log(res.data)
      dispatch({ type: ADMIN_GET_ORG_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADMIN_FAILURE_ACTION });
    });
};

export const adminLogin = payload => dispatch => {
  dispatch({ type: ADMIN_REQUEST_ACTION });
  axios
    .post(`${baseUrl}/admin/login`, payload)
    .then(res => {
      console.log(res)
      dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // console.log(err.response.data.msg)
      dispatch({ type: ADMIN_FAILURE_ACTION , payload: err.response.data.msg });
    });
};


export const adminLogout = () => dispatch => {
  dispatch({ type: ADMIN_REQUEST_ACTION });
  axios.get(`${baseUrl}/admin/logout`).then((res)=>{
    console.log(res)
    // dispatch({ type: ADMIN_LOGOUT_SUCCESS });
  }).catch(err=> {
    console.log(err)
    dispatch({ type: ADMIN_FAILURE_ACTION });
  })
}



export const searchDonors = (val) => (dispatch) => {
    dispatch({ type: ADMIN_REQUEST_ACTION });
      axios
        .get(`${baseUrl}/admin/userDetails?q=${val}`)
        .then(res => {
          console.log(res);
          // setData(res.data);
          dispatch({type:SEARCH_VAL , payload : res.data})
        })
        .catch(err => {
            dispatch({type: ADMIN_LOGIN_FAILURE});
        });
}



export const blockUser = (payload) => (dispatch) => {
  dispatch({ type: ADMIN_REQUEST_ACTION });
    axios
      .post(`${baseUrl}/admin/userDetails/blockuser`,payload)
      .then(res => {
        console.log(res);
        dispatch({type:BLOCK_USER,payload:res.data.blockuser.email})
      })
      .catch(err => {
          dispatch({type:ADMIN_FAILURE_ACTION });
      });
}



export const unBlockUser = (email) => (dispatch) => {
  dispatch({ type: ADMIN_REQUEST_ACTION });
    axios
      .get(`${baseUrl}/admin/userDetails/getblockuser`,email)
      .then(res => {
        console.log(res);
        dispatch({type:UNBLOCK_USER,payload:res})
      })
      .catch(err => {
          dispatch({type:ADMIN_FAILURE_ACTION });
      });
}