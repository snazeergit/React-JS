import {configureStore} from '@reduxjs/toolkit'
import {myReducer} from './reducer'
import logger from 'redux-logger'

const store=configureStore({
    reducer:{
        myReducer
    },
    middleware:[logger]
})

export default store