import {configureStore} from '@reduxjs/toolkit'
import {logger} from 'redux-logger'
import { nameReducer } from '../reducers/nameReducer'
import { locReducer } from '../reducers/locReducer'

export const appStore=configureStore({
    reducer:{
        nameReducer,
        locReducer
    },
    middleware:[logger]
})