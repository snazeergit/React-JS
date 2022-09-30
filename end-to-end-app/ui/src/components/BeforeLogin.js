import React from 'react'
import { Login } from './Login/Login'
import { Register } from "./Register/Register"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

export const BeforeLogin = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
