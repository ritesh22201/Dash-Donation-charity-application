import axios from 'axios';
import * as actionTypes from './actionTypes';


// Define action creators
export const fetchDonationsRequest = () => ({
  type: actionTypes.FETCH_DONATIONS_REQUEST,
});


export const fetchDonationsSuccess = (donations) => ({
  type: actionTypes.FETCH_DONATIONS_SUCCESS,
  payload: donations,
});


export const fetchDonationsFailure = (error) => ({
  type: actionTypes.FETCH_DONATIONS_FAILURE,
  payload: error,
});
export const updateDonationsSuccess = (data) => ({
  type: actionTypes.UPDATE_DONATIONS_SUCCESS,
  payload: data
})
// Asynchronous action to fetch donation data
export const fetchDonations = (token) => (dispatch) => {
  dispatch(fetchDonationsRequest());
  fetch(`https://odd-lion-life-jacket.cyclic.app/donation`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      dispatch(fetchDonationsSuccess(data))
    })
    .catch((error) => dispatch(fetchDonationsFailure(error.message)));
};


export const UpdateDonations = (data, token) => (dispatch) => {
  dispatch(fetchDonationsRequest());
  axios.put(`https://odd-lion-life-jacket.cyclic.app/donation`, {
    data
  }, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => {
    console.log(res);
    dispatch(updateDonationsSuccess(data))
  })
    .catch((error) => dispatch(fetchDonationsFailure(error.message)));

};

export const saveDonation = (payload, token) => (dispatch) => {
  dispatch(fetchDonationsRequest());

  axios.post('https://odd-lion-life-jacket.cyclic.app/donatedData/addData', payload, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
    .then(res => {
      // console.log(res)
      dispatch({ type: actionTypes.SAVE_DONATION_DATA, payload : res.data._id });
    })
    .catch(err => {
      console.log(err)
      dispatch(fetchDonationsFailure(err.message));
    })
}

export const deleteSavedDonation = (id, token) => (dispatch) => {
  dispatch(fetchDonationsRequest());

  axios.post(`https://odd-lion-life-jacket.cyclic.app/donatedData/delete/${id}`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
    .then(res => {
      // console.log(res)
      dispatch({ type: actionTypes.DELETE_SAVED_DONATION_DATA });
    })
    .catch(err => {
      dispatch(fetchDonationsFailure(err.message));
    })
}


export const postDonation = (payload, token) => (dispatch) => {
  dispatch(fetchDonationsRequest());

  axios.post('https://odd-lion-life-jacket.cyclic.app/donation/addDonation', payload, {
    headers : {
      "Authorization" : `Bearer ${token}`
    }
  })
    .then(res => {
      if(res.data._id){
        dispatch({type : actionTypes.SAVE_DONATION_DATA, payload : res.data._id});
      }
    })
    .catch(err => {
      dispatch(fetchDonationsFailure(err.message));
    })
}