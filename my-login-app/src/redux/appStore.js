import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {myReducer} from './myReducer'


export const appstore=configureStore({
    reducer:{
        myReducer
    },
    middleware:[logger]
})