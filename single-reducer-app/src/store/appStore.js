import { configureStore } from '@reduxjs/toolkit'
import { myReducer } from '../reducer/myReducer'
import { logger } from 'redux-logger'

export const appStore = configureStore(
    {
        reducer: {
            myReducer
        },
        middleware: [logger]
    }
)