import axios from "axios";
import { PAYMENT_REQ, PAYMENT_REQ_FAILURE, PAYMENT_REQ_SUCCESS } from "./actionTypes"


export const postPayment = (payload, token, cardDetails) => (dispatch) => {
    dispatch({type : PAYMENT_REQ});
    // console.log(payload)
    axios.post('https://odd-lion-life-jacket.cyclic.app/payment/orders', payload, {
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    })
    .then(res => {
        initPayment(res.data.data, cardDetails, dispatch)
    })
    .catch(err => {
        // console.log(err)
        dispatch({type : PAYMENT_REQ_FAILURE})
    })
}

const initPayment = (data, cardDetails, dispatch) => {
    const options = {
        key : process.env.razorPayKey,
        currency : data.currency,
        cardName : cardDetails.cardName,
        order_id : data.id,
        amount : data.amount,

        handler : async (response) => {
            try {
                const {data} = await axios.post('https://odd-lion-life-jacket.cyclic.app/payment/verify', response);
                dispatch({type : PAYMENT_REQ_SUCCESS, payload : data.msg})
            } catch (error) {
                console.log(error);
            }
        }, 
        theme : {
            color : "#3399cc"
        }
    }

    const razorPay = new window.Razorpay(options);
    razorPay.open();
}