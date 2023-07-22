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
      console.log(data);
      dispatch(fetchDonationsSuccess(data))})
    .catch((error) => dispatch(fetchDonationsFailure(error.message)));
};
