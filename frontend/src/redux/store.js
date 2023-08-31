import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk from 'redux-thunk'
import {reducer as adminReducer} from './AdminReducer/reducer'
import { reducer as authReducer } from './authreducer/reducer';
import {reducer as donationReducer} from './donationReducer/reducer';
import {reducer as orgReducer} from './OrgReducer/reducer';
import {reducer as paymentReducer} from './paymentReducer/reducer';
const rootReducer = combineReducers({
authReducer,adminReducer,donationReducer,orgReducer, paymentReducer

})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))