import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom'
import { Home } from './Home/Home';
import { Profile } from './Profile/Profile';

export const AfterLogin = () => {
  const fnLogout = () => {
    localStorage.clear()
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/home">KRTiles</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/profiled">Profile</Nav.Link>
              <Nav.Link href="/login" onClick={fnLogout}>Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profiled" element={<Profile />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
