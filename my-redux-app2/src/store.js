import { nameReducer } from "./reducers/nameReducer";
import { locationReducer } from "./reducers/locationReducer";
import { mobileReducer } from "./reducers/mobileReducer";
import {configureStore} from '@reduxjs/toolkit'
import {logger} from 'redux-logger'

export const myStore=configureStore({
    reducer:{
        nameReducer,
        locationReducer,
        mobileReducer
    },
    middleware:[logger]
})