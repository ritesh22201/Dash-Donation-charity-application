import axios from "axios";
import { GET_DONATED_DATA, GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS, POST_CATEGORY_SUCCESS } from "./actionType";


export const getOrg = () => (dispatch) => {
    dispatch({ type: GET_REQUEST });
    axios.get("https://odd-lion-life-jacket.cyclic.app/organization").then((res) => {

        dispatch({ type: GET_REQUEST_SUCCESS, payload: res.data });

    }).catch((err) => {
        dispatch({ type: GET_REQUEST_FAILURE });
    })
}

export const getDonatedData = (token) => (dispatch) => {
    dispatch({ type: GET_REQUEST });
    axios.get("https://odd-lion-life-jacket.cyclic.app/donatedData", {
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    }).then((res) => {
        // console.log(res)
        dispatch({ type: GET_DONATED_DATA, payload: res.data });
    }).catch((err) => {
        dispatch({ type: GET_REQUEST_FAILURE });
    })
}

export const postCategory = (data, id, token) => (dispatch) => {
    // console.log(id)
    dispatch({ type: GET_REQUEST });
    axios.patch(`https://odd-lion-life-jacket.cyclic.app/donatedData/update/${id}`, { category: data }, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then((res) => {
        // console.log(res)
        dispatch({ type: POST_CATEGORY_SUCCESS, payload : res.data });
    }).catch((err) => {
        // console.log(err)
        dispatch({ type: GET_REQUEST_FAILURE });
    })
}