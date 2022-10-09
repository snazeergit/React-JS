import React from 'react'
import { Login } from './Login/Login'
import {BrowserRouter, Routes,Route,Navigate} from 'react-router-dom'

export const BeforeLoggedIn = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
