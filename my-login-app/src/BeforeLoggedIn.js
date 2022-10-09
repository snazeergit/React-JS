import React from 'react'
import { Login } from './Login/Login'

export const BeforeLoggedIn = () => {
    return (
        <div>
            <p>BeforeLoggedIn</p>
            <Login />
        </div>
    )
}
