import { configureStore } from '@reduxjs/toolkit'
import {appReducer} from '../reducers/appReducer'
import logger from 'redux-logger'

//create store
export const appStore = configureStore({
    reducer: {
        appReducer
    },
    middleware: [logger]
})