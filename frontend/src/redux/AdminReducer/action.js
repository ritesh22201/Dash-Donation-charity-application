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
  ADMIN_REQUEST_ACTION,
  SEARCH_VAL,
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
      // console.log(res)
      dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => {
      // console.log(err.response.data.msg)
      dispatch({ type: ADMIN_LOGIN_FAILURE, payload: err.response.data.msg });
    });
};


// export const getRegisterUSers = () => (dispatch) => {
//     dispatch({type : ADMIN_REQUEST_ACTION})
//    axios.get('https://odd-lion-life-jacket.cyclic.app/users')
//    .then(res => {
//    console.log(res.data)
//       dispatch({type : ADMIN_GET_REGISTERED_USERS, payload : res.data})
//    })
//    .catch(error => {
//      dispatch({type : ADMIN_FAILURE_ACTION, payload : error.response.data.msg})
 
//    })
// }

export const searchDonors = (val) => (dispatch) => {
    dispatch({ type: ADMIN_REQUEST_ACTION });
      axios
        .get(`${baseUrl}/admin/userDetails?q=${val}`)
        .then(res => {
        //   console.log(res);
          // setData(res.data);
          dispatch({type:SEARCH_VAL , payload : res.data})
        })
        .catch(err => {
            dispatch({type: ADMIN_LOGIN_FAILURE});
        });
}