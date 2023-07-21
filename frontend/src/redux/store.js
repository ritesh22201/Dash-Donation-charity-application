import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk from 'redux-thunk'

import {reducer as adminReducer} from './AdminReducer/reducer'
import { reducer as authReducer } from './authreducer/reducer';
import donationReducer from './donation/reducer'; // Replace with the correct path to your donationReducer file

const rootReducer = combineReducers({
authReducer,adminReducer,donationReducer

})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))