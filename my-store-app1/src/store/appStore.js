import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import {locReducer} from '../reducers/locReducer'
import { nameReducer } from '../reducers/nameReducer'

export const appStore=configureStore({
    reducer: {
        nameReducer,
        locReducer
    },
    middleware: [logger]
})