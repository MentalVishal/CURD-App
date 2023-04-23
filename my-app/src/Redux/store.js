
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import { reducer as productReducer } from './Products/reducer';
import { reducer as AuthReducer } from './Authautication/reducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    productReducer,
    AuthReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))